const todolist =  [
    {  name : 'make dinner',
      dueDate : '2025-12-22'
    },
    {  name : 'wash dishes',
      dueDate : '2025-12-23'
    }
    ];
  rendertodoList();
function rendertodoList(){
        let todolistHTML = '';
todolist.forEach((todoObject,index) => {
//const todoObject = todolist[index];
        //const name = todoObject.name;
     // const dueDate = todoObject.dueDate;
      const { name , dueDate} = todoObject;
        const html = `
         <div> ${name}</div>
          <div> ${dueDate}</div>
         <button  class="Delete-todo js-delete-todo">Delete</button>
        `;
        todolistHTML += html;
});
                
        document. querySelector('.js-todo-list').innerHTML = todolistHTML;

    document.querySelectorAll('.js-delete-todo').forEach( (deleteButton, index) => {
deleteButton.addEventListener('click', () => {
         todolist.splice(index,1);
         rendertodoList();
         
});
    }) ;  
    
}

document.querySelector('.js-add-todo-button').addEventListener('click',() => {
  addtodo();
})

function addtodo(){
    // console.log(document.querySelector('.js-name-input'));
   // console.log(document.querySelector('.js-name-input').value)
 const inputElement = document.querySelector('.js-name-input');
 const dateInputElement = document.querySelector('.js-dueDate-input');

const name = inputElement.value;
const dueDate = dateInputElement.value;
// console.log(name);

 todolist.push({
    //name : name,
   // dueDate: dueDate
   name,
   dueDate
 }
   );
       inputElement.value = '';
        rendertodoList();
}
