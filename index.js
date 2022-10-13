require('dotenv').config();

const express = require('express');

const router = require('./src/router');

const port = process.env.PORT || 8000;

const app = express();


app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port=${port}`);
});