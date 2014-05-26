export default Ember.View.extend({
  enableDropping: function(e) {
    // If we don't prevent the browser's default behavior, it will consume
    // the "drop" event so our JS can't catch it:
    //
    // http://www.html5rocks.com/en/tutorials/dnd/basics/#toc-dragover-dragleave
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }.on('dragOver')
});
