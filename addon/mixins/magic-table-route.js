import Ember from 'ember';
import MagicBaseRoute from './magic-base-route';

const {
  getProperties
} = Ember;

export default Ember.Mixin.create(MagicBaseRoute, {
  // Delete success message
  deleteMessageSuccess: 'Registro excluido com sucesso!',

  // Delete fail message
  deleteMessageFailed: 'Falha na exclusão do registro',

  setupController(controller, model) {
    this._super(controller, model);

    let routeBaseName = this.get('routeName').split('.').slice(0, -1).join('.');
    controller.set('MagicCrud', this.controllerFor(routeBaseName).get('MagicCrud'));
    controller.set('tableSortPropertiesMC', this.controllerFor(routeBaseName).get('tableSortPropertiesMC'));
    controller.set('tableOptionsMC', this.controllerFor(routeBaseName).get('tableOptionsMC'));

    controller.init();
  },

  renderTemplate: function() {
    this.render('magic-crud/table');
  },

  model() {
    return this.store.findAll(Ember.Inflector.inflector.singularize(this.get('modelName')), {
      reload: true
    }).then(a => a.filterBy('isNew', false));
  },

  deleteRecord(item) {
    const {
      routeName,
      deleteMessageSuccess,
      deleteMessageFailed
    } = getProperties(this, 'routeName', 'deleteMessageSuccess', 'deleteMessageFailed');

    this.transitionTo(routeName);
    let flashMessages = Ember.get(this, 'flashMessages');

    item.deleteRecord();
    item.save().then(() => {
      flashMessages.success(deleteMessageSuccess);
    }, () => {
      flashMessages.danger(deleteMessageFailed);
    });
  },

  actions: {
    goToAction(operation, item) {

      let routeName = this.get('routeName').replace('.index', '');

      if (operation === 'delete') {
        this.deleteRecord(item);
      } else if (operation === 'new') {
        this.transitionTo(routeName + '.' + operation);
      } else {
        this.transitionTo(routeName + '.' + operation, item);
      }
    }
  }
});
