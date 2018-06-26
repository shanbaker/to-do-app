function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id,
    });
    newToDoText.value = '';

  }

  function deleteToDo(id) {
    return toDos.filter(toDo => toDo.id !== id);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function (toDo) {
      const newLi = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      let deleteBtn = document.createElement('button');

      let deleteText = document.createTextNode('Delete');

      newLi.innerHTML = toDo.title;

      toDoList.appendChild(newLi);
      deleteBtn.appendChild(deleteText);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);

      deleteBtn.addEventListener('click', function () {
        newLi.parentNode.removeChild(newLi);
        toDos = deleteToDo(toDo.id);
        renderTheUI();

      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    renderTheUI();
  });

  renderTheUI();
}

window.onload = function () {
  onReady();
};
