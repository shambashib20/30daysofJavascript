//Start Learning Day9
//Activity 1 Selecting and manipulating elements
//Task 1
debugger;
let characterControl = document.getElementById("characterControl");
if (characterControl != undefined) {
    characterControl.innerText = "Hello I'm Bat Man"
}

//Task 2
let characterElement = document.getElementsByClassName("characterElement")
if (characterElement.length > 0) {
    characterElement[0].style.backgroundColor = "red";
}


//Activity 2 Creating and appending elements
//Task 3
let createDiv = document.createElement("div");
createDiv.setAttribute("id", "bookName");
createDiv.setAttribute("class", "bookNameStyle");
createDiv.append("JS Mastary");
document.body.appendChild(createDiv);

//Task4
let createLiOne = document.createElement("li");
createLiOne.append("The Communist Manifesto");
let createLiTwo = document.createElement("li");
createLiTwo.append("Orientalism");

let selectUl = document.getElementById("book-ul");
selectUl.appendChild(createLiOne);
selectUl.appendChild(createLiTwo);

//Activity 3 Removing Elements
//Task 5

let removeElement = document.getElementById("mainContainer");
if (removeElement != undefined) {
    removeElement.remove();
}

//Task 6
let removeLastChild = document.getElementById("mainContainer");
if (removeLastChild != undefined) {
    let lengthChildrens = removeLastChild.children.length;
    removeLastChild.children[lengthChildrens - 1].remove();
}

//Activity 4 Modifying attributes and classes
//Task 7
let imageControl = document.getElementById("image-control");
if (imageControl != undefined) {
    imageControl.src = "https://th.bing.com/th/id/OIP.1v5EZlnqTzCl9IQnhV6pQwHaE8?w=750&h=500&rs=1&pid=ImgDetMain";
}

//Task 8
let activityFour = document.getElementById("activity-4");
if (activityFour != undefined) {
    //add set attributes
    activityFour.setAttribute("class", "activity-4-style");

    //change attributes
    activityFour.setAttribute("class", "new-activity-4-style");
}

//Activity 5 Event Handling
//Task 9
let addEventListners = document.getElementById("change-para");
// let paraChange = () => {
//     let para = document.getElementById("paragraph");
//     if(para != undefined){
//         para.innerText="Just change loren ipsum paragraph content";
//     }
// }
addEventListners.addEventListener("click", () => {
    let para = document.getElementById("paragraph");
    if (para != undefined) {
        para.innerText = "Just change loren ipsum paragraph content";
    }
})

//Task 10
addEventListners.addEventListener("mouseover", () => {
    debugger;
    let content = document.getElementById("paragraph");
    if (content != undefined) {
        content.style.border = "1px solid black"
    }
})