import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    cancelAction(){
      this.sendAction('cancelAction');
    },

    saveRecord(){
      this.sendAction('saveRecord');
    }
  }
});
