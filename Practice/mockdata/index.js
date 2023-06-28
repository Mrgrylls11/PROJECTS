const express = require('express');
const mockdata = require('./mockdata.js');
const app = express();

app.get('/', (req, res) => {
    let data = 'hiiii'
    res.send(data)
})

app.get('/posts', (req, res) => {
    res.json(mockdata.posts)
})

app.get('/posts/:postId', (req, res) => {
    let paramobj = req.params;
    let { postId } = paramobj
    console.log(postId);
    mockdata.posts.find(ele => {
        if (ele.id == postId) {
            // let h1 = document.createElement('h1');
            // h1.innerHTML = ele.body;
            // res.send(h1)
            console.log(ele);
            res.send(ele)
            res.end();
        } 
    }) 
}
)

app.listen('6754', () => { 
    console.log('port opened in 6754');
});