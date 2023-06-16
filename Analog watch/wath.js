const degree = 6;

const hour = document.querySelector('.hour');
const minute = document.querySelector('.min');
const second = document.querySelector('.sec');


const time = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * degree;
    let ss = day.getSeconds() * degree;

    hour.style.transform = `translate(-50%, -50%) rotate(${hh + mm / 12}deg)`;
    minute.style.transform = `translate(-50%, -50%)rotate(${mm}deg)`
    second.style.transform = `translate(-50%, -50%)rotate(${ss}deg)`
}
time();
setInterval(time, 1000)