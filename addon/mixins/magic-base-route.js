import Ember from 'ember';

export default Ember.Mixin.create({
  // Split route name
  modelName: Ember.computed('routeName', function() {
    let routeBaseSplit = this.get('routeName').split('.');
    return routeBaseSplit.slice(routeBaseSplit.length - 2, -1)[0];
  }),
});
