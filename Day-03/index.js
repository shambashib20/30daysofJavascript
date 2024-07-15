// Solution to Activity 1 Task 1

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


// Solution to Activity 1 Task 2
function checkEligibleToVoteOrNot(age) {
    
    let isMinor = age < 18;
    let isEligible =!isMinor;
    return isEligible;
}

console.log(checkEligibleToVoteOrNot(6));


// Solution to Activity 2 Task 1

function largestOfThreeNumbers(a, b, c) {
    let largest;

    if (a >= b) {
        if (a >= c) {
            largest = a;
        } else {
            largest = c;
        }
    } else {
        if (b >= c) {
            largest = b;
        } else {
            largest = c;
        }
    }

    return largest;
}

// Example usage
console.log(largestOfThreeNumbers(5, 10, 7));  
console.log(largestOfThreeNumbers(12, 3, 9));  
console.log(largestOfThreeNumbers(4, 4, 4));  



// Solution to Activity 3 task 1
function determineDayOfTheWeeek(number) {
    let day;

    switch (number) {
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        case 7:
            day = 'Sunday';
            break;
        default:
            day = 'Invalid input';
    }

    return day;
    
}

console.log(determineDayOfTheWeeek(5));


// Solution to Activity 3 task 2

function assignGradeAccordingToScore(number){
    let grade;

    switch (number) {
        case 100:
            grade = 'A';
            break;
        case 90:
            grade = 'B';
            break;
        case 80:
            grade = 'C';
            break;
        case 70:
            grade = 'D';
            break;
        case 60: 
           grade = 'E';
            break;
        default:
            grade = 'F';
    }

    return grade;
}

console.log(assignGradeAccordingToScore(90));

//Activity 4 Conditional (Ternary) Operator

let evenOddNum = 2;
evenOddNum % 2 == 0 ? console.log("The number is even") : console.log("The number is odd");



//Activity 5 Combining conditions
//leap year 

let userYear = 2000;
if (userYear % 4 == 0) {
    if (userYear % 100 == 0) {
        if (userYear % 400 == 0) {
            console.log("This is a leap Year");
        } else {
            console.log("This is not a leap Year");
        }
    } else {
        console.log("This is a leap Year");
    }
} else {
    console.log("This is not a leap Year");
}