import DS from 'ember-data';
import EmberValidations from 'ember-validations';

let City = DS.Model.extend(EmberValidations, {
  active: DS.attr('boolean', {
    defaultValue: true
  }),
  name: DS.attr('string'),
  description: DS.attr('string'),
  country: DS.belongsTo('country', { async: true }),

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

  validations: {
    name: {
      length: { minimum: 3 }
    },
    description: {
      length: { minimum: 4 }
    },
    country: {
      relationshipPresence: true
    }
  }
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
