// activity 1

// Task 1
for (let i = 1; i <= 10; i++) {
    console.log(i, " ");
};


// Task 2 
let printMultiplicationTableOf = 5;

for (let i = 1; i <= 10; i++) {
    console.log(printMultiplicationTableOf, "x", i, "=", printMultiplicationTableOf * i);
};


//Activity 2 While loop
// Task 3
let sum = 0;
let count = 1
while (count <= 10) {
    sum = sum + count;
    count++;
}
console.log(sum);

//Task 4

let currentNumber = 10;

while (currentNumber > 0) {
    console.log(currentNumber);
    currentNumber--;
}


//Task 5

let initialNumber = 1;
do {
    console.log(initialNumber);
    initialNumber++;
} while (initialNumber <= 5);

//Task 6 

let factorial = 1;
let factCount = 1;

do {
    factorial = factorial * factCount;
    factCount++;
} while (factCount <= 5)

console.log(factorial);

//Activity 4 nested loop 

// *
// **
// ***
// ****
// *****

//Task 7
let printLine = "";
for (let outer = 1; outer <= 5; outer++) {
    printLine = "";
    for (let inner = 1; inner <= outer; inner++) {
        printLine += "*";
    }
    console.log(printLine);
}


//Activity 5 Loop Control Statements

//Task 8

for (let runFor = 1; runFor <= 10; runFor++) {
    if (runFor == 5) {
        continue;
    }
    console.log(runFor);
}

//Task 9 

for (let runFor = 1; runFor <= 10; runFor++) {
    if (runFor == 7) {
        break;
    }
    console.log(runFor);
}