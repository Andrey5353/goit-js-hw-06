function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberInput = document.querySelector('#controls > input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxCont = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = []
  amount = numberInput.value;

  for (let i = 1; i <= amount; i += 1){
    const box = document.createElement('div');
    box.style.width = `${20 + i * 10}px`;
    box.style.height = `${20 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  boxCont.append(...boxes);
};

function destroyBoxes() {
  boxCont.remove();
};