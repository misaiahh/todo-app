import './style.css';
// import { setupCounter } from './counter.ts';
import './components/Button.ts';
import './components/Todo';
import './components/SearchBar';

const todos = ['todo 1', 'todo 2', 'todo 3'];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h1>TODO</h1>
    <div>
      <input is="search-bar" id="search-bar"></input>
      <todo-list todos="${todos}"></todo-list></todo-list>
    </div>
`;

const searchBar = document.querySelector('input[is="search-bar"]');
const todoList = document.querySelector('todo-list');

searchBar?.addEventListener('search', (event: Event) => {
    const detail = (event as CustomEvent).detail;
    console.log(detail.text);
    todoList?.getAttribute('todos');
    todoList?.setAttribute('search', detail.text);
});


// leaving this here for reference
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
