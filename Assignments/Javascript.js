// 1. Declare variables and assign appropriate values
const myName = "Bhavani";
const myAge = 20;
const myCity = "Visakhapatnam";
const isStudent = true;
const nullValue = null;
const undefinedValue = undefined;

// 2. Create a variable `pi` and assign it the value of pi
const pi = 3.14159;

// 3. Create a variable `greeting` and assign it a string
const greeting = "Hello, world!";

// 4. Create a variable `isSunny` and assign it a boolean value
const isSunny = true;

// 5. Create a variable `favoriteNumber` and assign it your favorite number
const favoriteNumber = 7;

// Print the data type of each variable
console.log("Data type of myName:", typeof myName);
console.log("Data type of myAge:", typeof myAge);
console.log("Data type of myCity:", typeof myCity);
console.log("Data type of isStudent:", typeof isStudent);
console.log("Data type of nullValue:", typeof nullValue);
console.log("Data type of undefinedValue:", typeof undefinedValue);
console.log("Data type of pi:", typeof pi);
console.log("Data type of greeting:", typeof greeting);
console.log("Data type of isSunny:", typeof isSunny);
console.log("Data type of favoriteNumber:", typeof favoriteNumber);

// Create a variable `mixedValue` and assign it a value
const mixedValue = { name: "Lavanya", age: 20, isStudent: true };

// Print the data type of `mixedValue`
console.log("Data type of mixedValue:", typeof mixedValue);

// Arithmetic operators
const num1 = 10;
const num2 = 5;

console.log("Addition:", num1 + num2);

console.log("Subtraction:", num1 - num2);

console.log("Multiplication:",  num1 * num2);

console.log("Division:", num1 / num2);

console.log("Modulus:", num1 % num2);

console.log("Exponentiation:",  num1 ** num2);

// Comparison operators
const age = 25;
const isStud = true;

const isEqual = age == 30;
console.log("Equal to:", isEqual);

const isNotEqual = age != 30;
console.log("Not equal to:", isNotEqual);

const isGreaterThan = age > 30;
console.log("Greater than:", isGreaterThan);

const isLessThan = age < 30;
console.log("Less than:", isLessThan);

const isGreaterThanOrEqual = age >= 25;
console.log("Greater than or equal to:", isGreaterThanOrEqual);

const isLessThanOrEqual = age <= 25;
console.log("Less than or equal to:", isLessThanOrEqual);

// Logical operators
const x = false;
const y = true;
console.log("AND:", x && y);
console.log("OR:", x || y);
console.log("NOT:", !x);

// Ternary operator
const message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log("Ternary operator:", message);

const tempFahrenheit = 86;
const tempCelsius = ((tempFahrenheit - 32) * 5) / 9;
console.log("Temperature in Celsius:", tempCelsius);

const age1 = 25;
if (age1 < 18) {
  console.log("You are a minor.");
} else if (age1 < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}
