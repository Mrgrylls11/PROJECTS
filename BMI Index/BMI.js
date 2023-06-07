const myheight = document.querySelector('.height');
const myweight = document.querySelector('.weight');
const mydisp = document.querySelector('.display');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let calculate = Math.floor(myweight.value / (myheight.value * myheight.value))
    if (calculate < 18.5) {
        mydisp.innerHTML = `BMI ${calculate} Underweight`
        mydisp.style.color = 'blue'
    }
    if (calculate > 18.5 && calculate < 24.9) {
        mydisp.innerHTML = `BMI ${calculate} Healthy`
        mydisp.style.color = 'Green'
    }
    if (calculate > 25 && calculate < 29.9) {
        mydisp.innerHTML = `BMI ${calculate} Overweight`
        mydisp.style.color = 'yellow'
    }
    if (calculate > 30) {
        mydisp.innerHTML = `BMI ${calculate} Obese`
        mydisp.style.color = 'red'
    }
})