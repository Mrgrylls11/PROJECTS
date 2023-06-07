const dateinp = document.querySelector('#age');
const display = document.querySelector('.disp1');
const btnn = document.querySelector('button');
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
btnn.addEventListener('click', datefun);

function datefun() {
    let DOB = new Date(dateinp.value);
    if (DOB = 'Invalid Date') {
        alert('no date selected');
        return
    }
    const TODAY = new Date();
    let difference = TODAY - DOB;

    let age = difference / (1000 * 24 * 60 * 60 * 365);

    let year = Math.floor(age);
    let reaminingyear = age - year;

    let monthdiff = reaminingyear * 12;
    let month = Math.floor(monthdiff)

    let remainingMonth = monthdiff - month;
    let day = Math.floor(remainingMonth * 30);

    display.innerHTML = `${year} years, ${month} months, ${day} days`
}