var dispnum = document.querySelector('#para');
const mybtn = document.querySelector('.submit');
const myinp = document.querySelector('#numinp');
const spann = document.querySelector('#spann');

mybtn.addEventListener('click', () => {
    var myrandom = Math.random().toString(10).slice(2, 3);
    console.log(myrandom);
    dispnum.innerHTML = `${myrandom}`;
})
// mybtn.addEventListener('click', setInterval(myfun,100));
function myfun(){
    var randoom = Math.random().toString(10).slice(2, 3);
    console.log(randoom); 
    spann.innerHTML = `${randoom}`
}