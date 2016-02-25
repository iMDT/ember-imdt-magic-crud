import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-power-select-text-item'],
  textValue: Ember.computed('optionLabelPath', 'item', function() {
    return this.get('item.' + this.get('processedLabel'));
  })
});
