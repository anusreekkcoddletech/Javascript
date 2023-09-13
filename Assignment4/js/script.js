/* eslint-disable linebreak-style */

/* eslint-disable semi */

/* eslint-disable quotes */

// 1.Write a function to 

// a. Calculate the height of the end user's browser screen

function screenHeight() {
    const height = window.innerHeight
    console.log("Browser screen height: " + height)
}
screenHeight()

//   b. To console the name of the web host

function webHostName() {
    const hostName = window.location.hostname
    console.log("Web host name: " + hostName)
}
webHostName()

// c. To show a warning message if there is no https protocol used in the visited website.

function checkProtocol() {
    if (window.location.protocol !== "https:") {
        console.log("Warning: Insecure HTTP connection")
    }
}
checkProtocol()

// d. To show an alert message after 10sec while the page is refreshed.

function refreshAlert() {
    setTimeout(function() {
        alert("It has been 10 seconds since the page was refreshed.")
    }, 10000)
}
refreshAlert()
  
//2. Store your basic details in local storage of the browser every time the page loads, then console them and finally delete them after 1 minute of the page load. 

let userName = document.getElementById("name")
let email = document.getElementById("email")
let age = document.getElementById("age")
let submitbutton = document.querySelector(".submitbutton")
submitbutton.addEventListener("click", storeBasicDetails)
function storeBasicDetails(){ 
    localStorage.setItem("userName",userName.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("age",age.value)

}
console.log("username : " + localStorage.getItem("userName"))
console.log("email : " + localStorage.getItem("email"))
console.log("age : " + localStorage.getItem("age"))

function deleteDetails() {
    localStorage.removeItem("userName")
    localStorage.removeItem("email")
    localStorage.removeItem("age")
}
setTimeout(deleteDetails, 60000)

//3. Create a form and submit button, on click of the button store your basic details from the form in the cookies.

let fullname = document.getElementById("fname")
let emailaddress = document.getElementById("emailaddress")
let currentplace = document.getElementById("currentplace")

let submitbutton2 = document.querySelector(".submitbutton2")
submitbutton2.addEventListener("click", personalDetails)
function personalDetails() {
    setCookie("fullname", fullname.value, 365)
    setCookie("emailaddress", emailaddress.value, 365)
    setCookie("currentplace", currentplace.value, 365)
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    const expires = "expires=" + d.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

// 4. Redirect to the homepage of google from the console.

console.log( "https://www.google.com")


// 5.Create a div with background color red, create buttons

// a. to hide the div

const hideButton = document.getElementById("hideButton")
let redDiv = document.getElementById("redDiv")
hideButton.addEventListener("click", function(e) {
    e.preventDefault()
    redDiv.style.display = "none"
})

// b.to change the background color of the div

const colorchangebutton = document.getElementById("colorchangebutton")
redDiv = document.getElementById("redDiv")
colorchangebutton.addEventListener("click", function(e) {
    e.preventDefault()
    redDiv.style.backgroundColor = "pink"
})

// c. To show your basic details on the div, the details should hide/show, on the click.


document.getElementById("showdata").addEventListener("click", function(e) {
    e.preventDefault()
    let details = document.querySelector(".details")
    if (details.style.display === "none") {
        details.style.display = "block"
    }
    else{
        details.style.display = "none"
    }
})

// 6. Create a select box with numbers 1 to 10,  when selected 9, you should change the selection to 10 and show a message that 
// "9 is fully occupied please select another number", when selected any number other than 9 it should show a message as "you 
// selected 'particular number' " in a div, on hovering the div it should change the background color of the div into a 
// highlighting shade, while the mouse pointer leaves the message area the background color should go back to as before 
// (don't use CSS to attain the hovering functionality)

const numberSelect = document.getElementById("numberSelect")
const message = document.getElementById("message")

function checkSelection() {
    const selectedNumber = numberSelect.value
    if (selectedNumber === "9") {
        numberSelect.value = "10"
        message.innerText = "9 is fully occupied. Please select another number."
    } else {
        message.innerText = "You selected " + selectedNumber
    }
    message.style.display = "block"
}

message.onmouseenter = function () {
    message.style.backgroundColor = "yellow" 
}
message.onmouseout = function () {
    message.style.backgroundColor = "" 
}
checkSelection()

// 7.Consider an array with names of 10 programming languages, make 10 buttons by iterating this array, when clicked on each button 
// the name of the programming language should be shown in a corresponding div.

const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Swift",
    "PHP",
    "Go",
    "Rust",
    "TypeScript"
]
let buttonDiv = document.querySelector(".buttonDiv")
let text = document.querySelector(".text")
for(let i=0;i<languages.length;i++){
    let button = document.createElement("button")
    buttonDiv.append(button)
    button.innerHTML = languages[i]
    button.addEventListener("click",function(e){
        e.preventDefault()
        text.innerHTML = languages[i]
    })

}

//8. Create a form with a text field which when submitted, will change the tab title to whatever is entered, 
// limit the field to 50 characters, otherwise show an error message, and stay on the same page when submitted(it shouldn't refresh).

const titleForm = document.getElementById("titleForm")
const pageTitleInput = document.getElementById("pageTitle")
titleForm.addEventListener("submit", function(event) {
    event.preventDefault()     
    const newTitle = pageTitleInput.value.trim()
    if (newTitle.length < 50) {
        document.title = newTitle
    } else {
        alert(" The characters are more than 50 characters")
    }
})

// 9. When the control+enter key is pressed show an alert message. 

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key === "Enter") {
        alert("Control+Enter key is pressed")
    }
})

