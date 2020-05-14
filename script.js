let mainInput = document.querySelector('.mainInput');
let containerTask = document.querySelector('.conteinerTask');
console.log(containerTask);

function addTask() {
  console.log(mainInput.value);
  containerTask.innerHTML += mainInput.value
  // containerTask.innerHTML = mainInput.value
}

document.querySelector('.btnAddTask').onclick = addTask;

