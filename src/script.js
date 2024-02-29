const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const todoList = document.getElementById('todo-list');

addTaskButton.addEventListener('click', function () {
  const newTaskText = newTaskInput.value.trim();

  if (newTaskText) {
    const newTaskItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const closeButton = document.createElement('button');

    checkbox.type = 'checkbox';
    label.innerText = newTaskText;
    closeButton.innerText = 'X';
    closeButton.classList.add('close-btn');

    newTaskItem.appendChild(checkbox);
    newTaskItem.appendChild(label);
    newTaskItem.appendChild(closeButton);

    todoList.appendChild(newTaskItem);

    newTaskInput.value = ''; // Clear input field

    closeButton.addEventListener('click', function () {
      todoList.removeChild(newTaskItem);
    });
  }
});
