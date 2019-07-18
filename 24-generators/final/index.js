function *main() {
	console.log('hello 1');
	yield;
	console.log('hello 2');
	yield 9;
	console.log('hello 3');
	return 10;
}

main();

var it = main();
it.next();
it.next();
it.next();