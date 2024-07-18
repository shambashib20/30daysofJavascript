// Activity 1 Task 1
const arrayOfFiveNumbers = [1, 2, 3, 4, 5];
console.log(arrayOfFiveNumbers);


// Activity 1 Task 2
const array = [1, 2, 3, 4, 5];
const firstElement = array[0];
const lastElement = array[array.length - 1];
console.log("First element:", firstElement);
console.log("Last element:", lastElement);

// Activity 2 Task 3
const array2 = [1, 2, 3, 4, 5]
array2.push(6);

console.log(array2);

// Atcivity 2 Task 4
const array3 = [1, 2, 3, 4, 5];
const lastElementOfArray3 = array3[array3.length - 1];

array3.pop(lastElementOfArray3)
console.log(array3);

// Activity 2 Task 5
const array4 = [1, 2, 3, 4, 5];

array4.shift();
console.log(array4);


// Activity 2 Task 6
const array5 = [2, 3, 4, 5];

array5.unshift(1);
console.log(array5);

// Activity 3 Task 7
const array6 = [1, 2, 3, 4, 5];

const arrayContainingDoubles = array6.map(number => number * 2);

console.log(arrayContainingDoubles);

// Activity 3 Task 8

const array7 = [1, 2, 3, 4, 5];

const evenElementsArray = array7.filter(number => number % 2 === 0);

console.log(evenElementsArray);

// Activity 3 Task 9
const array8 = [1, 2, 3, 4, 5];

const sumOfArray = array8.reduce((a, b) => a + b, 0);

console.log("Sum of array elements:", sumOfArray);



