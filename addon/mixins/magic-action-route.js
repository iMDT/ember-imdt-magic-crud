import Ember from 'ember';
import MagicCrud from './magic-crud';
import MagicBaseRoute from './magic-base-route';

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

  messages: {
    saved: 'Registro salvo com sucesso!',
    deleted: 'Registro excluido com sucesso!',
  },

  handleSaveSuccess() {
    return this.transitionTo(this.get('transitionToName') || this.get('routeName').split('.').slice(0, -1).join('.'))
      .then(() => this.get('flashMessages').success(this.get('messages.saved')));
  },

  handleDeleteSuccess() {
    return this.transitionTo(this.get('transitionToName'))
      .then(() => this.get('flashMessages').success(this.get('messages.deleted')));
  },

  handleError() {
    let controller = this.get('controller');
    let flashMessages = Ember.get(this, 'flashMessages');

    Object.keys(controller.get('model.errors')).forEach((attr) => {
      let errors = controller.get('model.errors.' + attr);
      if(errors.length){
        errors.forEach((message) => {
          flashMessages.danger(`${attr.charAt(0).toUpperCase() + attr.slice(1)} ${message}`);
        });
      }
    });
  },

  doSave() {
    return new Promise((resolve, reject) => {
      this.get('currentModel').validate()
        .then(() => {
          this.get('currentModel').save()
            .then((row) => {
              resolve(row);
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => reject(error));
    });
  },

  actions: {
    saveRecord() {
      this.doSave()
        .then(() => this.handleSaveSuccess())
        .catch((e) => this.handleError(e));
    },

    cancelAction() {
      this.transitionTo(this.get('transitionToName') || this.get('routeName').split('.').slice(0, -1).join('.'));
    },

    deleteRecord() {
      this.get('currentModel').destroyRecord()
        .then(() => this.handleDeleteSuccess())
        .catch((e) => this.handleError(e));
    },

    willTransition() {
      this.get('currentModel').rollbackAttributes();
    }
  }
});
