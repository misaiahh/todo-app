export default class SearchBar extends HTMLInputElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.type = 'text';
        this.placeholder = 'Search...';

        this.addEventListener('input', (event: Event) => {
            if ((event.target as HTMLInputElement).value.length) {
                this.dispatchEvent(new CustomEvent('search', { detail: { text: this.value } }));
            }
        });
    }
}

customElements.define('search-bar', SearchBar, { extends: 'input' });