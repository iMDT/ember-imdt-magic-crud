import Ember from 'ember';
import MagicActionRoute from './magic-action-route';

export default Ember.Mixin.create(MagicActionRoute, {
  renderTemplate: function(){
    this.render('magic-crud/form');
  },

  model(){
    return this.store.createRecord(this.get('modelName'));
  },

  actions:{
    willTransition(){
      this.get('currentModel').rollbackAttributes();
    }
  }
});
