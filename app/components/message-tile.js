import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm: false,
  actions: {
    update(message, params) {
      this.sendAction('update', message, params);
    }
  }
});
