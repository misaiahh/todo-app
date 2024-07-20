import './style.css';
// import { setupCounter } from './counter.ts';
import './components/Button.ts';
import './components/Todo';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>TODO</h1>
    <div>
      <todo-list></todo-list>
    </div>
  </div>
`;

// leaving this here for reference
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
