// Activity 1 Task 1

function evenOrOdd(number) {
    if (number % 2 == 0) {
        return "Even Number";
    } else if (number % 2 == 1) {
        return "Odd Number";
    }
    return "Invalid Input. Please enter a number.";
};

console.log(evenOrOdd(1));


// Activity 1 Task 2
function squareOfNumbers(number) {
    if (number < 0) {
        return "Invalid Input. Please enter a non-negative number.";
    }
    return number * number;
};

console.log(squareOfNumbers(5));

// Acvtivity 2 Task 3
function maximumOfTwoNumbers(number1, number2) {
    if (number1 < 0 || number2 < 0) {
        return "Invalid Input. Please enter non-negative numbers.";
    }
    return Math.max(number1, number2);
}

console.log(maximumOfTwoNumbers(5, 10));


// Activity 2 Task 4

function concatenateTwoStrings(string1, string2) {
    return (string1 + " " + string2);
};

console.log(concatenateTwoStrings("Hello", "World"));


// Activity 3 Task 5

const sumOfTwoNumbersUsingArrowFunction = (num1, num2) => {
    if (num1 < 0 || num2 < 0) {
        return "Invalid Input. Please enter non-negative numbers.";
    }
    return num1 + num2;
}

console.log(sumOfTwoNumbersUsingArrowFunction(5, 10));


// Activity 3 Task 6

const containsSpecificCharacter = (str, char) => {
    return str.includes(char);
}

console.log(containsSpecificCharacter("Hello World", "o"));
console.log(containsSpecificCharacter("world", "a")); // false
console.log(containsSpecificCharacter("JavaScript", "S")); // true
console.log(containsSpecificCharacter("function", "z")); // false



// Activity 4 Task 7
const productOfTwoParams = (num1, num2 = 1) => {
    return num1 * num2;
};

console.log(productOfTwoParams(5, 2)); // 10

console.log(productOfTwoParams(5)); // 5


// Activity 4 task 8
const acceptPersonNameAndGreetThem = (name, age = 18) => {
    if (typeof name !== 'string' || name.trim() === '') {
        return "Invalid input. Please enter a non-empty string for name.";
    }
    if (typeof age !== 'number' || age < 0) {
        return "Invalid input. Please enter a non-negative number for age.";
    }
    return `Hello, ${name}! You are ${age} years old.`;
};

console.log(acceptPersonNameAndGreetThem("John Doe")); // Hello, John Doe! You are 18 years old.
console.log(acceptPersonNameAndGreetThem("John Doe", 25));// Hello, John Doe! You are 25 years old.


// Activity 5 task 9
const higherOrderFunction = (times, func) => {
    for (let i = 0; i < times; i++) {
        func();
    }
};


const greetings = () => {
    console.log("Hello!");
};

higherOrderFunction(5, greetings);                   // Hello printed 5 times in console.

// Activity 5 task 10

const applyFunctions = (func1, func2, value) => {
    const intermediateResult = func1(value);
    return func2(intermediateResult);
};


const addTwo = (num) => num + 2;
const multiplyByThree = (num) => num * 3;

const result = applyFunctions(addTwo, multiplyByThree, 5);
console.log(result); 






