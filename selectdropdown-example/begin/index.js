var allRegisteredVehicles = [];
var allTripsOfVehicle = [];
function getAllVehicles() {
	fetch('http://localhost:3000/vehicle', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then((data) => {
		return data.json()
	})
	.then((vehicles) => {
		allRegisteredVehicles = vehicles;
		generateVehicleOptions(vehicles);
	})
}

function generateVehicleOptions(vehicles) {
	var vehiclesDropDown = document.getElementById('vehicles');
	var i = 1;
	if (vehicles.length !== 0) {
		vehicles.forEach((vehicle) => {
			vehiclesDropDown.options[i] = new Option(vehicle.name + ' ' + vehicle.number, vehicle.number);
			i++;
		});
	}
}

function selectVehicle() {
	var selectedVehicleNumber = document.getElementById('vehicles').value;
	
	getAllTripsOfVehicle(selectedVehicleNumber);
}

function getAllTripsOfVehicle(vehicleNumber) {
	// http://localhost:3000/getLastTrip/:vehicleNumber
	fetch('http://localhost:3000/getTripsForVehicle/' + vehicleNumber, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then((data) => {
		return data.json()
	})
	.then((vehicleTrips) => {
		allTripsOfVehicle = vehicleTrips;
		
		drawChart();
		var totalFuelPrice = calculateAverageFuelPricePerTrip(allTripsOfVehicle);
		document.getElementById('totalFuelPrice').innerHTML = totalFuelPrice;
	})
}

function drawChart() {
	google.charts.load('current', {packages: ['corechart', 'bar']});
	google.charts.setOnLoadCallback(drawBarChart);
}

function calculateAverageFuelPricePerTrip(trips) {
	var averageTotalFuelPrice = 0;
	var totalPrice = 0;
	trips.forEach((trip) => {
		totalPrice += Number(trip.totalFuelPrice);
	});
	
	averageTotalFuelPrice = (totalPrice/trips.length).toFixed(2);

	return averageTotalFuelPrice;
}
