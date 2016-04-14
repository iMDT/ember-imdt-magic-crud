import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    cancelAction(){
      this.sendAction('cancelAction', ...arguments);
    },

    saveRecord(){
      this.sendAction('saveRecord', ...arguments);
    }
  }
});
