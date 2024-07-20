class InfiniteScroll extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        window.addEventListener('scroll', () => this.isScrolledToBottom());
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.isScrolledToBottom);
    }

    private isScrolledToBottom(): void {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            this.fetchData();
        }
    }

    private fetchData(): void {
        console.log('Fetching more data...');
    }

}

customElements.define('infinite-scroll', InfiniteScroll);