(function (exports) {
  var idCounter = 0
function ToDoItem(task, isComplete) {
  this.task = typeof task === 'undefined' ? "" : task;
  this.isComplete = typeof isComplete === 'undefined' ? false : isComplete;
  this.id = idCounter++;
};

ToDoItem.prototype.setTask = function(task) {
  this.task = task;
};

ToDoItem.prototype.getTask = function() {
  return this.task;
};

ToDoItem.prototype.complete = function() {
  this.isComplete = true;
};

ToDoItem.prototype.reverseStatus = function() {
  return this.isComplete = !this.isComplete;
};

ToDoItem.prototype.checkComplete = function() {
  return this.isComplete;
};

exports.ToDoItem = ToDoItem;

})(this);
