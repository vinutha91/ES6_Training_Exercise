var registeredVehicles = [];
function getVehicles() {
	fetch('http://localhost:3000/vehicle', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then((data) => {
		return data.json();
	})
	.then((vehicles) => {
		registeredVehicles = vehicles;
		setVehicleOptions(vehicles);
	})
}

function setVehicleOptions(vehicles) {
	var i = 1;
	var select = document.getElementById('vehicles');
	vehicles.forEach((vehicle) => {
		select.options[i] = new Option(vehicle.name + ' ' + vehicle.number, vehicle.number);
		i++;
	});
}

function selectVehicled() {
	var selectedVehicle = document.getElementById('vehicles').value;

	getLastTripDetails(selectedVehicle);
}

function getLastTripDetails(selectedVehicle) {
	fetch('http://localhost:3000/getLastTrip/' + selectedVehicle, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then((data) => {
		return data.json();
	})
	.then((lastTripDetails) => {
		if (lastTripDetails.length !== 0) {
			
		}
	})
}