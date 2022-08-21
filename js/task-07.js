const inputEl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('input', () => {
    text.style.fontSize = inputEl.value + 'px'
});