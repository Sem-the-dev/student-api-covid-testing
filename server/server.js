const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());


const studentRoutes = require('./controllers/students')
app.use('/students', studentRoutes)

app.get('/', (req, res)=> {
    res.send("Hello there!")
});

app.get('/students', (req, res) => {
    res.send(studentRoutes)
    res.send(200)
})

app.post('/students', (req, res) => {
    res.send()
})


module.exports = app;



