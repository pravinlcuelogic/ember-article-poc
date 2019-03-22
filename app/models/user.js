import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  username: DS.attr('string'),
  bio: DS.attr('string'),
  numberOfQuotes: DS.attr('number'),
  numberOfFollowing: DS.attr('number'),
  numberOfFollowers: DS.attr('number'),
  articles: DS.hasMany('article', {async: true})
});