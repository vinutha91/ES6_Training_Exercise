var a = 2;

// before
var obj = {
	a: a
}

// after - concise properties
var obj = {
	a
}

// before
var obj = {
	b: function() {

	}
}

// after - concise methods
var obj = {
	b() {
		
	}
	// assumption: b: function b() {}
	// actual: anonymous function
}

// recursive call can be done
var obj = {
	b: function b() {
		b();
	}
}

// recursive call cannot be done
var obj = {
	b() {
		//b();
	}
}

// computed property names
var c = 'name';
var myDetails = {
	age: 29,
	occupation: 'IT'
};

myDetails[c] = 'Ankit';

// after
var myDetails = {
	age: 29,
	occupation: 'IT',
	[c]: 'Ankit'
};

// after
var myDetails = {
	age: 29,
	occupation: 'IT',
	[c]: 'Ankit',
	[c+'fn']() {}
};
