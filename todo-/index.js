//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Function
function addTodo(event) {
  event.preventDefault();

  //Todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //todo li
  const todoLi = document.createElement('li');
  todoLi.classList.add('todo-item');
  todoLi.innerText = todoInput.value;
  todoDiv.appendChild(todoLi);

  //checkmark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></li>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  //remove button
  const removeButton = document.createElement('button');
  removeButton.innerHTML = '<i class="fas fa-trash"></li>';
  removeButton.classList.add('remove-btn');
  todoDiv.appendChild(removeButton);

  //append to list parent
  todoList.appendChild(todoDiv);

  //clear input value
  todoInput.value = '';
}

function deleteCheck(event) {
  const item = event.target;
  const todo = item.parentElement;
  if (item.classList[0] === 'remove-btn') {
    todo.remove();
  }

  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}
