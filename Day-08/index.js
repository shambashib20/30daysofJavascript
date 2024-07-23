//Start Learning Day8

//Activity 1 
// //Task 1
// let personName = "Mat";
// let personAge = 20;
// let personNameAndAge = `Person name is ${personName} and age is ${personAge}`
// console.log(personNameAndAge);

// //Task 2
// let multiLineString = `What is full stack ?
// Frontend and backend`
// console.log(multiLineString);

// //Activity 2 Destructuring
// //Task 3
// let destructuringNumbers = [1, 2, 3, 4, 5, 6];
// let [first, second] = destructuringNumbers;
// console.log(first);
// console.log(second);

// //Task 4
// let books = {
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     year: 1998
// }
// const { title, author, year } = books
// console.log(title);
// console.log(author);
// console.log(year);

// //Activity 3 Spread and Rest Operator
// //Task 5
// let firstSemMarks = [30, 40, 50, 60, 20];
// let secondSemMarks = [90, 30, 70, 40, 80];
// let combinedMarks = [...firstSemMarks, ...secondSemMarks];
// console.log(combinedMarks);

// //Task 6
// function calculateSum (...numbers){
//     let Totalsum = numbers.reduce((total , num)=>{
//         return total + num;
//     })
//     return Totalsum;
// }

// console.log("The sum is ", calculateSum(1,2,3,4,5,6,7,8,9,10));

// //Activity 4 Default parameter
// let calculateProduct = (num1, num2 = 1) => {
//     return num1 * num2
// }
// console.log("Product of given numbers is ",calculateProduct(3,4))
// console.log("Product of given numbers is ",calculateProduct(3))


//Activity 5 Enhanced Object Literals
//Task 8
// let title= "Pride and Prejudice";
// let author= "Jane Austen";
// let year= 1998;
// let books = {
//     title,
//     author,
//     year,
//     getBookDetails(){
//         return `Book title is ${title} and author is ${author} and publish year is ${year}`
//     }
// }
// console.log(books);

//Task 9
let title = "title";
let author = "author";
let year = "year";
let book2 = {
    [title]: "Zero To Hero",
    [author]: "Mat",
    [year]: 2000
}
console.log(book2);