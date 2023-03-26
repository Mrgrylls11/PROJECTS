
const postvbtn = document.querySelector('.positive');
const negtvbtn = document.querySelector('.negative');
const dispnum = document.querySelector('.display');
const resetbtn = document.querySelector('#reset');


//positive button event listener
postvbtn.addEventListener('click', funn);
function funn() {
    // alert("stop")
    console.log('button clicked');
}



//negative button event listener
negtvbtn.addEventListener('click', () => {
    console.log('negative btn');
});



//reset button event listener
resetbtn.addEventListener('click', () => {
    console.log('reset btn');
})