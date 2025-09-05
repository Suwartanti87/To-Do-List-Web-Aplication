let todoList = [];

// Validasi Input
function validateInput(){
    const todoInput = document.getElementById('todo-input').value;
    const todoDateInput = document.getElementById('todo-date-input').value;

    if (todoInput ===''|| todoDateInput ===''){
        alert('Tolong pastikan kamu isi semua task dan tanggalnya yaa!');   
    } else {
     addTodo(todoInput, todoDateInput);
        document.getElementById('todo-input').value = '';
        document.getElementById('todo-date-input').value = '';
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

    //simpan ke lokal strirage
    saveData();

//  render todo list
renderTodoList();
}




// filter



function renderTodoList(filterStatus =''){
    // code to render the todo lis on web
    const todoListContainer = document.getElementById('todo-list');
    todoListContainer.innerHTML = ''; 
    // clear exiting list

    let filteredTodos = todoList;

    //filter status(optional)
    if(filterStatus === 'pending'){
        filteredTodos = todoList.filter(item => !item.completed);
    }
    if(filteredTodos.length === 0 ){
        todoListContainer.innerHTML = `
        <tr><td coolspan="4" class="empty">No Task Found</td></tr>`;
        return;
    }

    filteredTodos.forEach((item, index) =>{
        todoListContainer.innerHTML +=`<tr><td>${item.task}</td>
        <td>${item.dueDate}</td>
        <td class="${item.completed? 'status-done' : 'status-pending' }">${item.completed ? 'Done' : 'Pending' }</td>
        <td><button onclick = "toggleStatus(${index})">✔</button>
        <button onclick = "deleteTodo(${index})">✖</button>
        </td>
        </tr>
        `;
    });
}

//Toogle Status
function toggleStatus(index){
    todoList[index].completed = !todoList[index].completed;
    saveData();
    renderTodoList();
}
 
// Delete todo
function deleteTodo(index){
    todoList.splice(index,1);
    saveData();
    renderTodoList();
}

// Hapus To do list all
function deleteAllTodo(){
    // hapus todo list array
    todoList = [];

    saveData();

    // re render to do list
    renderTodoList();
}

// save data ke lokal strorage
function saveData(){
    localStorage.setItem('todoList', JSON.stringify('todoList'));
}

//load data dari lokal strorage
function loadData(){
    const save = localStorage.getItem('todoList');
    if(save){
        todoList = JSON.parse(save);
    } renderTodoList();
}
//filter by status
function filterTodo(){
    const filterInput = document.getElementById('filter').value;
    renderTodoList(filterInput);
}


    // loop throught the todolist array and create html elemen for each item
//     todoList.forEach((item)=>{
//         todoListContainer.innerHTML+=`<p> ${item.task} - Due: ${item.dueDate}</p>`;

//     });

// }