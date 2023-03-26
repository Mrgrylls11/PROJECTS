
const postvbtn = document.querySelector('.positive');
const negtvbtn = document.querySelector('.negative');
var dispnum = document.querySelector('.display');
const resetbtn = document.querySelector('#reset');
var count = 0;

//positive button event listener
postvbtn.addEventListener('click', () => {
    // console.log('button clicked');
    if(dispnum.innerHTML === 'Start'){
        count++
    }
    else if(dispnum.innerHTML <= 0){
        count++
    }
    else{
        count++
    }
    dispnum.innerHTML = count;
    console.log(dispnum.innerHTML);
});



//negative button event listener
negtvbtn.addEventListener('click', () => {
    // console.log('negative btn');
    if(dispnum.innerHTML === '0' || dispnum.innerHTML === 'Start'){
        alert('number can\'t be less than 0');
        location.reload();
    }
    else{
        count--;
    }
    dispnum.innerHTML = count;
});



//reset button event listener
resetbtn.addEventListener('click', () => {
    count = 0;
    dispnum.innerHTML = count;
    // location.reload();
})

