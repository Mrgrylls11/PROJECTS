const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const bttn = document.querySelector('.fullscreen')
const mycontainer = document.querySelector('.main')
function myfun() {
    const time = new Date();
    let myhours = time.getHours();
    let myminutes = time.getMinutes();
    let myseconds = time.getSeconds();
    hours.innerHTML = `${myhours} <div>HOURS</div>`
    minutes.innerHTML = `${myminutes} <div>MINUTES</div>`
    seconds.innerHTML = `${myseconds} <div>SECONDS</div>`
}
bttn.addEventListener('click', () => {
    if (mycontainer.requestFullscreen) {
        mycontainer.requestFullscreen();
    }
})

setInterval(myfun, 16);