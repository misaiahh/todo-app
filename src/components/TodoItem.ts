class TodoItem extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Todo added to page.");

        const p = document.createElement("p");
        p.textContent = "Todo";

        this.appendChild(p);
    }
}

customElements.define('todo-item', TodoItem);

export default TodoItem;