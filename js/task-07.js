const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onBlur);

function onBlur(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}