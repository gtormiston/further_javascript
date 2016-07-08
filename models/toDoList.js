
(function (exports) {

function ToDoList(ToDoItem) {
  this.tasks = [];
  this.ToDoItem = ToDoItem;
}

ToDoList.prototype.addTask = function(taskString) {
  this.tasks.push(new this.ToDoItem(taskString));
};

ToDoList.prototype.display = function() {
  var returnString = "<ul>";
  this.tasks.forEach(function(task) {
    returnString += ("<li>"+task.task+"<button id='complete'>completed?</button></li>");
  });
  return returnString += "</ul>";
};

exports.ToDoList = ToDoList;

})(this);
