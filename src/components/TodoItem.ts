class TodoItem extends HTMLParagraphElement {
    static observedAttributes = ['textContent'];

    constructor() {
        super();
    }

    connectedCallback() {
        console.log("TodoItem added to page.");
    }

    attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
        console.log(`Attribute ${name} has changed from ${_oldValue} to ${_newValue}.`);

        if (name === 'textContent') {
            this.querySelector('p')!.textContent = _newValue;
        }
    }
}

customElements.define('todo-item', TodoItem, {
    extends: 'p'
});

export default TodoItem;