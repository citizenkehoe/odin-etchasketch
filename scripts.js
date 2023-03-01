let magicNum = 16;
let totalSquares = magicNum ** 2;
let etchContainer = document.getElementById('etch-contianer');
let resetButton = document.getElementById('clear-sketch');
let newEtchButton = document.getElementById('make-etch');


for (let i = 0; i < totalSquares; i++) {
    let etchPoint = document.createElement('div');
    etchPoint.classList.add('square');
    etchContainer.appendChild(etchPoint);
};

etchContainer.style.gridTemplateColumns = `repeat(${magicNum}, 1fr)`;
etchContainer.style.gridTemplateRows = `repeat(${magicNum}, 1fr)`;

function etchMe() {
    this.classList.add('etched');
};

let etchPoints = document.querySelectorAll('.square');
etchPoints.forEach(etchPoint => {
    etchPoint.addEventListener('pointerover', etchMe);
});

function clearSketch() {
    console.log('whoa!');
    etchPoints.forEach(etchPoint => {
        etchPoint.classList.remove('etched');
    });
};

resetButton.addEventListener('click', clearSketch);