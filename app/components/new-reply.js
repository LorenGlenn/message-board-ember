import Ember from 'ember';

export default Ember.Component.extend({
  addNewReply: false,
  actions: {
    replyFormShow() {
      this.set('addNewReply', true);
    },
    saveReply() {
     var params = {
       author: this.get('author'),
       content: this.get('content'),
       message: this.get('message')
     };
     this.set('addNewReply', false);
     this.sendAction('saveReply', params);
   }
  }
});
