import { DeleteTodoEvent } from './Todo.types';

export default class TodoList extends HTMLElement {
    state: string[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const todos = ['todo 1', 'todo 2', 'todo 3'];
        this.setState({ state: todos });
    }

    disconnectedCallback() {
        this.shadowRoot!.querySelectorAll('todo-item').forEach((todo) => todo.removeEventListener('delete-todo', this.removeTodo));
    }

    /**
     * Updates the state of the component and triggers a re-render.
     *
     * @param {Record<string, unknown>} newState - The new state to be set.
     */
    setState(newState: Record<string, unknown>) {
        Object.assign(this, newState);
        this.render();
    }

    /**
     * Adds a new todo item to the list.
     *
     * This function creates a new todo item by appending a new string to the existing state array.
     * The new todo item is created by concatenating the string "todo" with the current length of the state array plus one.
     * The new state array is then set using the `setState` method, triggering a re-render of the component.
     *
     * @return {void} This function does not return anything.
     */
    addTodo(): void {
        const todos = [...this.state, `todo ${this.state.length + 1}`];
        this.setState({ state: todos });
    }

    /**
     * Removes a todo item from the list based on the index provided in the event.
     *
     * @param {Event} event - The event object containing the index of the todo item to be removed.
     * @return {void} This function does not return anything.
     */
    removeTodo(event: Event): void {
        const todos = [...this.state];
        todos.splice((event as DeleteTodoEvent).detail.index, 1);
        this.setState({ state: todos });
    }


    /**
     * Renders the component's HTML content and sets up event listeners.
     *
     * This function sets the innerHTML of the component's shadowRoot to the HTML template.
     * If the state array has elements, it renders a list of todo items using the map function.
     * Each todo item is rendered as a <p> element with the "todo-item" custom element,
     * and the index and todo text as data attributes.
     * If the state array is empty, it renders a message indicating that there are no todos.
     * Additionally, it adds a click event listener to the "add-todo" button, which calls the addTodo function when clicked.
     *
     * @return {void} This function does not return anything.
     */
    render(): void {
        this.shadowRoot!.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                }
            </style>
            
            ${this.state.length ?
                `<div>
                    ${this.state
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
