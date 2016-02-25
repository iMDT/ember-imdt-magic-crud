import Ember from 'ember';
import MagicRootRoute from 'ember-imdt-magic-crud/mixins/magic-root-route';

const{
  A
} = Ember;

export default Ember.Route.extend(MagicRootRoute, {
  // MagicCrud: {
  //   options: {
  //     tableTitle: "Country",
  //     crudTitle: "Country CRUD"
  //   },
  //
  //   table: {
  //     sortProperties: new A(['nome:asc']),
  //     columns: new A([{
  //       contentPath: 'id',
  //       columnTitle: '#'
  //     }, {
  //       contentPath: 'name',
  //       columnTitle: 'Name'
  //     }, {
  //       contentPath: 'active',
  //       columnTitle: 'Active'
  //     }, {
  //       contentPath: 'template',
  //       columnTitle: 'Actions',
  //       template: 'custom/table-actions',
  //       isSortable: false
  //     }])
  //   },
  //
  //   form: [{
  //     attribute: 'model.active',
  //     type: 'switch',
  //   }, {
  //     attribute: 'model.name',
  //     label: 'Name*',
  //     type: 'text',
  //     validations: {
  //       presence: true,
  //     }
  //   }, {
  //     attribute: 'model.description',
  //     label: 'Description',
  //     type: 'textarea',
  //     validations: {
  //       presence: true,
  //     }
  //   }, ]
  // }
});
