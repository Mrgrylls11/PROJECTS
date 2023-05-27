const app = require('express')();
const exp = require('constants');
const cors = require('cors');
app.use(express.json());
app.use(
    cors({
        origin: "*"
    })
)
app.get('#', (req, res) => {
    generate.addEventListener('click', () => {
        const link = fetch('https://topmate.io/nakulgrover18')
        console.log(link);
    });
    const datalink = fetch("https://topmate.io/nakulgrover18");
    res.send(datalink.json());
    console.log(res);
});


const getlink = document.querySelector('.getlink');
const generate = document.querySelector('.generatebtn');
// const backbtn = document.querySelector('.backbtn');


