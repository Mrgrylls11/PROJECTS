
const togglerbtn = document.querySelector('.toggler');
const clss = document.querySelector('.darkmode');
togglerbtn.addEventListener('change', () => {
    document.body.classList.toggle('darkmode');
});
const inputbtn = document.querySelectorAll("button");
const disptext = document.querySelector('.disptext');

inputbtn.forEach(element => {
    element.addEventListener('click', () => {
        if (element.value == 'clear') {
            disptext.innerHTML = '0';
        }
        else if (element.value == 'erase'){
            var text = disptext.innerHTML.toString();
            disptext.innerHTML = text.substr(0,text.length-1);
        }
        else if(element.value == '(' || element.value == ')'){

            disptext.innerHTML = disptext.innerHTML+element.value;
        }
        else if(element.value == '='){
            disptext.innerHTML = eval(disptext.innerHTML)
        }
        else if(disptext.innerHTML == '0'){
            disptext.innerHTML = '';
            disptext.innerHTML = element.value;
        }
        else{
            disptext.innerHTML +=element.value;
        }

    })
});

