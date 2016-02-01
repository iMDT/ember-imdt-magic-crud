import Ember from 'ember';
import MagicActionRoute from './magic-action-route';

const {
  getProperties
} = Ember;

export default Ember.Mixin.create(MagicActionRoute, {
  renderTemplate: function(){
    this.render('magic-crud/form');
  },

  model(param){
    return this.store.findRecord(this.get('modelName'), param.id);
  }
});
