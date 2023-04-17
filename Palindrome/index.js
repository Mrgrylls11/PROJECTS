const inptext = document.querySelector('.inptext');
var disptext = document.querySelector('.displaytext');
const mybutton = document.querySelector('.bttn');

mybutton.addEventListener('click', () => {
    if (inptext.value == '') {
        alert('noimput');
    }
    else {
        for (let i = 0; i < inptext.value.length / 2; i++) {
            if (inptext.value[i] !== inptext.value[inptext.value.length - 1 - i]) {
                return disptext.innerHTML = "Not a palindrome";
            }
        }
        return disptext.innerHTML = "It's a palindrome";
    }

});