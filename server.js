require('./model/db')
const express = require('express');
const app = express();


const storesController = require('./controllers/storeController');

app.use('/store', storesController);

app.listen(4000, () => console.log('Listening on port 3000...'))
