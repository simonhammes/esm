import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

function MyButton() {
    return createElement('button', {}, "I'm a button");
}

console.log("Hello World!");

const root = createRoot(document.getElementById('root'));
root.render(createElement(MyButton));
