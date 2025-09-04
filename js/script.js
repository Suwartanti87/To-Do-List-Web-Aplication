let todoList = [];

// Validasi Input
function validateInput(){
    const todoInput = document.getElementById('todo-input').value;
    const todoDateInput = document.getElementById('todo-date-input').value;

    if (todoInput ===''|| todoDateInput ===''){
        alert('Please fill in both task and the due date');   
    } else {
     addTodo(todoInput, todoDateInput);
    }
}

// Add Input
function addTodo(todo, dueDate){
    // add a new todo item
    const todoItem = {
        task: todo,
        dueDate: dueDate,
        completed: false
    };



// Masukan Item odo list
    todoList.push(todoItem);

//  render todo list
renderTodoList();
}
// Hapus To do list
function deleteAllTodo(){
    // hapus todo list array
    todoList = [];

    // re render to do list
    renderTodoList();
}

// filter
function filerTodo(){

}

function renderTodoList(){
    // code to render the todo lis on web
    const todoListContainer = document.getElementById('todo-list');
    todoListContainer.innerHTML = ''; 
    // clear exiting list

    // loop throught the todolist array and create html elemen for each item
    todoList.forEach((item)=>{
        todoListContainer.innerHTML+=`<p> ${item.task} - Due:&{item.dueDate}</p>`;

    });

}