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
    console.log('initialize');
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

      });
      this.set('validations', validations);
    }
  },

  // Rerun setDefinitionsMC on model change, this is for reloading fetched parameters of forms e.g: select input
  didModelChangeMC: Ember.observer('model', function() {
    this.setDefinitionsMC();
  }),
});
