const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listitems = [];


filter.addEventListener('input', (e) => {
    filterdata(e.target.value);
});

function getdata() {
    fetch('https://randomuser.me/api/?results=50').then(res => res.json()).then(data => {
        result.innerHTML = '';
        data.results.forEach(user => {
            const li = document.createElement('li');
            listitems.push(li);
            li.innerHTML = `<img src='${user.picture.large}'><div class='user-info> <h4>${user.name.first} </div>`;
            result.appendChild(li)
        });
    });
}

function filterdata(searchterm) {
    listitems.forEach(item => {
        if (item.toLowerCase().includes(searchterm.toLowerCase())) {
            item.classList.remove('hide')
        }
        else {
            item.classList.add('hide')
        }
    });
}
