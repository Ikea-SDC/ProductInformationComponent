const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router')
const PORT = 1337;
const CORS = require('cors');

const app = express();

app.use(CORS());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../static/')))

app.use('/', router);

app.listen(PORT, function () {
    console.log('ProductInformationComponent server listening on localhost:' + PORT);
});