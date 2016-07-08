(function (exports) {
  var idCounter = 0
function ToDoItem(task) {
  this.task = typeof task === 'undefined' ? "" : task;
  this.isComplete = false;
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
