// connect to html elements
let etchContainer = document.getElementById('etch-contianer');
let resetButton = document.getElementById('clear-sketch');
let newEtchButton = document.getElementById('make-etch');

// create drawing area & auto-load
function makeDrawArea(x = 16) {
    for (let i = 0; i < x ** 2; i++) {
        let etchPoint = document.createElement('div');
        etchPoint.classList.add('square');
        etchContainer.appendChild(etchPoint);
    };
    etchContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    etchContainer.style.gridTemplateRows = `repeat(${x}, 1fr)`;
};
makeDrawArea();

// add 'etched' class
function etchMe() {
    this.classList.add('etched');
};

// attach 'etched' class to all created squares
function makeEtchPoints() {
    let etchPoints = document.querySelectorAll('.square');
    etchPoints.forEach(etchPoint => {
        etchPoint.addEventListener('pointerover', etchMe);
    });
    return etchPoints;
};
makeEtchPoints();

// clear drawing area & add to corresponding button
function clearSketch() {
    makeEtchPoints().forEach(etchPoint => {
        etchPoint.classList.remove('etched');
    });
};
resetButton.addEventListener('click', clearSketch);

// create new drawing area & add to corresponding button
function makeNewEtch() {
    let input = prompt("How detailed of a sketch would you like to etch?", "Enter number between 1 and 100");
    if (isNaN(input) || input < 1 || input > 100) {
        alert('Error; please enter a number between 1 and 100.');
    } else {
        clearSketch();
        while (etchContainer.firstChild) {
            etchContainer.removeChild(etchContainer.firstChild);
        }
        makeDrawArea(input);
        makeEtchPoints();
    };
};
newEtchButton.addEventListener('click', makeNewEtch);