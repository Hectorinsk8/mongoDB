import express from 'express';
import morgan from 'morgan';
import connect from './utils/db.js';
import colors from 'colors';


//require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('combined'))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something broke :('.red.bold)
})

app.get('/', (req, res) => {
    res.send('Server OK')
})

app.get('/api', (req, res) => {
    res.send({
        message: 'Sorry bro ',
        author: 'Peruvian',
        lastname: 'Peru',
        age: 30,

    })
})

app.listen(port, () => {
    console.log('Server conected on: ',`http://localhost:${port}`.blue.bold )
});


connect();