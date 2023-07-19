const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});



app.get('/prime/:number', (req, res) => {
    const number = req.params.number;
    res.send(`Hello, ${name}`);
});

app.get(`/prime/:number` , (req,res) => {
    const number = req.params.number;
    let result = false;
    if(number % 2 !=0) {
        result = true;
    }
    res.send(`Number ${number} prime : ${result}`);
});









app.listen(3000, () => {
    console.log('Server listening on port 3000');  
});







