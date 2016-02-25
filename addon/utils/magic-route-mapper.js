import Ember from 'ember';

export default Ember.Object.extend({
  map: function(context, route) {
    context.route(route, function() {
      this.route('new');
      this.route('edit', {
        path: '/:id'
      });
      this.route('show', {
        path: 'show/:id'
      });
    });
  }
});
