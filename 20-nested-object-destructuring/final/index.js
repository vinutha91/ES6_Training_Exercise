// before
function foo() {
	return {
		a:1,
		b:2,
		c:3
	};
}

// ES6 version
// nested object de-structuring
// what if d didnt exist
var {
	a:a,
	b:b,
	c:c,
	d: {
		e
	} = {}
} = foo();
