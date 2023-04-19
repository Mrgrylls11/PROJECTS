var disptext = document.querySelector('.disptext');
const inptext = document.querySelector('.form__field');
const btninp = document.querySelector('.btn');


btninp.addEventListener('click', () => {
    if(inptext.value === ''){
        alert('input can not be left empty, give input.')
    }
    
})