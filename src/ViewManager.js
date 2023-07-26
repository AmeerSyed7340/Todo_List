export class ViewManager {
    constructor(deleteHandler) {
        this.todoListElement = document.getElementById('todo-list');
        this.deleteHandler = deleteHandler;
    }

    renderTodos(todos) {
        this.todoListElement.innerHTML = '';
        todos.forEach((todo, index) => {
            const todoElement = document.createElement('div');
            const titleElement = document.createElement('h2');
            titleElement.textContent = todo.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = todo.description;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.setAttribute('data-index', index);
            deleteButton.addEventListener('click', () =>{
                this.deleteHandler(parseInt(deleteButton.getAttribute('data-index')));
            });

            todoElement.appendChild(titleElement);
            todoElement.appendChild(descriptionElement);
            todoElement.appendChild(deleteButton);

            this.todoListElement.appendChild(todoElement);
        });        
    }
}

