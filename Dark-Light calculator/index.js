let darkmode = localStorage.getItem('darkmode')
let toggler = document.querySelector('.toggler');
const disptext = document.querySelector('.disptext');
const mybtn = document.querySelector('td');

const enableDarkMode = ()=>{
    localStorage.setItem('darkmode', 'enabled')
}

toggler.addEventListener('click',()=>{
    console.log('test');
})

mybtn.addEventListener('click',()=>{
    console.log('hey');
})