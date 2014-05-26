export default Ember.View.extend({
  templateName: 'task',
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
  }.on('drop')
});
