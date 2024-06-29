class TodoList extends HTMLElement {
    todos: string[];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.todos = [];
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
        this.shadowRoot!.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                }
            </style>
            
            ${this.todos.length ?
                `<div>
                    ${this.todos
                    .map((todo) => `<p is="todo-item" text-content="${todo}"></p>`)
                    .join('')}
                </div>`
                :
                '<p>There are no todos</p>'}
            <button class="add-todo" is="todo-button">Add Todo</button>
        `;

        this.shadowRoot?.querySelector('.add-todo')?.addEventListener('click', () => this.addTodo());
    }
}

customElements.define('todo-list', TodoList);
