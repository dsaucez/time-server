import express, { json } from 'express';
import { v4 as uuidv4 } from 'uuid';

const PORT = 3000;
const pid = uuidv4();
const app = express();

app.use(json());

app.get('/time', (req,res) => { res.send({time: new Date(), id: pid}) });

app.listen(PORT, ()=> {console.log('Time server ' + pid + ' is listening on port '+ PORT)});
