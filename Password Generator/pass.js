const disptext = document.querySelector('p');
const generatebtn = document.querySelector('button');
const len = document.querySelector('.number-input');
const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');
const nums = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');

//all characters ascii ranges stores accordingly
const allLowercase = rangefunction(97, 122);
const allupperase = rangefunction(65, 90);
const allnums = rangefunction(48, 57);
const allsymbols = rangefunction(33, 47)
    .concat(rangefunction(58, 64))
    .concat(rangefunction(91, 96))
    .concat(rangefunction(123, 126));

generatebtn.addEventListener('click', () => {
    disptext.innerHTML = calculate()
})

//ranging ascii and storing all values in the array
function rangefunction(a, b) {
    let pass = [];
    for (let i = a; i <= b; i++) {
        pass.push(i)
    }
    return pass;
}

function calculate() {
    let check = [];
    if (lowercase.checked == true) {
        check = allLowercase
    }
    if (uppercase.checked == true) {
        check = check.concat(allupperase);
    }
    if (nums.checked == true) {
        check = check.concat(allnums);
    }
    if (symbols.checked == true) {
        check = check.concat(allsymbols);
    }

    //getting the values from check array and putting it together 
    let finalcode = [];
    for (let i = 0; i < len.value; i++) {
        const joining = check[Math.floor(Math.random() * check.length)];
        finalcode.push(String.fromCharCode(joining));
    }

    //check if atleast one of the options are ticked or not.
    if (check.length == 0) {
        alert('no options checked, please select one')
        location.reload();
    }

    return finalcode.join('');
}