// before
function foo(x) {
	x = x || 42;
}

foo(0); //  What will x be?

// before imperative
function foo(x) {
	x = x !== undefined ? x : 42;
}

foo(42); // What will x be?

// after
function foo(x = 42) {
	console.log(x);
}

foo(undefined);
foo(23);
foo(0);
foo(null);

foo.apply(null, []);
foo.apply(null, [,]);

