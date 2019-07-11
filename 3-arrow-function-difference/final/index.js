// this context DOES NOT work
let user = { 
    name: "GFG", 
    gfg1:() => { 
        console.log("hello " + name); // no 'this' binding here
    }, 
    gfg2(){        
        console.log("Welcome to " + this.name); // 'this' binding works here
    }   
 }; 
user.gfg1(); 
user.gfg2();

// Availability of arguments variable
function myFunctionWithArguments() {
    console.log(arguments);
}
myFunctionWithArguments(1,2,3);

// ES6 Arrow functions, Unavailability of arguments
var myArrowFunctionWithArguments = () => {
	console.log(arguments);
}
myArrowFunctionWithArguments(1,2,3)

// Can use function as a class
let x = function(){ 
    console.log(arguments); 
}; 
new x =(1,2,3); 

// ES6 Cannot use function as a class
let x = ()=> { 
    console.log(arguments); 
}; 
new x(1,2,3); 