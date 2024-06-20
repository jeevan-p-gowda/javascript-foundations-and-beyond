let firstNumber = 5;
let secondNumber = 10;
// let result = firstNumber + secondNumber;

console.log(firstNumber, secondNumber, result);

function addNumbers(number1, number2) {
    var result = number1 + number2;
    return result;
}

var sum = addNumbers(5, 10);

console.log(sum);

function subtractNumbers(number1, number2) {
    var result = number1 - number2;
    return result;
}

var difference = subtractNumbers(15, 5);

console.log(difference);

function multiplyNumbers(number1, number2) {
    var result = number1 * number2;
    return result;
}

var product = multiplyNumbers(5, 3);

console.log(product);

function divideNumbers(number1, number2) {
    if (number2 === 0) {
        console.log("Error: Division by zero is not allowed.");
        return;
    }
    return number1 / number2;
}

var quotient = divideNumbers(12, 4);

console.log(quotient);

var userChoice = "addition";

switch (userChoice) {
    case "addition":
        var result = addNumbers(5, 3);
        break;
    case "subtraction":
        var result = subtractNumbers(5, 3);
        break;
    case "multiplication":
        var result = multiplyNumbers(5, 3);
        break;
    case "division":
        var result = divideNumbers(12, 4);
        break;
}

console.log(result);

const readlineSync = require('readline-sync');

function getOperation() {
    var operation = readlineSync.question("Enter the operation (addition, subtraction, multiplication, division):");
    return operation;
}

function getNumbers() {
    let numbersArray;
    let validInput = false;

    while (!validInput) {
        try {
            const numbersString = readlineSync.question("Enter the numbers separated by commas (e.g., 5,2):");
            numbersArray = numbersString.split(",").map(Number);
            if (numbersArray.length === 2 && numbersArray.every(Number.isFinite)) {
                validInput = true;
            } else {
                throw new Error();
            }
        } catch (error) {
            console.log("Invalid input. Please enter two numbers separated by a comma.");
        }
    }

    return numbersArray;
}

function validateInput(operation) {
    // Create the validOperations array
    var validOperations = ["addition", "subtraction", "multiplication", "division"];

    // Use an if statement to check if the operation argument is valid and return true or false
    if (validOperations.includes(operation)) {
        return true;
    } else {
        return false;
    }
}

// Call the validateInput function with a valid operation and print the result to the console
console.log(validateInput("addition")); // true

// Call the validateInput function with an invalid operation and print the result to the console
console.log(validateInput("invalidOperation")); // false

function calculate() {
    const operation = getOperation();
    const numbers = getNumbers();
    // Call the validateInput function with the operation argument

    // Use an if statement to check the result of the validateInput function
    if (validateInput(operation)) {
        let result;
        // Use a switch statement to perform the corresponding operation
        switch (operation) {
            case "addition":
                result = addNumbers(numbers[0], numbers[1]);
                break;
            case "subtraction":
                result = subtractNumbers(numbers[0], numbers[1]);
                break;
            case "multiplication":
                result = multiplyNumbers(numbers[0], numbers[1]);
                break;
            case "division":
                result = divideNumbers(numbers[0], numbers[1]);
                break;
        }
        // Print the result to the console in a user-friendly way
        console.log("The result of the " + operation + " is " + result + ".");
    } else {
        // Print an error message to the console
        console.log("Invalid operation!");
    }
}

// Call the calculate function with a valid operation and numbers, and print the result to the console
calculate("addition", [5, 2]); // The result of the addition is 7.

// Call the calculate function with an invalid operation and numbers, and observe the error message
calculate("invalidOperation", [5, 2]); // Invalid operation!

function main() {
    let continueCalculating = true;

    while (continueCalculating) {
        // Call the calculate function with a valid operation and numbers, and print the result to the console
        // var operation = "addition"; // You can replace this with other operations or user input
        // var numbers = [5, 2]; // You can replace this with other numbers or user input

        calculate();

        // Ask the user if they want to perform another calculation
        const userResponse = readlineSync.question("Do you want to perform another calculation? (yes/no) ");

        continueCalculating = userResponse.toLowerCase() === "yes";
    }

    console.log("Thank you for using our calculator!");
}

main();
