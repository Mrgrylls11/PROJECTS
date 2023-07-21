const express = require('express');
const mockdata = require('./mockdata.js');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    let data = 'hiiii'
    res.send(data)
})

app.get('/posts', (req, res) => {
    res.json(mockdata.posts)
})

app.get('/posts/:postID', (req, res) => {
    const paramobj = req.params;
    const { postID } = paramobj;
    mockdata.posts.filter(ele => {
        if (ele.id == postID) {
            res.send(ele);
        }
        res.status(404).send('not found')
    })
});


app.listen('6754', () => {
    console.log('port opened in 6754');
});