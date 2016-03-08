import Ember from 'ember';
import MagicRootRoute from 'ember-imdt-magic-crud/mixins/magic-root-route';

const{
  A
} = Ember;

export default Ember.Route.extend(MagicRootRoute, {
  MagicCrud:{
    options: {
      tableTitle: "City",
      crudTitle: "City CRUD"
    },

    table: {
      sortProperties: new A(['nome:asc']),
      columns: new A([{
        contentPath: 'id',
        columnTitle: '#'
      }, {
        contentPath: 'name',
        columnTitle: 'Name'
      }, {
        contentPath: 'country.name',
        columnTitle: 'Country'
      }, {
        contentPath: 'active',
        columnTitle: 'Active'
      }, {
        contentPath: 'template',
        columnTitle: 'Actions',
        template: 'custom/table-actions',
        isSortable: false
      }]),
    },

    form: [{
      attribute: 'active',
      type: 'switch',
    }, {
      attribute: 'country',
      label: 'Country',
      type: 'select',
      selectFunction: function(self) {
        return self.store.peekAll('country').filter((c) => {
          return c.get('active') || c.get('id') === self.get('model.country.id');
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'name'
    }, {
      attribute: 'name',
      label: 'Name',
      type: 'text',
      validations: {
        presence: true,
      }
    }, {
      attribute: 'description',
      label: 'Description',
      type: 'textarea',
      validations: {
        presence: true,
      }
    }]
  }
});
