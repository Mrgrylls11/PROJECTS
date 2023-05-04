
const togglerbtn = document.querySelector('.toggler');
const themedark = document.querySelector('.dark');

// let ifdark = true;
// togglerbtn.onclick = () => myfunction;
togglerbtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('.dark');
    console.log('hey');
})

