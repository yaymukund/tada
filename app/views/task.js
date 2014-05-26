export default Ember.View.extend({
  templateName: 'task',
  tagName: 'div',
  classNames: ['task'],
  classNameBindings: ['controller.isCompleted'],
  attributeBindings: ['isDraggable:draggable'],
  isDraggable: 'true',

  startDragging: function(e) {
    this.$().addClass('dragging');

    var id = this.get('controller.id');
    e.dataTransfer.setData('text/plain', id);
  }.on('dragStart'),

  removeDraggingStyle: function() {
    this.$().removeClass('dragging');
  }.on('dragEnd'),

  dropTask: function(e) {
    var from = e.dataTransfer.getData('text/plain'),
        to = this.get('controller.id');
    this.get('controller').send('moveTask', from, to);

    this.$().removeClass('over');
  }.on('drop'),

  addOverClass: function() {
    this.$().addClass('over');
  }.on('dragEnter'),

  removeOverClass: function() {
    this.$().removeClass('over');
  }.on('dragLeave'),

  sendToggleEvent: function() {
    var task = this.get('controller.model');
    this.get('controller').send('toggleCompletedTask', task);
  }.on('click')
});
