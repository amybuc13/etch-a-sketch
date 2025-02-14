const container = document.getElementById('etchContainer');
const resetButton = document.getElementById('resetButton');
const colorPicker = document.getElementById('colorPicker');
let selectedColor = colorPicker.value;

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  container.appendChild(cell);
}

colorPicker.addEventListener('input', (e) => {
  selectedColor = e.target.value;
});

let isDrawing = false;

container.addEventListener('mousedown', () => isDrawing = true);
container.addEventListener('mouseup', () => isDrawing = false);
container.addEventListener('mouseleave', () => isDrawing = false);

container.addEventListener('mousemove', (e) => {
  if (isDrawing && e.target.classList.contains('cell')) {
    e.target.style.backgroundColor = selectedColor;
  }
});

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('cell')) {
    e.target.style.backgroundColor = selectedColor;
  }
});

resetButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.style.backgroundColor = 'white');
});


