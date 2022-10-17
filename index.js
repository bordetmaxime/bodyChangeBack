require('dotenv').config();

const cors = require('cors');

const bodyParser  =  require ( 'body-parser' )

const express = require('express');

const router = require('./src/router');

const port = process.env.PORT || 8000;
0
const app = express();

app.use ( bodyParser . urlencoded ( {  extended : false  } ) )

app.use(cors('*'));


app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port=${port}`);
});