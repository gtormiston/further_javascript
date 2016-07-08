
(function (exports) {

function ToDoList(ToDoItem) {
  this.tasks = [];
  this.ToDoItem = ToDoItem;
}

ToDoList.prototype.addTask = function(taskString, taskCompletion) {
  this.tasks.push(new this.ToDoItem(taskString, taskCompletion));
};

ToDoList.prototype.display = function() {
  var returnString = "<ul>";
  this.tasks.forEach(function(task) {
    returnString += ("<li id='" + task.id + "'><a class='" + task.isComplete + "' onclick='changeStatus(" + task.id +  ")'>" + task.task + "</a></li>");
  });
  return returnString += "</ul>";
};

ToDoList.prototype.findItemById = function(taskId) {
  var filteredTasks = this.tasks.filter(function(task) {
    return task.id === taskId;
  });
  return filteredTasks[0];
};



exports.ToDoList = ToDoList;

})(this);
