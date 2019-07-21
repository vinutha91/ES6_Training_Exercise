var fetch = require('node-fetch');

function fetchVehicles() {
    return fetch('http://localhost:3000/vehicle')
    .then((data) => {
        return data.json();
    })
    .then((vehicles) => {
        var fuelPricePromises = vehicles.map((vehicle) => {
            return fetch('http://localhost:3000/getTripsForVehicle/'+vehicle.number)
                    .then((data) => {
                        return data.json()
                    })
                    .then((data) => {
                        return data;
                    });
        });

        return Promise.all(fuelPricePromises);
    })
}

async function fetchVehicles() {
    var vehiclesResponse = await fetch('http://localhost:3000/vehicle');
    var vehicles = await vehiclesResponse.json();

    var allTripsOfAllVehicles = [];

    for (var i = 0; i < vehicles.length; i++) {
        var tripOfVehicleResponse = await fetch('http://localhost:3000/getTripsForVehicle/'+vehicles[i].number);
        var tripsOfVehicle = await tripOfVehicleResponse.json();
        allTripsOfAllVehicles.push(tripsOfVehicle);
    }

    return allTripsOfAllVehicles;
}

var result = fetchVehicles();
result;