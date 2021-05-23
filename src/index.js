const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

app.use('/', require('./routes'));

app.listen(PORT, ()=>{
    console.log("App listening on port "+PORT);
});