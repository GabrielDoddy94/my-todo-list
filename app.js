const form = document.querySelector('.form');
const formBtn = document.querySelector('.input_btn');
const todoListContainer = document.querySelector('.todo-list_container');

formBtn.addEventListener('click', e => {
  e.preventDefault();
  const inputTodo = form.elements.addtodo;

  if (!inputTodo.value) {
    null;
  } else {
    addTodo(inputTodo);
    inputTodo.value = '';
  }
});

const addTodo = todo => {
  const newList = document.createElement('li');
  const newSpan = document.createElement('span');
  const newDiv = document.createElement('div');
  const newBtnComplete = document.createElement('button');
  const newIconComplete = document.createElement('i');
  const newBtnDelete = document.createElement('button');
  const newIconDelete = document.createElement('i');

  newList.classList.add('todo-list');
  newSpan.classList.add('todo-list_item');
  newDiv.classList.add('todo-list-btns-box');
  newBtnComplete.classList.add('btn', 'btn-complete');
  newBtnDelete.classList.add('btn', 'btn-delete');
  newIconComplete.classList.add('fas', 'fa-check');
  newIconDelete.classList.add('fas', 'fa-times');

  newSpan.innerText = todo.value;

  newBtnDelete.append(newIconDelete);
  newBtnComplete.append(newIconComplete);
  newDiv.append(newBtnComplete, newBtnDelete);
  newList.append(newSpan, newDiv);

  todoListContainer.appendChild(newList);

  btnComplete(newBtnComplete, newSpan);
  btnDelete(newBtnDelete, newList);
};

const btnComplete = (btnComplete, todo) => {
  btnComplete.addEventListener('click', () => {
    todo.classList.toggle('done');
  });
};

const btnDelete = (btnDelete, todo) => {
  btnDelete.addEventListener('click', () => {
    todo.remove();
  });
};
