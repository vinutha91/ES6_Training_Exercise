// before - default value
function foo() {
	return [1, 2, 3];
}

var tmp = foo();
var a = tmp[0];
var b = tmp[1] !== undefined ? tmp[1] : 29;
var c = tmp[2];

// ES6 - current way - default value
var [
	a,
	b = 29,
	c
] = foo();

// what if? - Null returned and safety net
function foo() {
	return null;
}

var [
	a,
	b = 29,
	c
] = foo() || [];


// what if? - More than pattern
function foo() {
	return [1, 2, 3, 4, 5, 6];
}

var [
	a,
	b = 29,
	c,
	...rest
] = foo() || [];

// what if? - Same as pattern but with rest param
function foo() {
	return [1, 2, 3];
}

var [
	a,
	b = 29,
	c,
	...rest
] = foo() || [];

// declarative shorthand
var a,b,c,rest;
[
	a,
	b = 29,
	c,
	...rest
] = foo() || [];

// assign as property of an object
// array destructure into a set of object properties
var o = {};
[
	o.a,
	o.b = 29,
	o.c,
	...o.rest
] = foo() || [];