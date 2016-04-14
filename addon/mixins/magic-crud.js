import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Mixin.create(EmberValidations, {
  // Definitions Object name
  definitionObject: 'formDefinitionsMC',

  // Validation definitions
  validations: null,

  // Form and validation definitions
  formDefinitionsMC: null,

  // MagicCrud custom definitions
  magicCrud: null,

  // Flag for initializeIfNotAlreadyMC
  isInitializedMC: false,

  // Set the definitions and rerun once
  init() {
    this._super();
    this.setDefinitionsMC();
    this.initializeIfNotAlreadyMC();
  },

  // Runs init if not run yet
  initializeIfNotAlreadyMC() {
    if (!this.get('isInitializedMC')) {
      this.set('isInitializedMC', true);
      this.init();
    }
  },

  // Set the definitions
  setDefinitionsMC() {
    let definitions = this.get('MagicCrud.form');
    if (definitions) {
      let validations;
      definitions.forEach((definition, key) => {
        if (!validations) {
          validations = {};
        }
        if (definition.validations) {
          validations[definition.attribute] = {};
          for (let validationKey in definition.validations) {
            validations[definition.attribute][validationKey] = definition.validations[validationKey];
          }
        }

        if (definition.selectFunction) {
          let selectFunction = definition.selectFunction;
          this.set('MagicCrud.form' + '.' + [key] + '.selectContent', selectFunction(this));
        }

        if(definition.type === 'fieldset'){
          definition.children.forEach((item, child) => {
            if(item.selectFunction) {
              let selectFunction = item.selectFunction;
              this.set(`MagicCrud.form.${key}.children.${child}.selectContent`, selectFunction(this));
            }
          });
        }

      });
      this.set('validations', validations);
    }
  },

  filterByAtivoOrCurrent(row, related, kind) {
    if(kind === 'belongsTo') {
      if(related) {
        return row.get('id') === related.get('id') || row.get('ativo');
      }

      return row.get('ativo');
    } else if(kind === 'hasMany') {
      if(related) {
        return related.isAny('id', row.get('id')) || row.get('ativo');
      }

      return row.get('ativo');
    }

    return true;
  },

  ativoCurrent(attribute, callback) {
    let model = this.get('model');
    let ativosCurrent;
    let self = this;
    model.eachRelationship((name, meta) => {
      if(name === attribute){
        ativosCurrent = Ember.computed('model.id', function() {
          return Promise.all([self.store.findAll(meta.type), model.get(attribute)]).then((values) => {
            let [all, related] = values;
            return all.filter(row => self.filterByAtivoOrCurrent(row, related, meta.kind));
          });
        });
      }
    });
    if(callback) {
      return callback(ativosCurrent);
    }
    return ativosCurrent;
  },

  // Rerun setDefinitionsMC on model change, this is for reloading fetched parameters of forms e.g: select input
  didModelChangeMC: Ember.observer('model', function() {
    this.setDefinitionsMC();
  }),
});
