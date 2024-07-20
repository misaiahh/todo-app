import { DeleteTodoEvent } from './Todo.types';

export default class TodoList extends HTMLElement {
    todos: string[] = [];
    search: string = '';

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['search'];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === 'search' && oldValue !== newValue) {
            this.setSearch(newValue);
        }
    }

    connectedCallback() {
        // default list of todos
        this.setTodos({ todos: ['todo 1', 'todo 2', 'todo 3'] });
    }

    disconnectedCallback() {
        this.shadowRoot!.querySelectorAll('todo-item').forEach((todo) => todo.removeEventListener('delete-todo', this.removeTodo));
    }

    setTodos(newState: Record<string, unknown>): void {
        Object.assign(this, newState);
        this.render();
    }

    setSearch(search: string): void {
        this.search = search;
        this.render();
    }

    addTodo(): void {
        const todos = [...this.todos, `todo ${this.todos.length + 1}`];
        this.setTodos({ todos });
    }

    removeTodo(event: Event): void {
        const todos = [...this.todos];
        todos.splice((event as DeleteTodoEvent).detail.index, 1);
        this.setTodos({ todos });
    }

    render(): void {
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
                    .filter((todo) => todo.toLowerCase().includes(this.search.toLowerCase()))
                    .map((todo, index) => `<todo-item data-index="${index}" text-content="${todo}"></todo-item>`)
                    .join('')}
                </div>`
                :
                '<p>There are no todos</p>'}
            <button is="todo-button" text="Add Todo"></button>
        `;
        this.shadowRoot!.querySelector('button')!.addEventListener('click', () => this.addTodo());
        this.shadowRoot!.querySelectorAll('todo-item').forEach((todo) => todo.addEventListener('delete-todo', (event: Event) => this.removeTodo(event)));
    }
}

customElements.define('todo-list', TodoList);
