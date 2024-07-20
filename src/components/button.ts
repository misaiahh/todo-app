export default class Button extends HTMLButtonElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `${this.getAttribute('text') || 'Click'}`;
    }
}

customElements.define('todo-button', Button, {
    extends: 'button'
});