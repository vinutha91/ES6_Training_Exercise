// Swapping 2 variables
var x = 1;
var y = 2;
var temp = x;
x = y;
y = temp;

// ES6 - Swapping 2 variables
var x = 1;
var y = 2;
[x,y] = [y,x];

// creating a composite array
var a = [1, 2, 3];
[ x, y, ...a ] = [0, ...a, 4];  // x & y??
[ , , ...a ] = [0, ...a, 4];  // a??


