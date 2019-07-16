module.exports = (app) => {
    const trip = require('../controller/trip.controller');

    // Create a new trip
    app.post('/trip', trip.create);

    // Retrieve all trip
    app.get('/trip', trip.findAll);

    // Retrieve a single trip with tripId
    app.get('/trip/:tripId', trip.findOne);

    // Retrieve a single trip with tripId
    app.get('/getLastTrip/:vehicleNumber', trip.getLastTrip);

    // Retrieve trips with vehicleNumber
    app.get('/getTripsForVehicle/:vehicleNumber', trip.getTripsForVehicle);

    // Update a trip with tripId
    app.put('/trip/:tripId', trip.update);

    // Delete a trip with tripId
    app.delete('/trip/:tripId', trip.delete);
};