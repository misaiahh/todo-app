export default class TodoList extends HTMLElement {
    root: ShadowRoot;
    todos: string[];
    addButton: HTMLButtonElement | null;

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.todos = [];
        this.addButton = null;
    }

    connectedCallback() {
        this.fetchTodos();
        this.render();
    }

    fetchTodos() {
        setTimeout(() => {
            this.todos = ['todo 1', 'todo 2', 'todo 3'];
            this.render();
        }, 500);
    }

    addTodo() {
        this.todos = [...this.todos, `todo ${this.todos.length + 1}`];
        this.render();
    }

    render() {
        this.root.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                }
            </style>
            
            ${this.todos.length ?
                `<div class="todo-list">
                    ${this.todos
                    .map((todo) => `<p is="todo-item" text-content="${todo}"></p>`)
                    .join('')}
                </div>`
                :
                '<p>There are no todos</p>'}
            <button class="add-todo" is="todo-button">Add Todo</button>
        `;
        this.addButton = this.root.querySelector('.add-todo');
        this.addButton!.addEventListener('click', () => this.addTodo());
    }
}

customElements.define('todo-list', TodoList);
