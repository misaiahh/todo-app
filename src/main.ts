import './style.css';
// import { setupCounter } from './counter.ts';
import './components/Button.ts';
import './components/Todo';
import './components/SearchBar';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>TODO</h1>
    <div>
      <input is="search-bar"></input>
      <todo-list></todo-list>
    </div>
  </div>
`;

document.querySelector('input[is="search-bar"]')?.addEventListener('search', (event: Event) => {
    const detail = (event as CustomEvent).detail;
    console.log(detail.text);
});


// leaving this here for reference
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
