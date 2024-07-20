export default class TodoItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot!.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: row;
                }
            </style>
            <p>${this.getAttribute('text-content')}</p>
            <button is="todo-button" text="Delete"></button>
        `;
        this.shadowRoot!.querySelector('button')?.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('delete-todo', { detail: { index: this.getAttribute('data-index') } }));
        });
    }
}

customElements.define('todo-item', TodoItem);
