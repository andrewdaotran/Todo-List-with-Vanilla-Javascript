// DOM SELECTORS *********************************
const inputField = document.querySelector('.input-field');
const inputButton = document.querySelector('.input-button');
const todoList = document.querySelector('.todo-list');
const selectField = document.querySelector('select');




// EVENT LISTENERS *********************************
inputButton.addEventListener('click', addTodo);
selectField.addEventListener('change', filterTodos)



// FUNCTIONS *********************************
function addTodo(event) {
  event.preventDefault();

  // ADD TODO DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-div');

  // ADD TODO LI 
  const todoLi = document.createElement('li');
  todoLi.classList.add('todo-li');
  todoLi.innerText = inputField.value;
  
  // ADD TODO COMPLETE BUTTON
  const todoCompleteButton = document.createElement('button');
  todoCompleteButton.classList.add('complete-btn');
  todoCompleteButton.innerHTML = '<i class="fas fa-check-square"></i>'

  // ADD TODO DELETE BUTTON
  const todoDeleteButton = document.createElement('button');
  todoDeleteButton.classList.add('delete-btn');
  todoDeleteButton.innerHTML = '<i class="fas fa-window-close"></i>';

  //APPEND EVERYTHING TO DOM
  todoDiv.append(todoLi, todoCompleteButton, todoDeleteButton);
  todoList.append(todoDiv);

  // CLEAR INPUT FIELD AFTER APPEND
  inputField.value = ''

  // DELETE AND COMPLETE BUTTON FUNCTIONALITY
  todoDiv.addEventListener('click', deleteCompleteTodo)
}

function deleteCompleteTodo (event) {
  let item = event.target
  if (item.classList.contains('delete-btn')) {
    // delete div
    item.parentElement.remove();
  } else if (item.classList.contains('complete-btn')) {
    // strikethrough and lower opacity of div
    item.parentElement.classList.toggle('completed')
  }
}

function filterTodos (event) {
  const todos = todoList.children;
  for(let todo of todos) {
    switch (event.target.value) {
      case "all" :
        todo.style.display = "block"
        break;
      case "uncompleted" :
        if (!todo.classList.contains('completed')) {
          todo.style.display = "block"
        } else {
          todo.style.display = 'none';
        }
        break;
        
      case 'completed' :
        if (todo.classList.contains('completed')) {
          todo.style.display = "block"
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  }
}