export default Ember.ArrayController.extend({
  itemController: 'task',
  sortProperties: ['position'],
  sortAscending: true
});
