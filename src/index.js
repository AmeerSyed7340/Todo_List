import './style.css';
import { TodoManager } from './TodoManager';
import { ViewManager } from './ViewManager';
import { StorageManager } from './StorageManager';

const todoManager = new TodoManager();
const viewManager = new ViewManager(deleteHandler);
const storageManager = new StorageManager();

function deleteHandler(index){
    //delete the todo at index, and then re-render the todos
    todoManager.deleteTodo(index);
    viewManager.renderTodos(todoManager.todos);
}

const newTodoForm = document.getElementById('new-todo-form');
newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTodoTitle = document.getElementById('new-todo-title');
    const newTodoDescription = document.getElementById('new-todo-description');

    console.log(`${newTodoTitle.value}, ${newTodoDescription.value} `);
    todoManager.addTodo(newTodoTitle.value, newTodoDescription.value, 1, 'yes');
    viewManager.renderTodos(todoManager.todos);

    newTodoForm.reset();
})