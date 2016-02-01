import Ember from 'ember';
import MagicBaseRoute from './magic-base-route';

const {
  getProperties
} = Ember;

export default Ember.Mixin.create(MagicBaseRoute, {
  // Delete success message
  deleteMessageSuccess: 'Record deleted',

  // Delete fail message
  deleteMessageFailed: 'The record couldn\'t be deleted',

  setupController(controller, model) {
    this._super(controller, model);
    const{
      routeName
    } = getProperties(this, 'routeName');

    controller.set('magicCrud', this.controllerFor(routeName).get('magicCrud'));
    controller.set('tableSortPropertiesMC', this.controllerFor(routeName).get('tableSortPropertiesMC'));
    controller.set('tableOptionsMC', this.controllerFor(routeName).get('tableOptionsMC'));

    controller.init();
  },

  renderTemplate: function(){
    this.render('magic-crud/table');
  },

  model(){
    return this.store.findAll(this.get('modelName'), { reload: true });
  },

  deleteRecord(item){
    const{
      routeName,
      deleteMessageSuccess,
      deleteMessageFailed
    } = getProperties(this, 'routeName', 'deleteMessageSuccess', 'deleteMessageFailed');

    this.transitionTo(routeName);
    let flashMessages = Ember.get(this, 'flashMessages');

    item.deleteRecord();
    item.save().then(() => {
      flashMessages.success(deleteMessageSuccess);
    },() => {
      flashMessages.danger(deleteMessageFailed);
    });
  },

  actions:{
    goToAction(operation, item){
      const {
        deleteMessageSuccess,
        deleteMessageFailed
      } = getProperties(this, 'deleteMessageSuccess', 'deleteMessageFailed');
      
      let routeName = this.get('routeName').replace('.index', '');

      if(operation === 'delete'){
        this.deleteRecord(item);
      }
      else if(operation === 'add'){
        this.transitionTo(routeName + '.' + operation);
      }
      else{
        this.transitionTo(routeName + '.' + operation, item);
      }
    }
  }
});
