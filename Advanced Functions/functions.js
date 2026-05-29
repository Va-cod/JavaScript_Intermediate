// Prints a greeting message using the received name
function greet(name) {
    console.log(`Hello, ${name}`);
}

// Stores a name in a variable
let name = "Lewis";

// Executes the greet function
greet(name);

// Function expression stored in a constant
const driver = function(name) {
    console.log(`Hello, ${name}`);
};

// Calls the function with a string argument
driver("Valtteri");
driver("Bortoletto");

// Anonymous function stored in a variable
const driver1 = function(name) {
    console.log(`Hello, ${name}`);
};

// Executes the anonymous function
driver1("Oscar");

// Higher-order function:
// receives a function and executes it with a parameter
function processDriver(functionDriver, nameDriver) {
    return functionDriver(nameDriver);
}

// Passes a function as an argument
processDriver(driver, "Checo");

// Returns the greet function
function returnDriver() {
    return greet;
}

// Displays the function reference
console.log(returnDriver);

// Executes greet through another function
processDriver(greet, "George");

// Stores the returned function in a variable
const greet2 = returnDriver();

// Executes the stored function
greet2("Lando");