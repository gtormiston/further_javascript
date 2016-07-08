
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
    returnString += ("<li>"+task.task+"<button id='complete' onclick='changeStatus(" + task.id +  ")'>completed?</button></li>");
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
