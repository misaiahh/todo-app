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
                `<div class="todo-list">
                    ${this.state
                    .map((todo, index) => `<p is="todo-item" data-index="${index}" text-content="${todo}"></p>`)
                    .join('')}
                </div>`
                :
                '<p>There are no todos</p>'}
            <button class="add-todo" is="todo-button">Add Todo</button>
        `;
        this.shadowRoot!.querySelector('.add-todo')!.addEventListener('click', () => this.addTodo());
    }
}

customElements.define('todo-list', TodoList);
