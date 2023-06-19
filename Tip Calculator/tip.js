const userinp = document.querySelector('.inpnum');
const tipvalue = document.querySelector('.inptip');
const people = document.querySelector('.inperson');
const percent = document.querySelector('.percent');
const person = document.querySelector('.person');
const total = document.querySelector('.total');
const perperson = document.querySelector('.perperson');
const totalamount = document.querySelector('.tamount');
const totaltip = document.querySelector('.ttip');
const perpersonamount = document.querySelector('.pamount');
const perpersontip = document.querySelector('.ptip');


userinp.addEventListener('input', (e) => {
    calculate(e.target.value);
})

tipvalue.addEventListener('mousemove', () => {
    percent.innerHTML = `${tipvalue.value}%`;
    calculate(userinp.value);
})
people.addEventListener('mousemove', () => {
    person.innerHTML = `${people.value}`
    calculate(userinp.value);
})

function calculate(bill) {
    if (bill < 0) {
        alert('please give correct input (-ve not allowed)');
        location.reload();
    }
    let tipcalc = Number((bill * tipvalue.value) / 100);
    let totaltipval = (Number(bill) + tipcalc);
    total.innerHTML = `${totaltipval}`;
    totaltip.innerHTML = `${tipcalc}`;
    if (userinp.value == 0) {
        totalamount.innerHTML = 0;
    }
    else {
        totalamount.innerHTML = `${userinp.value}`;
    }
    let peramt = parseInt(bill / people.value);
    let pertip = parseInt(peramt * tipvalue.value / 100);
    perperson.innerHTML = `${(peramt + pertip)}`;
    perpersonamount.innerHTML = `${peramt}`;
    perpersontip.innerHTML = `${pertip}`;
}