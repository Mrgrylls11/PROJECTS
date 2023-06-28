const number = document.querySelector('.Number');
const push = document.querySelector('.push');
const pop = document.querySelector('.pop');
const display = document.querySelector('.display');
let temp = [];
push.addEventListener('click', () => {
    if (number.value == '') {
        alert('value an not be empty');
        number.innerHTML = '';
        return
    }
    temp.push(number.value);
    console.log(temp);
    display.innerHTML = `${temp}`;
    number.value = ''
})

pop.addEventListener('click', () => {
    if (temp.length == 0) {
        alert('stack is empty')
    }
    temp.pop();
    display.innerHTML = `${temp}`
    number.value = '';
})