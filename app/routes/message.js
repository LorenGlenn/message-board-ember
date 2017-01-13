import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('message', params.message_id);
  },

  actions: {
    saveReply(params) {
      var newReply = this.store.createRecord('reply', params);
      var message = params.message;
      message.get('replies').addObject(newReply);
      newReply.save().then(function() {
        return message.save();
      });
      this.transitionTo('message', message);
    }
  }
});
