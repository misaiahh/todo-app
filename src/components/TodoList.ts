class TodoList extends HTMLDivElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        console.log("TodoList added to page.");
        

        const style = document.createElement("style");
        style.textContent = `
            :host {
                display: flex;
                flex-direction: column;
            }
        `;
        this.shadowRoot?.appendChild(style);

        const listOfTodos = ['Todo 1', 'Todo 2', 'Todo 3'];
        listOfTodos.map((todo) => {
            const todoItem = document.createElement('todo-item');
            todoItem.textContent = todo;
            this.shadowRoot?.appendChild(todoItem);
        });
    }

    disconnectedCallback() {
        console.log("TodoList removed from page.");
    }

    adoptedCallback() {
        console.log("TodoList moved to new page.");
    }

    attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
        console.log(`Attribute ${name} has changed from ${_oldValue} to ${_newValue}.`);
    }
}

customElements.define('todo-list', TodoList, {
    extends: 'div'
});

export default TodoList;