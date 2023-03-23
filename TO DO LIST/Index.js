const myinput = document.querySelector('.inputsection');

const mybtn = document.querySelector('.btn');

const mylist = document.querySelector('.ulclass');


mybtn.addEventListener('click', () => {
    // this is the original value from the input
    const textval = myinput.value;    

    //created the new li tag
    const newele = document.createElement('li');

    //li tag with the input value
    newele.innerText = textval;
    console.log(textval);

    

    //created the button for delete
    const cncl = document.createElement('button');
    cncl.innerText = "x";
    cncl.addEventListener('click', removemyele);

    newele.append(cncl);

    //inserting the new element inside the main unordered list
    mylist.append(newele);

    //created the inner value of the delete button
    cncl.innerText = 'X';

    myinput.value = "";
}

)
//eventlistener for input element to peroform click task on enter after typing
myinput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if (myinput.value == "") {
            alert('no input given')
        }
        else {
            mybtn.click();
        }
    }
});

//function for delete button click event
function removemyele(task){
    console.log('delete button is clicked', task);
    task.target.parentElement.remove()
}

