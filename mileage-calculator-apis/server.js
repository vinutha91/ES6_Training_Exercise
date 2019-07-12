const express = require('express');
const bodyParser = require('body-parser');

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

var cors = require('cors');

// create express app
const app = express();
app.use(cors());
// mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to mileage calculator app. These are the APIs of Mileage Calculator App."});
});

require('./routes/vehicle.route')(app);
require('./routes/trip.route')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});