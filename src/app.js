const express = require('express');
const cors = require('cors');

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

app.use('/', require('./routes'));

module.exports = app;