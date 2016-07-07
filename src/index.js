var list = new List();

	var updateList = function(){
		document.getElementById('list-printed').innerHTML = printItems(list.list);
	};

	document.getElementById('submit').addEventListener('click', addTask, false);

	function addTask(evt){
		evt.preventDefault();
		list.addItem(document.getElementById('task-input').value, Item);
		updateList();
		document.getElementById('form').reset();
	}

function changeStatus(itemId){
  console.log(itemId);
  list.getItemById(itemId);
}