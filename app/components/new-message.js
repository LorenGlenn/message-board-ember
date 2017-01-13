import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage: false,
  actions: {
    messageFormShow() {
      this.set('addNewMessage', true);
    },

    saveMessage() {
      var params = {
        author: this.get('author'),
        comment: this.get('comment'),
        notes: this.get('notes'),
      };
      this.set('addNewMessage', false);
      this.sendAction('saveMessage', params);
    }
  }
});
