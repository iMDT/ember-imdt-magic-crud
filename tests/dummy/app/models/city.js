import DS from 'ember-data';

let City = DS.Model.extend({
  active: DS.attr('boolean', {
    defaultValue: true
  }),
  name: DS.attr('string'),
  description: DS.attr('string'),
  country: DS.belongsTo('country', { async: true })
});

City.reopenClass({
  FIXTURES: [{
    id: 1,
    active: true,
    name: 'City 1',
    description: 'City 1 description',
    country: 4
  }, {
    id: 2,
    active: true,
    name: 'City 2',
    description: 'City 2 description',
    country: 3
  }, {
    id: 3,
    active: false,
    name: 'City 3',
    description: 'City 3 description',
    country: 2
  }, {
    id: 4,
    active: true,
    name: 'City 4',
    description: 'City 4 description',
    country: 1
  }]
});

export default City;
