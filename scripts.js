for (let i = 0; i < 256; i++) {
    let etchContainer = document.getElementById('contianer');
    let etchPoint = document.createElement('div');
    etchPoint.classList.add('square');
    etchContainer.appendChild(etchPoint);
};

function etchMe() {
    this.classList.add('etched');
}


let etchPoints = document.querySelectorAll('.square');
etchPoints.forEach(etchPoint => {
    etchPoint.addEventListener('pointerover', etchMe);
});


