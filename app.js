function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    
    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        // get the text
    let title = newToDoText.value;
       // create a new li
       let newLi = document.createElement('li');

       // create a new input
       let checkbox = document.createElement('input');
   
       // set the input's type to checkbox
       checkbox.type = "checkbox";

         // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';



     // add delete button
     let deletebtn = document.createElement('button');

     // create a text node
     let deleteinput = document.createTextNode('Delete');

     // append the text to <button>
     deletebtn.appendChild(deleteinput);

     // append <button> to <form>
     newLi.appendChild(deletebtn);

      deletebnt.addEventListener('click', function (){
         let deleteLi = newToDoText.value;
         toDoList.removeChild(deleteLi);
     });
    
       
});
}
window.onload = function() {
    onReady();
  };