var allRegisteredVehicles = [];
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
		if (vehicleTrips.length !== 0) {
			var previousKmReading = vehicleTrips[vehicleTrips.length - 1].kms;
			document.getElementById('previousKmReading').innerHTML = previousKmReading;
		} else {
			var vehicleDetail = allRegisteredVehicles.filter((vehicle) => {
				return vehicle.number === vehicleNumber;
			});

			var previousKmReading = vehicleDetail[0].kms;
			document.getElementById('previousKmReading').innerHTML = previousKmReading;
		}

		renderTripsTable(vehicleTrips);
	})
}

function renderTripsTable(trips) {
	if (trips.length === 0) {
		document.getElementById('vehicleTrips').innerHTML = '';
		document.getElementById('errorMessasge').innerHTML = 'No Trips Found!!!';
		return;
	} else {
		document.getElementById('errorMessasge').innerHTML = '';
	}

	var registeredVehicle = allRegisteredVehicles.filter((vehicle) => {
		return vehicle.number === trips[0].number;
	});
	
	var tripsTableHeading = `
	<tr>
		<th>Sr No.</th>
		<th>Trip Date</th>
		<th>KMs Reading</th>
		<th>KMs in Trip</th>
		<th>Average</th>
		<th>Rs/Km</th>
	</tr>
	`;

	document.getElementById('vehicleTrips').innerHTML = tripsTableHeading;

	trips.forEach((trip, index, trips) => {
		var previousKmReading = 0;
		var currentKmReading = 0;
		if (index === 0) {
			previousKmReading = registeredVehicle[0].kms;
			currentKmReading = trip.kms;
		} else {
			previousKmReading = trips[index - 1].kms;
			currentKmReading = trip.kms;
		}

		var currentDate = new Date(trip.date);
		var date = currentDate.getDate() + '/' +parseInt(currentDate.getMonth()+1)+'/'+currentDate.getFullYear();
		var tripHtml = `
		<tr>
			<td>${index}</td>
			<td>${date}</td>
			<td>${trip.kms}</td>
			<td>${calculateKmsInTrip(currentKmReading, previousKmReading)}</td>
			<td>${calculateAverage(
				calculateKmsInTrip(currentKmReading, previousKmReading),
				trip.totalFuelPrice,
				trip.pricePerLtr
			)}</td>
			<td>
				${calculateRsPerKm(
					calculateKmsInTrip(currentKmReading, previousKmReading),
					trip.totalFuelPrice
				)}
			</td>
		</tr>
		`;
		
		document.getElementById('vehicleTrips').innerHTML += tripHtml;
	});
}

function calculateKmsInTrip(currentKmReading, previousKmReading) {
	return (Number(currentKmReading) - Number(previousKmReading)).toFixed(2);
}

function calculateAverage(kmsInTrip, totalFuelPrice, pricePerLtr) {
	return (Number(kmsInTrip)/(Number(totalFuelPrice)/Number(pricePerLtr))).toFixed(2);
}

function calculateRsPerKm(kmsInTrip, totalFuelPrice) {
	return (Number(totalFuelPrice)/Number(kmsInTrip)).toFixed(2);
}