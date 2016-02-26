import DS from 'ember-data';

let Country = DS.Model.extend({
  active: DS.attr('boolean', {
    defaultValue: true
  }),
  name: DS.attr('string'),
  description: DS.attr('string'),

  /* DIRTY FIX FOR ROLLBACK ON RELANTIONSHIPS */
  rollbackAttributes() {
    this._super(...arguments);
    this.rollbackRelationships();
  },

  rollbackRelationships() {
    let model = this;
    model.eachRelationship((name, meta) => {
      if (meta.kind === 'belongsTo') {
        model.belongsTo(name).reload();
      } else if (meta.kind === 'hasMany') {
        model.hasMany(name).reload();
      }
    });
  },
});

Country.reopenClass({
  FIXTURES: [{
    id: 1,
    active: true,
    name: 'Country 1',
    description: 'Country 1 description'
  }, {
    id: 2,
    active: true,
    name: 'Country 2',
    description: 'Country 2 description'
  }, {
    id: 3,
    active: false,
    name: 'Country 3',
    description: 'Country 3 description'
  }, {
    id: 4,
    active: true,
    name: 'Country 4',
    description: 'Country 4 description'
  }]
});

export default Country;
