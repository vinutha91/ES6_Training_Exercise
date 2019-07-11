const Vehicle = require('../models/vehicle.model');

// Create and Save a new Vehicle
exports.create = (req, res) => {
    console.log(req.body.type)
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Vehicle content can not be empty"
    //     });
    // }

    // Create a Vehicle
    const myVehicle = new Vehicle({
        type: req.body.type,
        name: req.body.name,
        number: req.body.number,
        kms: req.body.kms
    });

    // Save Note in the database
    myVehicle.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the vehicle."
        });
    });
};

// Retrieve and return all Vehicle from the database.
exports.findAll = (req, res) => {
    Vehicle.find({}, function(err, vehicles) {
        res.send(vehicles);
    })
};

// Find a single Vehicle with a vehicleId
exports.findOne = (req, res) => {
    var vehicle_id = req.params.vehicleId;
    Vehicle.findById(vehicle_id, function(err, data) {
        res.send(data);
    })
};

// Update a Vehicle identified by the vehicleId in the request
exports.update = (req, res) => {

};

// Delete a Vehicle with the specified vehicleId in the request
exports.delete = (req, res) => {
    var vehicle_id = req.params.vehicleId;
    Vehicle.findByIdAndDelete(vehicle_id, function(err, data) {
        res.send(data);
    });
};