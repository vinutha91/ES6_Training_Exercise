let myButton = document.getElementById('clickMeButton');

// Before
myButton.addEventListener('click', function() {
    // Do Some task here
});

// ES6 After
myButton.addEventListener('click', () => {
    // Do Some task here
});

// Before
function doSomething() {
    console.log('Doing something');
}

// After
() => { console.log('Doing something') }

// A function can return stuff: string boolean number ANYTHING
function whatIsMyName() {
    return 'Ankit!';
}

// ES6 returning something
() => { return 'Ankit' };
() => 'Ankit';

// function with a parameter
function whatIsMyName(name) {
    return name;
}

// ES6 function with parameter
(name) =>  { return name; }
name => name;

// multiple parameters, spread operators, rest parameters
function myDetails(...details) {
    return details;
}

// ES6 multiple parameters, spread operators, rest parameters
(x,y) => { return x + y; };
(...details) => { return details };

// Function returning an object
function returnAnObject() {
    return {
        x: 1
    }
}

// ES6 
() => ({x: 1})



// Arrow functions are anonymous
// can be given a name
var foo = x => 3;
foo.name;

// name inferencing
