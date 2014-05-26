export default Ember.Handlebars.makeBoundHelper(function(word, count) {
  if (count === 1) {
    return '1 %@'.fmt(word);
  } else {
    return '%@ %@'.fmt(count, word.pluralize());
  }
});
