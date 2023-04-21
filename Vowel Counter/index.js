var disptext = document.querySelector('.disptext');
const inptext = document.querySelector('.form__field');
const btninp = document.querySelector('.btn');


btninp.addEventListener('click', () => {
    //To check if the input field is empty or not.
    if (inptext.value === '') {
        alert('Input can not be left empty, give input.')
    }
    let myval = inptext.value;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    var vcount = 0;
    var aryy = [];

    for (let char of myval) {
        if (vowels.includes(char)) {
            vcount++
            aryy.push(char)
        }
    }
    

    disptext.innerHTML = `There are ${vcount} number of vowels which are '${aryy}'`

    //value after every interval set to null.
    inptext.value = null;
})