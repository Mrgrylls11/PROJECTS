var dispnum = document.querySelector('.hexcode');
var hexbtn = document.querySelector('.button');

hexbtn.addEventListener('click', ()=>{
    var hexcode = Math.random().toString(16).slice(2,8).padEnd(2,6);
    // console.log(`#${hexcode}`);
    document.body.style.backgroundColor = `#${hexcode}`;
    dispnum.innerHTML = `#${hexcode}`
})