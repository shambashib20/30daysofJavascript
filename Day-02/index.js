// Solution to Activity 1 Arithmetic Operations

// Task 1

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(3, 5)); 

// Task 2

function subtractNumbers(a, b) {
  return a - b;
}

console.log(subtractNumbers(7, 2));

// Task 3

function multiplyNumbers(a, b) {
  return a * b;
}

console.log(multiplyNumbers(4, 9));

// Task 4
function divideNumbers(a,b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

console.log(divideNumbers(12, 6));


// Task 5

function calculateRemainder(a, b) {
    return a % b;
}

console.log(calculateRemainder(12, 3));



// Solution to Activity 2 Assignment Operators

// Task 6
function addUsingAssignmentOperator(a,b) {
    a += b;
    return a;
}

console.log(addUsingAssignmentOperator(3, 5));

// Task 7

function subtractUsingAssignmentOperator(a, b) {
    a -= b;
    return a;
}
console.log('task 7', subtractUsingAssignmentOperator(5, 3));
// Solution to Activity 3 Comparison Operators

// Task 8

function compareNumbers(a, b) {
    if (a > b) {
        return 'a is greater than b';
    } else if (a < b) {
        return 'a is less than b';
    } else {
        return 'a is equal to b';
    }
}
console.log(compareNumbers(6,3));

// Task 9

function compareNumbersUsingComaprison(a, b) {
    if (a >= b) {
        return 'a is greater than or equal to that of b';
    } else if (a <= b) {
        return 'a is smaller than or equal to that of b';
    }
}

console.log(compareNumbersUsingComaprison(2,3));


// Task 10

function checkIfEqual(a, b) {
    return a === b;
}

console.log(checkIfEqual(5, 5));

// Task 11

function checkIfReallyEqualsOrNot(a, b) {
    return a == b;
}

console.log(checkIfReallyEqualsOrNot(5, '5'));


// Solution to Activity 4 Logical Operators

// Task 12

function checkAnd(a, b) {
    return a && b;
}

console.log(checkAnd(true, true));

// Task 13

function checkOr(a, b) {
    return a || b;
}

console.log(checkOr(false, true));

// Task 14

function checkNot(a) {
    return!a;
}

console.log(checkNot(false));

// Task 15


function checkPositiveOrNegative(number) {
    if (number > 0) {
        return 'Positive';
    } else if (number < 0) {
        return 'Negative';
    } else {
        return 'Zero';
    }
}

console.log(checkPositiveOrNegative(10));  
console.log(checkPositiveOrNegative(-5));  
console.log(checkPositiveOrNegative(0));   

