import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm: false,
  actions: {
    updateMessageForm() {
      this.set('updateMessageForm', true);
    },
    update(message) {
      var params = {
        author: this.get('author'),
        comment: this.get('comment'),
      };
      this.set('updateMessageForm', false);
      this.sendAction('update', message, params);
    }
  }
});
