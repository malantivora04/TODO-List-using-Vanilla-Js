const inputTask = document.querySelector('.task-input');
const addButton = document.querySelector('.add-button');
const toDoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter');
const num = document.querySelector('h3');

var tas = 0;
var arr = [false];
var tCount = 1;

addButton.addEventListener('click', addTodo);
toDoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

function deleteCheck(e){
    const item = e.target;
}

if(item.classList[1]==="fa-trash"){
    const parent = item.parentElement.parentElement;
    parent.remove();

    let idName = parent.id;

    if(arr[idName]){
        tas--;
        arr[idName]=false;
        taskUpdate();
    }
}


if(item.classList[1]==="fa-check"){
    const parent = item.parentElement.parentElement;

    if(parent.classList[1] !== "completed"){
        parent.classList.toggle("completed");
        tas--;

        let idName = parent.id;
        arr[idName] = false;
        taskUpdate();
    }
}

function taskUpdate(){
    num.innerHTML = "Number of Task : " + tas;
}

function addTodo(e){
    e.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    todoDiv.setAttribute('id', tCount);

    tCount++;

    const newTodo = document.createElement("li");
    newTodo.innerHTML = inputTask.value;

    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);
    inputTask.value= "";

    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    toDoList.appendChild(todoDiv);
    tas++;
    arr.push(true);
    taskUpdate();
}

function filterTodo(e) {
    const todos = toDoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                     todo.style.display = "none";
                }
                break;
            case "incomplete":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";

                }
        }
    });
}