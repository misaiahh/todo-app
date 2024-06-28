class TodoList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log("TodoList added to page.");
        const shadow = this.attachShadow({ mode: "open" });
        
        const div = document.createElement("div");
        div.setAttribute("class", "todo-list");
        
        const todos = [];

        const todoItem = document.createElement('todo-item');
        
        todos.push(todoItem);

        todos.map((todo) => {
            div.appendChild(todo);
        });
        
        shadow.appendChild(div);
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

customElements.define('todo-list', TodoList);

export default TodoList;