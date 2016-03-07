import Ember from 'ember';
import MagicActionRoute from './magic-action-route';

export default Ember.Mixin.create(MagicActionRoute, {
  model(param) {
    return this.store.findRecord(Ember.Inflector.inflector.singularize(this.get('modelName')), param.id);
  }
});
