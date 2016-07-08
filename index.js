var list = new ToDoList(ToDoItem);

document.querySelector(".list").innerHTML = list.display();

document.querySelector("#task_form").addEventListener("submit", function (event, data) {
  event.preventDefault();

  list.addTask(document.querySelector("#task_description").value);
  document.querySelector(".list").innerHTML = list.display();
  document.querySelector("#task_form").reset();

});

function changeStatus(task) {
  var currentItem = list.findItemById(task);
  currentItem.reverseStatus();
  console.log(currentItem);
}
