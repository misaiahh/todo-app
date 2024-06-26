import './style.css';
import { setupCounter } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>TODO</h1>
    <div>Content</div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
