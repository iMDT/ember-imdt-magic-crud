import Ember from 'ember';
import MagicActionRoute from './magic-action-route';

export default Ember.Mixin.create(MagicActionRoute, {
  model() {
    return this.store.createRecord(this.get('modelName'));
  }
});
