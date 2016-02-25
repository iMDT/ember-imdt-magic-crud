import Ember from 'ember';
import config from './config/environment';
import MagicRouteMapper from 'ember-imdt-magic-crud/utils/magic-route-mapper';

var Router = Ember.Router.extend({
  location: config.locationType
});

const MagicRouter = MagicRouteMapper.create();

Router.map(function() {
  MagicRouter.map(this, 'country');
  MagicRouter.map(this, 'city');
});

export default Router;
