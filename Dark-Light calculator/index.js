// let darkmode = localStorage.getItem('darkmode')
// let toggler = document.querySelector('.toggler');
// const disptext = document.querySelector('.disptext');
// const mybtn = document.querySelector('td');

// const enableDarkMode = ()=>{
//     localStorage.setItem('darkmode', 'enabled')
// }

// toggler.addEventListener('click',()=>{
//     console.log('test');
// })

// mybtn.addEventListener('click',()=>{
//     console.log('hey');
// })
const togglerbtn = document.querySelector('.toggler');
const themedark = document.querySelector('.dark');

let ifdark = true;

togglerbtn.onclick = () =>{
    console.log('hey');
    themedark.classList.toggle("dark");
    togglerbtn.classList.toggle("active");
    ifdark = !ifdark;
};
