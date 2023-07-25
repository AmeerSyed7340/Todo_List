export class StorageManager {
    save(todos){
        //the localstorage is a web storage api that comes with the browser
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    load() {
        const todos = localStorage.getItem('todos');
        return todos ? JSON.parse(todos) : [];
    }
}