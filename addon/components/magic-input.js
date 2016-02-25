import Ember from 'ember';

const {
  getProperties
} = Ember;

export default Ember.Component.extend({
  //Flag for disabling errors on first iteration
  firstIteration: true,

  // Starts the input value and type
  didInsertElement() {
    this.set('value', this.get(this.get('attribute')));

    switch (this.get('type')) {
      case 'text':
        this.set('text', true);
        break;
      case 'password':
        this.set('password', true);
        break;
      case 'checkbox':
        this.set('checkbox', true);
        break;
      case 'switch':
        this.set('switch', true);
        break;
      case 'select':
        this.set('select', true);
        break;
      case 'multiselect':
        this.set('multiSelect', true);
        break;
      case 'textarea':
        this.set('textarea', true);
        break;
      default:
        break;
    }
  },

  // Select processed content
  processedContent: Ember.computed('selectContent', function() {
    const {
      optionValuePath,
      optionLabelPath
    } = getProperties(this, 'optionValuePath', 'optionLabelPath');

    if (this.get('type') === 'select' || this.get('type') === 'multiselect') {
      this.set('processedPath', optionValuePath);
      this.set('processedLabel', optionLabelPath);

      let processedContent = this.get('selectContent');

      return processedContent;
    }
    return null;
  }),

  // Active input errors
  activeErrors: Ember.computed('value', 'model', 'errors', 'submitted', function() {
    if (this.get('firstIteration') !== true) {
      return this.get('errors.' + this.get('attribute'));
    }
    this.set('firstIteration', false);
    return null;
  }),

  // Input value
  value: Ember.computed('attribute', 'model', {
    set(key, value) {
        // console.log(key);
        // console.log(value);
        // console.log(this.get('attribute'));
        if (this.get('type') !== 'multiselect') {
          this.set(this.get('attribute'), value);
        }
        return value;
      },
      get: function() {
        return this.get(this.get('attribute'));
      }
  }),

  // actions:{
  //   multipleSelectChange(array, a){
  //     console.log(array.toString());
  //     console.log(array);
  //     console.log(this.get(this.get('attribute')).toString());
  //     console.log(this.get(this.get('attribute')));
  //     console.log(a);
  //   }
  // }
});
