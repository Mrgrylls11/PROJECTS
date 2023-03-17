const myinput = document.querySelector('.inputsection');

const mybtn = document.querySelector('.btn');

const mylist = document.querySelector('.ulclass');


mybtn.addEventListener('click',()=>{
    const textval = myinput.value;
    const newele = document.createElement('li');

    const newtotal = document.createElement('button');
    newtotal.innerText = 'x';
    const cncl = document.createElement('button');
    cncl.textContent = 'X';
    newele.innerHTML = `${textval} + ${cncl}`;
    mylist.append(newele);



    myinput.value = "";
})
myinput.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter'){
        mybtn.click();
    }
})