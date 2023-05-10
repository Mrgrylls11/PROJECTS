const start = document.querySelector('.start');
const stopseconds = document.querySelector('.stop');
const seconds = document.querySelector('.seconds');
const milliseconds = document.querySelector('.milliseconds');
const minutes = document.querySelector('.minutes');
const clearbtn = document.querySelector('.clear');
let count = 0;
let count1 = 0;
let count2 = 0;
let interval

start.addEventListener('click', () => {
    milliseconds.innerHTML = '00';
    interval = setInterval(myfun, 17);
});

stopseconds.addEventListener('click', () => {
    clearInterval(interval);
});

clearbtn.addEventListener('click', () => {
    clearInterval(interval);
    milliseconds.innerHTML = '00';
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
    count = 0;
    count1 = 0;
    count2 = 0;
});

function myfun() {
    count += 1;
    milliseconds.innerHTML = count;
    if (count == 60) {
        count = 0;
        count1 += 1;
        seconds.innerHTML = '00';
        seconds.innerHTML = count1;
        if (count1 == 60) {
            count1 = 0;
            minutes.innerHTML = '00';
            count2 += 1;
            minutes.innerHTML = count2
        }
    }
}