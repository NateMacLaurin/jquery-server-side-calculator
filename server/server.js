//add required server modules
const express = require('express');

//this library comes with express, but we still need to import it explicitly
const bodyParser = require('body-parser');

//define our express function and port
const app = express();
const PORT = 5000;

//add expresss server static page definition
app.use(express.static('server/public'));

//add required express body module for POST handlers
app.use(bodyParser.urlencoded({extended: true}));

//add GET handlers

//add POST handlers

//add express server listener on port 5000
app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
})