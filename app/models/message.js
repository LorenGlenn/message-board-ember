import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  comment: DS.attr(),
  notes: DS.attr(),
  replies: DS.hasMany('reply', { async: true })
});
