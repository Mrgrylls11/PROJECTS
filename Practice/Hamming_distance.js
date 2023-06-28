const first = document.querySelector('.first')
const second = document.querySelector('.second')
const distance = document.querySelector('.getdistance')
const display = document.querySelector('.display')

distance.addEventListener('click', () => {
    console.log('hiii');
    let array = [];
    array.push(first.value.split(''));
    array.push(second.value.split(''));

    if (array[0].length == array[1].length) {
        var count = 0;
        for (let i = 0; i < array[0].length; i++) {
            if (array[0][i] === array[1][i]) {
                console.log(array[0][i]);
            }
            else {
                count++
            }
        }
    }
    else {
        console.log('length is different');
    }
    display.innerHTML = `Hamming distance is ${count}`
})