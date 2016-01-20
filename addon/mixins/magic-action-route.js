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
  definitionObject: 'formDefinitionsMC',

  // Magic Crud Options object name
  magicCrudObject: 'magicCrud',

  // Save success message
  saveMessage: 'Record saved successfully',

  canRollbackModel: true,

  setupController(controller, model) {
    this._super(controller, model);
    const{
      routeBase,
      validationObject,
      definitionObject,
      magicCrudObject,
    } = getProperties(this, 'routeBase', 'validationObject', 'definitionObject', 'magicCrudObject');

    controller.reopen(MagicCrud);

    [validationObject, definitionObject, magicCrudObject].forEach((obj) => {
        controller.set(obj, this.controllerFor(routeBase).get(obj));
    });

    controller.init();
  },

  saveRecordSuccess(){
    let controller = this.get('controller');
    let routeBase = this.get('routeBase');
    let saveMessage = this.get('saveMessage');
    let flashMessages = Ember.get(this, 'flashMessages');

    this.set('canRollbackModel', false);
    controller.get('model').save().then(() => {
      let routeAfter;
      if(controller.get('magicCrud') && (routeAfter = controller.get('magicCrud.routeAfter'))){
        controller.transitionToRoute(routeAfter);
      }
      else{
        controller.transitionToRoute(routeBase);
      }
      flashMessages.success(saveMessage);
    },() => {
      let errors =  controller.get('model.errors')
      errors.forEach(function(error){
        flashMessages.danger(error.message);
      })
    });
  },

  // Fail saving record promisse callback
  saveRecordFail(){
    let controller = this.get('controller');
    let flashMessages = Ember.get(this, 'flashMessages');
    let definitionObject = this.get('definitionObject');

    let errors = controller.get('errors.model') || controller.get('model.errors');
    for(let item in errors){
      if(errors.hasOwnProperty(item)){
        let definitions = controller.get(definitionObject);
        for(let def in definitions){
          if(definitions[def] && 'model.'+item === definitions[def].attribute && errors.get(item).length){
            flashMessages.danger(definitions[def].label + ' ' + errors.get(item));
          }
        }
      }
    }
  },

  actions:{
    saveRecord(){
      const{
        controller
      } = getProperties(this, 'controller');
      controller.set('submitted', true);
      controller.validate().then(() => {
        this.saveRecordSuccess();
      }, () => {
        this.saveRecordFail();
      });
    },

    cancelAction(){
      this.transitionTo(this.get('routeBase'));
    },

    // Rollback model
    willTransition() {
      const{
        controller
      } = getProperties(this, 'controller');

      if(this.get('canRollbackModel')){

        if(controller.get('model').rollbackAttributes){
          controller.get('model').rollbackAttributes();
        }
      }

      this.set('canRollbackModel', true);
    }
  }
});
