import { TodoItem } from "./TodoItem";

export class TodoManager{
    constructor(){
        this.todos = []; //array to hold the list of todos
    }

    addTodo(title, description, dueDate, priority){
        const todo = new TodoItem(title, description, dueDate, priority);
        this.todos.push(todo);
    }

    //delete the to do element from the list
    deleteTodo(index){
        this.todos.splice(index, 1);
    }

    // ... add other methods later to sort, filter etc
}