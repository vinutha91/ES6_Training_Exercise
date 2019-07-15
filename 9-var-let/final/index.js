function foo(x, y) {
	if (x > y) {
		var w = '';
		var z = '';
	} else if ( x >= y) {
		var w = '';
		var z = '';
	}


	let z;
	try {
		z = bar(x*2);
	} catch(err) {

	}

	if (x > y) {
		let tmp = x;
		x = y;
		y = tmp

		// z accessible here
	}

	for (let i = 0; i < 10; i++) {
		//...
		// z accessible here
	}

	// var should not be banned totally
	// let is NOT accessible here
	// stylistically it was supposed to mean diff
}

