const copying = document.querySelector('.myemail');

copying.addEventListener('click',()=>{
    navigator.clipboard.writeText("ashucool049@gmail.com");
    console.log('hey');
})