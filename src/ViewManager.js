export class ViewManager {
    constructor() {
        this.todoListElement = document.getElementById('todo-list');
    }

    renderTodos(todos) {
        this.todoListElement.innerHTML = '';
        todos.foreach((todo, index) => {
            const todoElement = document.createElement('div');
            const titleElement = document.createElement('h2');
            titleElement.textContent = todo.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = todo.description;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener('click', () =>{
                this.deleteHandler(index);
            });

            todoElement.appendChild(titleElement);
            todoElement.appendChild(descriptionElement);
            todoElement.appendChild(deleteButton);

            this.todoListElement.appendChild(todoElement);
        });        
    }
}

