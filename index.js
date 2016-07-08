var list = new ToDoList(ToDoItem);

document.querySelector(".list").innerHTML = list.display();

document.querySelector("#task_form").addEventListener("submit", function (event, data) {
  event.preventDefault();
  list.addTask(document.querySelector("#task_description").value);
  document.querySelector(".list").innerHTML = list.display();
  styleList();
  document.querySelector("#task_form").reset();

});

function changeStatus(task) {
  var currentItem = list.findItemById(task);
  currentItem.reverseStatus();
  console.log(currentItem);
  if (currentItem.isComplete) {
    document.querySelector(".list").innerHTML = list.display();
    styleList();
    // document.getElementById(currentItem.id).style.textDecoration = 'line-through';
  } else {
    document.querySelector(".list").innerHTML = list.display();
    styleList();
    // document.getElementById(currentItem.id).style.textDecoration = 'none';
  }
}



var xhr = new XMLHttpRequest();
xhr.open("GET", "http://quiet-beach-24792.herokuapp.com/todos.json", false);
xhr.send();
// console.log(xhr.status);
// console.log(xhr.response);

var response = xhr.response;
var json = JSON.parse(response);

// console.log(json);
// console.log(json[0].id);
// console.log(json.length);

for (var i = 0; i < json.length; i++) {
  list.addTask(json[i].text, json[i].completed);
}




document.querySelector(".list").innerHTML = list.display();
styleList();

function lineThrough(){
  var trues = document.getElementsByClassName("true");
  for (var i = 0; i < trues.length; i++) {
    trues[i].style.textDecoration = 'line-through';
  }
}
function noLineThrough(){
  var falses = document.getElementsByClassName("false");
  for (var i = 0; i < falses.length; i++) {
    falses[i].style.textDecoration = 'none';
  }
}


function styleList(){
  lineThrough();
  noLineThrough();
}
