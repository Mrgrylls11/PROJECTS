const btn = document.querySelector('#button');

const inptext = document.querySelector('.inptext');

const result = document.querySelector('.result');

btn.addEventListener('click', () => {
    let val = inptext.value;
    let tempval = val;
    let final = 0;
    if(inptext.value == ''){
        alert('no input given')
        result.innerHTML = 'Result!';
        result.style.color = 'black'
        return;
    }
    for (let i = 0; i < val.length; i++) {
        let temp = tempval % 10;
        tempval = parseInt(tempval/10); 
        final += (temp**val.length);
    }
    if(final == val){
        result.innerHTML = "Armstrong";
        console.log('yes');
        result.style.color = 'Green';
        result.style.textShadow = '0px 0px 57px 8px rgba(0,0,0,0.79)';
        // inptext.value = '';
    }
    else{
        result.innerHTML = 'Not Armstrong';
        // console.log('no');
        result.style.color = 'red';
    }
    
});