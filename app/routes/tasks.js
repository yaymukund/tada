export default Ember.Route.extend({
  model: function() {
    return this.store.find('task');
  },

  setupController: function(controller, model) {
    var draft = this.store.createRecord('task');
    controller.set('draft', draft);
    controller.set('tasks', model);
  },

  actions: {
    moveTask: function(fromId, toId) {
      if (fromId === toId) {
        return;
      }

      var task = this.store.getById('task', fromId),
          newPosition = this.store.getById('task', toId).get('position');

      task.set('position', newPosition);
      task.save();
    },

    completeAllTasks: function() {
      var tasks = this.get('controller.remainingTasks').toArray();
      tasks.setEach('isCompleted', true);
      tasks.invoke('save');
    },

    toggleCompletedTask: function(task) {
      task.toggleProperty('isCompleted');
      task.save();
    },

    saveDraft: function() {
      var self = this;
      self.get('controller.draft').save().then(function() {
        var draft = self.store.createRecord('task');
        self.get('controller').set('draft', draft);
      });
    }
  }
});
