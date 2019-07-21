const fetch = require('node-fetch');
// function fetchVehicle(vehicleNumber) {
//     return fetch('http://localhost:3000/vehicle')
//         .then((data) => {
//             console.log('Task 1');
//             return data.json();
//         })
//         .then((data) => {
//             console.log('Task 2');
//             return data.filter((vehicle) => {
//                 return vehicle.number === vehicleNumber;
//             })
//         });
// }

async function fetchVehicle(vehicleNumber) {
    var data = await fetch('http://localhost:3000/vehicle');
    var vehicles = await data.json();
    return vehicles.filter((vehicle) => {
        return vehicle.number === vehicleNumber;
    });
}

var result = fetchVehicle('MH12PD1119');
result;
