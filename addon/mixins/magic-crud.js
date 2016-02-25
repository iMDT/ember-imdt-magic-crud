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
    let definitionObject = this.get('definitionObject');
    let definitions = this.get(definitionObject);
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
          this.set(definitionObject + '.' + [key] + '.selectContent', selectFunction(this));
        }

      });

      if (!Object.keys(this.get('validations')).length) {
        this.set('validations', validations);
      }
    }
  },

  // Rerun setDefinitionsMC on model change, this is for reloading fetched parameters of forms e.g: select input
  didModelChangeMC: Ember.observer('model', function() {
    this.setDefinitionsMC();
  }),
});
