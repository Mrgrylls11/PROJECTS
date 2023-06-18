const result = document.querySelector('#result');
const filter = document.querySelector('#filter');
const listitems = [];
getdata();

filter.addEventListener('input', () => {
    filterdata(filter.value)
})

function getdata() {
    fetch('https://randomuser.me/api/?results=100').then(res => res.json()).then(data => {
        result.innerHTML = '';
        data.results.forEach(ele => {
            const li = document.createElement('li');

            listitems.push(li);

            li.innerHTML = `<img src='${ele.picture.large}' alt='${ele.name.first}'>
            <div>
            <h4>${ele.name.title}.${ele.name.first} ${ele.name.last}</h4>
            <p>${ele.location.city} ${ele.location.country}</p>
            </div>`;

            result.appendChild(li);

        })

    })
    // console.log(listitems);
}


function filterdata(searchterm) {
    listitems.forEach(item => {
        let temp = item.innerText.toString().toLowerCase();
        console.log(temp);
        if (temp.includes(searchterm)) {
            item.classList.remove('hide')
        }
        else {
            item.classList.add('hide')
        }
    })
}
