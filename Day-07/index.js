//Start Learning Day7

// Activity 1 Object creation and access
// Task 1

let book = {
    title: "JS Mastery",
    author: "Mat",
    year: "2020",
    getDetails:function (year){
        this.year=year;
        return "title is "+ this.title + " and author is "+this.author +" and year is "+this.year;
    },
    getDetails:function (){
        return "title is "+ this.title + " and author is "+this.author;
    }
}
console.log(book);

//Task 2
console.log("Title is",book.title);
console.log("Author is",book.author);

//Activity 2 Object Methods
//Task 3
console.log(book.getDetails());

//Task 4
console.log(book.getDetails("2024"));

// Activity 3 Nested Objects
// Task 5
let library = {
    name: "NYC library",
    book: [{
        title: "JS Mastery",
        author: "Mat",
        year: "2020",

    }, {
        title: "React Mastery",
        author: "Tom",
        year: "2022",

    }]
}

console.log(library);

//Task 6
console.log(library.name);
console.log(library.book[0].title);
console.log(library.book[1].title);

// Activity 4 this keyword
// Task 7

let book = {
    title: "JS Mastery",
    author: "Mat",
    year: "2020",
    getDetails:function (){

        return "title is "+ this.title + " and year is "+this.year;
    },
    getDetails:function (){
        return "title is "+ this.title + " and author is "+this.author;
    }
}
console.log(book.getDetails());

//Activity 5 Object Iteration
//Task 8
let book = {
    title: "JS Mastery",
    author: "Mat",
    year: "2020",
};
for (let keys in book) {
    console.log(book[keys]);
}

//Task 9
console.log("Keys => "+Object.keys(book) + " Values => "+Object.values(book));