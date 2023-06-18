const hh = document.querySelector('.hh');
const mm = document.querySelector('.mm');
const ss = document.querySelector('.ss');
const btn = document.querySelector('.image');
const container = document.querySelector('body');
btn.addEventListener('click', () => {
    container.requestFullscreen();
})
function clock() {
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    console.log(minutes);
    hh.style.transform = `rotate(${(hour * 30) + minutes / 2}deg)`;
    mm.style.transform = `rotate(${minutes * 6}deg)`;
    ss.style.transform = `rotate(${seconds * 6}deg)`
}
clock();
setInterval(clock, 1000);