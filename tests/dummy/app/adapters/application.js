import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  authorizer: 'authorizer:imdt',
  host: ENV.API.baseURL,
  namespace: ENV.API.namespace,
  coalesceFindRequests: true,

  headers: {
    'content-type': 'application/json'
  },

  /* Changes the way ember-data send coalesced id's */
  findMany(store, type, ids, snapshots) {
    var url = this.buildURL(type.modelName, ids, snapshots, 'findMany');
    let data = {};

    data[this.pathForType(type.modelName)] = {
      id: ids
    };

    return this.ajax(url, 'GET', {
      data: {
        filter: data
      }
    });
  },

  flashMessages: Ember.inject.service('flashMessages'),
  handleResponse(status) {
    if (status === 419) {
      if (this.get('session.isAuthenticated')) {
        this.get('session').invalidate().then(() => {
          this.get('flashMessages').danger('Sessão expirada, realize o login novamente.');
        });
      }
      return true;
    } else {
      return this._super(...arguments);
    }
  }
});
