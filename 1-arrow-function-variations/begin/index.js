var myButton = document.getElementById('clickMeButton');

// ES5 way (old way)
// myButton.addEventListener('click', function(event) {
//     alert('Button clicked');
// });

// ES6 way (new way) Arrow functions
myButton.addEventListener('click', event => alert('Button clicked'));

(x) = { alert(x) };
x = { alert(x) };
x = alert(x);

// Arrow function with return keyword
(x) => {
    return x*2;
}

// Arrow function without return keyword
x => x*2;

(x, y) => x + y;

(x, y) => {
    x = x*2;
    y = y*2;

    return x + y;
}

(x) => {
    return x;
}
