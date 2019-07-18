// function parameters destructuring
function foo([a,b,c] = []) {
	console.log(a, b, c);
}

foo(1, 2, 3);
foo([1, 2, 3]);