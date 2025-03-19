const styles = /*html*/`
    <style>
    button[is="todo-button"] { 
        all: unset;
        cursor: pointer;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        background-color: royalblue;
        color: white;
        margin: 0.5rem;
    }
    </style>
`;

export default class Button extends HTMLButtonElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            ${styles}
            ${this.getAttribute('text') || 'Click'}
        `;
    }
}

customElements.define('todo-button', Button, { extends: 'button' });