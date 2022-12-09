const button = document.querySelector('.btn');
const body = document.querySelector('body');

button.addEventListener('click', colorGenerate ) 

function colorGenerate() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    body.style.backgroundColor = `#${randColor.toUpperCase()}`;//body.display nhi body.style hoga
    
}