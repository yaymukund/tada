export default Ember.Route.extend({
  model: function() {
    return this.store.find('task');
  },

  actions: {
    moveTask: function(fromId, toId) {
      var task = this.store.getById('task', fromId),
          newPosition = this.store.getById('task', toId).get('position');

      task.set('position', newPosition);
      task.save();
    }
  }
});
