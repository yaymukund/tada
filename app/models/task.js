var attr = DS.attr;

export default DS.Model.extend({
  description: attr('string'),
  completedAt: attr('date'),
  position: attr('number'),
  isCompleted: Ember.computed.notEmpty('completedAt')
});
