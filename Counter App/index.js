
const postvbtn = document.querySelector('.positive');
const negtvbtn = document.querySelector('.negative');
var dispnum = document.querySelector('.display');
const resetbtn = document.querySelector('#reset');
var count = 0;

//positive button event listener
function plus() {
    if (dispnum.innerHTML === 'Start') {
        count++
    }
    else if (dispnum.innerHTML <= 0) {
        count++
    }
    else {
        count++
    }
    dispnum.innerHTML = count;
}
postvbtn.addEventListener('click', plus);

//negative button event listener
function minus() {
    if (dispnum.innerHTML === '0' || dispnum.innerHTML === 'Start') {
        alert('number can\'t be less than 0');
        location.reload();
    }
    else {
        count--;
    }
    dispnum.innerHTML = count;
}
negtvbtn.addEventListener('click',minus);



//reset button event listener
resetbtn.addEventListener('click', () => {
    count = 0;
    dispnum.innerHTML = count;
    // location.reload();
})

document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 38:
            plus();
            break;
        case 40:
            minus();
            break;
    }
};