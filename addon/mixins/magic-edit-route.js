import Ember from 'ember';
import MagicActionRoute from './magic-action-route';

export default Ember.Mixin.create(MagicActionRoute, {
  renderTemplate: function(){
    this.render('magic-crud/form');
  },

  model(param){
    return this.store.findRecord(this.get('modelName'), param.id, { reload: true });
  },

  actions:{
    willTransition(){
      this.get('currentModel').rollbackAttributes();
    }
  }
});
