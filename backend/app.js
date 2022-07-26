const bodyParser = require('body-parser');

let express = require('express');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());