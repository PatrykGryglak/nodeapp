const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req,res)=>{
    res.send('Node app on bluehost server');
});

app.get('/about', (req, res)=>{
    res.send('About this app');
});
console.log(`Listen on port: ${port}...`);
app.listen(port);
