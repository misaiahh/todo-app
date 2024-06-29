class TodoList extends HTMLElement {
    todos: string[];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.todos = [];
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['todos'];
    }

    render() {
        this.todos = ['todo 1', 'todo 2', 'todo 3'];
        this.shadowRoot!.innerHTML = `
            <style>
                :host {
                display: flex;
                flex-direction: column;
            }
            </style>
            <div>
                ${this.todos
                .map((todo) => `<p is="todo-item" text-content="${todo}"></p>`)
                .join("")}
            </div>
        `;
    }
}

customElements.define('todo-list', TodoList);
