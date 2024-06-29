class TodoItem extends HTMLParagraphElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.textContent = this.getAttribute("text-content");
    }
}

customElements.define('todo-item', TodoItem, {
    extends: 'p'
});
