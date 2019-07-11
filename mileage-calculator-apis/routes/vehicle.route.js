module.exports = (app) => {
    const vehicle = require('../controller/vehicle.controller');

    // Create a new vehicle
    app.post('/vehicle', vehicle.create);

    // Retrieve all vehicle
    app.get('/vehicle', vehicle.findAll);

    // Retrieve a single vehicle with vehicleId
    app.get('/vehicle/:vehicleId', vehicle.findOne);

    // Update a vehicle with vehicleId
    app.put('/vehicle/:vehicleId', vehicle.update);

    // Delete a vehicle with vehicleId
    app.delete('/vehicle/:vehicleId', vehicle.delete);
};