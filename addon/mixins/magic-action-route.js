import Ember from 'ember';
import MagicCrud from './magic-crud';
import MagicBaseRoute from './magic-base-route';
import EmberValidations from 'ember-validations';

const {
  getProperties
} = Ember;

export default Ember.Mixin.create(MagicBaseRoute, {
  // Validation Object name
  validationObject: 'validations',

  // Definitions Object name
  definitionObject: 'MagicCrud.form',

  // Magic Crud Options object name
  magicCrudObject: 'magicCrud',

  // Save success message
  saveMessage: 'Registro salvo com sucesso!',

  canRollbackModel: true,

  renderTemplate: function() {
    this.render('magic-crud/form');
  },

  setupController(controller, model) {
    this._super(controller, model);
    const {
      routeName
    } = getProperties(this, 'routeName');

    let routeBaseName = routeName.split('.').slice(0, -1).join('.');

    controller.set('MagicCrud', this.controllerFor(routeBaseName).get('MagicCrud'));
    // [validationObject, definitionObject, magicCrudObject].forEach((obj) => {
    //   controller.set(obj, this.controllerFor(routeBaseName).get(obj));
    // });

    controller.reopen(MagicCrud);

    controller.init();
  },

  saveRecordSuccess() {
    let controller = this.get('controller');
    let routeName = this.get('routeName');
    let saveMessage = this.get('saveMessage');
    let flashMessages = Ember.get(this, 'flashMessages');

    let routeBaseName = routeName.split('.').slice(0, -1).join('.');

    this.set('canRollbackModel', false);
    controller.get('model').save().then(() => {
      let routeAfter;
      if (controller.get('magicCrud') && (routeAfter = controller.get('magicCrud.routeAfter'))) {
        controller.transitionToRoute(routeAfter);
      } else {
        controller.transitionToRoute(routeBaseName);
      }
      flashMessages.success(saveMessage);
    }, () => {
      let errors = controller.get('model.errors');
      errors.forEach(function(error) {
        flashMessages.danger(error.message);
      });
    });
  },

  // Fail saving record promisse callback
  saveRecordFail() {
    let controller = this.get('controller');
    let flashMessages = Ember.get(this, 'flashMessages');
    let definitionObject = this.get('definitionObject');

    let errors = controller.get('errors.model') || controller.get('model.errors');
    for (let item in errors) {
      if (errors.hasOwnProperty(item)) {
        let definitions = controller.get(definitionObject);
        for (let def in definitions) {
          if (definitions[def] && 'model.' + item === definitions[def].attribute && errors.get(item).length) {
            flashMessages.danger(definitions[def].label + ' ' + errors.get(item));
          }
        }
      }
    }
  },

  actions: {
    saveRecord() {
        const {
          controller
        } = getProperties(this, 'controller');
        controller.set('submitted', true);
        controller.validate().then(() => {
          this.saveRecordSuccess();
        }, () => {
          this.saveRecordFail();
        });
      },

      cancelAction() {
        let routeBaseName = this.get('routeName').split('.').slice(0, -1).join('.');
        this.transitionTo(routeBaseName);
      },

      willTransition() {
        this.get('currentModel').rollbackAttributes();
      }
  }
});
