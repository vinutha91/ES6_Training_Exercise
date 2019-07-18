// nested arrays
function foo() {
	return [1, 2, 3, [4,5,6] ]
}
// what is args?
var [a,b,c,...args] = foo();
var [a,b,c,d,,e] = foo();