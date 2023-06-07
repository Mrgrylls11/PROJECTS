const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const blur = document.querySelector('.blur');
const Spread = document.querySelector('.spread');
const color = document.querySelector('.color');
const box = document.querySelector('.mybox');
const optext = document.querySelector('.outputxt');
let inputfromall = document.querySelectorAll('input');

function allchanges() {
    // console.log(horizontal.value,vertical.value,blur.value,Spread.value,color.value);
    box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${Spread.value}px ${color.value}`;
    optext.innerHTML = `box-shadow: ${horizontal.value}px ${vertical.value}px ${blur.value}px ${Spread.value}px ${color.value};`

}

inputfromall.forEach(input => {
    input.addEventListener('change', allchanges)
});
inputfromall.forEach(input => {
    input.addEventListener('mousemove', allchanges)
});

const copy = document.querySelector('.copybtn');
copy.addEventListener('click', copytext);
const hidden = document.querySelector('.hidden');
hidden.style.visibility = 'hidden'
function copytext() {
    navigator.clipboard.writeText(optext.innerHTML);
    hidden.style.visibility = 'visible';
    setTimeout(copyfun, 500);
}
function copyfun() {
    hidden.style.visibility = 'hidden';
}
