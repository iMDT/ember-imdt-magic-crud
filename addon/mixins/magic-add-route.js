import Ember from 'ember';
import MagicActionRoute from './magic-action-route';

const {
  getProperties
} = Ember;

export default Ember.Mixin.create(MagicActionRoute, {
  renderTemplate: function(){
    this.render('magic-crud/form', {
      into: 'application'
    });
  },

  model(){
    return this.store.createRecord(this.get('routeBase'));
  }
});
