import Ember from 'ember';
import MagicIndexRouteMixin from '../../../mixins/magic-index-route';
import { module, test } from 'qunit';

module('Unit | Mixin | magic index route');

// Replace this with your real tests.
test('it works', function(assert) {
  var MagicIndexRouteObject = Ember.Object.extend(MagicIndexRouteMixin);
  var subject = MagicIndexRouteObject.create();
  assert.ok(subject);
});
