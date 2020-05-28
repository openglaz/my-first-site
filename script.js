//! Делал сам
// let mainInput = document.querySelector('.mainInput');
// let containerTask = document.querySelector('.conteinerTask');
// console.log(containerTask);

// function addTask() {
//   let newCheckbox = document.createElement('div')



//   newCheckbox.innerHTML += `<input type="checkbox" name="" id="">${mainInput.value} <button class="btnDelete">	&#10008</button> <br>`
//   mainInput.value = '';
//   let oneTask = document.querySelector('.task')
//   containerTask.insertBefore(newCheckbox, oneTask)
// }

// let btnDeleteTask = document.querySelectorAll('.btnDelete');

// btnDeleteTask.onclick = () => {
//   document.querySelector('.task').remove()
// }

// function deleteTask() {
//   btnDeleteTask;

// }



// document.querySelector('.btnAddTask').onclick = addTask;

/////////////////////////
//! Решение от Александра Лущенко
// let arrTask = [];

// document.getElementById('add').onclick = () => {

//   let valInput = document.getElementById('in').value;
//   let temp = {};

//   temp.todo = valInput;
//   temp.cheked = false;
//   let i = arrTask.length;
//   arrTask[i] = temp;
//   addTask()
//   document.getElementById('in').value = ''
// }

// function addTask() {

//   let tempOut = '';
//   for (let key in arrTask) {
//     if (arrTask[key].cheked == true) {
//       tempOut += '<input type="checkbox" cheked>'
//     } else {
//       tempOut += '<input type="checkbox">'
//     }
//     tempOut += `<div>${arrTask[key].todo}</div><br>`
//   }
//   document.getElementById('out').innerHTML = tempOut;
// }