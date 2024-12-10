const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Server OK')
})

app.listen(3000, () => {
    console.log('Server conected on port 3000')
});