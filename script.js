let mainInput = document.querySelector('.mainInput');
let containerTask = document.querySelector('.conteinerTask');
console.log(containerTask);

function addTask() {
  let newCheckbox = document.createElement('div')
  newCheckbox.innerHTML += `<input type="checkbox" name="" id="">${mainInput.value} <button class="btnDelete">Удалить</button> <br>`
  mainInput.value = '';
  let oneTask = document.querySelector('.task')
  containerTask.insertBefore(newCheckbox, oneTask)
}

let btnDeleteTask = document.querySelector('.btnDelete');

// btnDeleteTask.onclick = () => {
//   this.
// }

function deleteTask() {
  btnDeleteTask;

}



document.querySelector('.btnAddTask').onclick = addTask;

