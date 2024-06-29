import { getElementAttributes } from "../lib";

class TodoItem extends HTMLParagraphElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.info(getElementAttributes(this));
        this.textContent = getElementAttributes(this)["text-content"];
    }
}

customElements.define('todo-item', TodoItem, {
    extends: 'p'
});
