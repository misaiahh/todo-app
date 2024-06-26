class Button extends HTMLButtonElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = 'Click me and check the console';
        this.addEventListener('click', () => {
            console.log('Clicked');
        });
    }
}

export default Button;