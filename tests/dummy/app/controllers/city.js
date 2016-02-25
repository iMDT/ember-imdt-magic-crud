import Ember from 'ember';

const {
  A
} = Ember;

export default Ember.Controller.extend({
  magicCrud: {
    tableTitle: "City",
    crudTitle: "City CRUD"
  },

  tableSortPropertiesMC: new A(['nome:asc']),
  tableOptionsMC: new A([{
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

  formDefinitionsMC: [{
    attribute: 'model.active',
    type: 'switch',
  }, {
    attribute: 'model.country',
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
    attribute: 'model.name',
    label: 'Name',
    type: 'text',
    validations: {
      presence: true,
    }
  }, {
    attribute: 'model.description',
    label: 'Description',
    type: 'textarea',
    validations: {
      presence: true,
    }
  }, ]
});
