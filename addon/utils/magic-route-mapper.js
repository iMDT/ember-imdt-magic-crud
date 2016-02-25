import Ember from 'ember';

export default Ember.Object.extend({
  map: function(context, route) {
    context.route(route, function() {
      this.route('add');
      this.route('edit', {
        path: 'edit/:id'
      });
      this.route('show', {
        path: 'show/:id'
      });
    });
  }
});
