import Ember from 'ember';
import MagicTableRoute from 'ember-imdt-magic-crud/mixins/magic-table-route';

export default Ember.Route.extend(MagicTableRoute, {
  beforeModel(){
    return this.store.findAll('country');
  }
});
