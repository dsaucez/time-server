const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const pid = process.pid;
const app = express();

app.use(bodyParser.json());

app.get('/time', (req,res) => { res.send({time: new Date(), id: pid}) });

app.listen(PORT, ()=> {console.log('Time server ' + pid + ' is listening on port '+ PORT)});
