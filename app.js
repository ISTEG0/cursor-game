const board = document.querySelector('#board');
const colors = [['#FE2E9A'], ['#642EFE'], ['#2EFEC8'], ['#58FA58'], ['#58FAD0'], ['#F4FA58'], ['#D358F7'], ['#F78181']];
const SQUARES_NUMBER = 900;

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    square.addEventListener('touchstart', () => setColor(square))
    square.addEventListener('touchend', () => removeColor(square))

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}