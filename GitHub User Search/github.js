const inputele = document.querySelector('.getlink');
const userdata = document.querySelector('.user-list');
const errorbox = document.querySelector('.errorbox');


inputele.addEventListener('keydown', async (e) => {
    if (e.key == 'Enter') {
        let link = `https://api.github.com/users/${inputele.value}`
        let data = await fetch(link).then(req => req.json()).then(response => response);
        if (data.message) {
            setTimeout(errorfun, 5000);
            errorbox.style.visibility = 'visible';
        }
        else {
            // document.location = './githubdetail.html'
            window.location.href = './githubdetail.html'
            console.log(data);
        }
    }
})



function errorfun() {
    errorbox.style.visibility = 'hidden'
}   