var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('tasks', { path: '/' });
});

export default Router;
