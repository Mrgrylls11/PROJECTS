const getbtn = document.querySelector('.getbtn');
const joke1 = document.querySelector('.joke');
const joke2 = document.querySelector('.joke2');
const categ = document.querySelector('.category');

getbtn.addEventListener('click', () => {
    const jokedata = fetch("https://v2.jokeapi.dev/joke/any");
    const maindata = jokedata.then((response) => {
        return response.json();
    });
    maindata.then((result) => {
        categ.innerHTML = `Type:` + result.category
        if (result.type == 'single') {
            joke1.innerHTML = result.joke
            joke2.innerHTML = " "
        }
        else if(result.type == "twopart") {
            joke1.innerHTML = result.setup
            joke2.innerHTML = result.delivery
        }
    });
});