const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/time', (req,res) => { res.send({time: new Date()}) });

app.listen(PORT, ()=> {console.log('Time server is listening on port '+ PORT)});
