var attr = DS.attr;

export default DS.Model.extend({
  description: attr('string'),
  completedAt: attr('date'),
  position: attr('number'),
  isCompleted: function(key, value) {
    // setter
    if (arguments.length > 1) {
      if (value) {
        this.set('completedAt', new Date());
        return true;
      } else {
        this.set('completedAt', null);
        return false;
      }
    }

    // getter
    var completedAt = this.get('completedAt');
    return !Ember.isBlank(completedAt);
  }.property('completedAt')
});
