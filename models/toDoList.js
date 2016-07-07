var ToDoItem = require("../models/toDoItem");

function ToDoList() {
  this.tasks = [];
}

ToDoList.prototype.addTask = function(taskString) {
  this.tasks.push(new ToDoItem(taskString));
};

ToDoList.prototype.display = function() {
  var returnString = "<ul>";
  this.tasks.forEach(function(task) {
    returnString += ("<li><div>"+task.task+"</div></li>");
  });
  return returnString += "</ul>";
};

module.exports = ToDoList
