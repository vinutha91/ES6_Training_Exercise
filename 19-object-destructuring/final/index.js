// before
function foo() {
	return {
		a:1,
		b:2,
		c:3
	};
}

var tmp = foo();
var a = tmp.a;
var b = tmp.b;
var c = tmp.c;

// ES6 version
// 'a' property targeted to 'a' assignment location
var {
	a:a,
	b:b,
	c:c
} = foo();

// when target and our source (key and value) have same name
// no need to use ':'
var {
	a,
	b,
	c
} = foo();

// these an also have default values
var {
	a = 10,
	b: b = 29,
	c
} = foo();

// Put a guard
var {
	a = 10,
	b: b = 29,
	c
} = foo() || {};

// Property can be dumped from pattern
var {
	a = 10,
	b: b = 29
} = foo() || {};

// We get undefined for property in pattern which does not exist
var {
	a = 10,
	b: b = 29,
	c,
	d
} = foo() || {};
