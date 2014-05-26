export default Ember.ArrayController.extend({
  itemController: 'task',
  sortProperties: ['position'],
  sortAscending: true,
  content: Ember.computed.filterBy('tasks', 'isNew', false),
  remainingTasks: Ember.computed.filterBy('content', 'isCompleted', false),
  remainingCount: Ember.computed.alias('remainingTasks.length')
});
