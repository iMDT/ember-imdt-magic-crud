import Ember from 'ember';

export default Ember.Mixin.create({
  // Split route name
  modelName: Ember.computed('routeName', function() {
    return this.get('routeName').split('.')[0];
  }),
});
