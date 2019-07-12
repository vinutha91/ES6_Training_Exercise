const Trip = require('../models/trip.model.js');

// Create and Save a new Trip
exports.create = (req, res) => {
    // Create a Trip
    const myTrip = new Trip({
        kms: req.body.kms,
        totalFuelPrice: req.body.totalFuelPrice,
        pricePerLtr: req.body.pricePerLtr,
        date: req.body.date,
        number: req.body.number
    });

    // Save Trip in the database
    myTrip.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the vehicle."
        });
    });
};

// Retrieve and return all Trip from the database.
exports.findAll = (req, res) => {
    Trip.find({}, function(err, trips) {
        res.send(trips);
    })
};

// Find a single Trip with a noteId
exports.findOne = (req, res) => {
    var trip_id = req.params.tripId;
    Trip.findById(trip_id, function(err, data) {
        res.send(data);
    })
};

// Update a Trip identified by the tripId in the request
exports.update = (req, res) => {

};

// Delete a Trip with the specified tripId in the request
exports.delete = (req, res) => {
    var trip_id = req.params.tripId;
    Trip.findByIdAndDelete(trip_id, function(err, data) {
        res.send(data);
    })
};

exports.getLastTrip = (req, res) => {
    var vehicle_number = req.params.vehicleNumber;
    Trip.find({number: vehicle_number}, function(err, data) {
        if (data.length === 0) {
            res.send('No trips found under this vehicle number!');
        } else {
            res.send([data[data.length - 1]]);
        }
    })
}