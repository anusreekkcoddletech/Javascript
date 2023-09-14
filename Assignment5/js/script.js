/* eslint-disable linebreak-style */

/* eslint-disable semi */

/* eslint-disable quotes */

// 1.Make a form with fields name, phone number, place, company name, pin code
// a. if any of the fields are empty on submitting it 

let detailsForm = document.getElementById("detailsForm")
detailsForm.addEventListener("submit",(e) => {
    e.preventDefault()
    let name = document.getElementById("name")
    let phone = document.getElementById("phone")
    let company = document.getElementById("company")
    let place = document.getElementById("place")
    let pin = document.getElementById("pin")
    if (name.value === "")
    {
        document.getElementById("nameError").innerHTML = "Name is required"
        e.preventDefault();
    } 
    else {
        document.getElementById("nameError").innerHTML = ""
    }
    if (phone.value === "" ) {
        document.getElementById("phoneerror").innerHTML = "Phone is required"
        e.preventDefault();
    }
    // b. pin code and mobile number fields should not be submitted with non-integer values, 
    // if so, then show an error msg stating only numbers are allowed.

    else if (Number(phone.value) < 0)
    {
        document.getElementById("phoneerror").innerHTML = "Enter a valid number"
        e.preventDefault()
    }
    // c. The minimum length of the phone number should be 10, otherwise, show the corresponding
    //  error msg below the mobile no. field. 

    if (phone.value.length < 10)
    {
        document.getElementById("phoneerror").innerHTML = "Phone number must be at least 10 digits"
        e.preventDefault()
    }
    else{
        document.getElementById("phoneerror").innerHTML = ""
    }
    if (place.value === "") 
    {
        document.getElementById("placeError").innerHTML = "Place is required"
        e.preventDefault()
    } else 
    {
        document.getElementById("placeError").innerHTML = ""
    }
    if (company.value === "") {
        document.getElementById("companyError").innerHTML = "company is required"
        e.preventDefault()
    } else 
    {
        document.getElementById("companyError").innerHTML = ""
    }
    if (pin.value === "") 
    {
        document.getElementById("pinError").innerHTML = "Pin is required"
        e.preventDefault()
    } 
    else {
        document.getElementById("pinError").innerHTML = ""
    }
    
    // d. On submission of the form, store the details in the local storage and clear the form. (it should stay on the same page 
    // don't refresh the page).
    const nameError = document.getElementById("nameError")
    const phoneerror = document.getElementById("phoneerror")
    const placeError = document.getElementById("placeError")
    const companyError = document.getElementById("companyError")
    const pinError = document.getElementById("pinError")
    if (nameError == "" && phoneerror=== "" && placeError=== "" &&  companyError=== "" && pinError=== "")
    {
        localStorage.setItem("phone", phone.value)
        localStorage.setItem("name", name.value)
        localStorage.setItem("company", company.value)
        localStorage.setItem("place", place.value)
        localStorage.setItem("pin", pin.value)
    }
    name.value = ""
    phone.value = ""
    company.value = ""
    place.value = ""
    pin.value = ""
})

// e .Make a prepopulate button, which when clicked will populate the form with values in the local storage if it exists, otherwise, 
// the button will be disabled.

let showDetail = document.querySelector("#showDetails")
showDetail.addEventListener("click", showDetails)
function showDetails(){

    let uname =localStorage.getItem("name")
    let phone =localStorage.getItem("phone")
    let company =localStorage.getItem("company")
    let place =localStorage.getItem("place")
    let pin =localStorage.getItem("pin")
    
    if(uname || phone || company || place || pin){
        document.getElementById("name").value = uname
        document.getElementById("phone").value = phone
        document.getElementById("company").value = company
        document.getElementById("place").value = place
        document.getElementById("pin").value = pin
    }
    else{
        showDetails.disabled = true
    }
}

// 2. Create a button and div using JS, when clicked on the button your basic details should be shown in the div. The static HTML file should only contain the basic HTML structure, no div/buttons.
// Get references to the button and div


const displayButton = document.createElement("button")
displayButton.textContent = "Show Data"
const displaydiv = document.createElement("div")

displayButton.addEventListener("click", () => {
    const personname = document.createElement("name")
    personname.textContent = "Name: Anu"
    const personage = document.createElement("age")
    personage.textContent = "Age: 13"

    const location = document.createElement("place")
    location.textContent = "Location: calicut"

    displaydiv.innerHTML = ""
    displaydiv.appendChild(personname)
    displaydiv.appendChild(document.createElement("br"))
    displaydiv.appendChild(personage)
    displaydiv.appendChild(document.createElement("br"))
    displaydiv.appendChild(location)
})
document.body.appendChild(displayButton)
document.body.appendChild(displaydiv)

// 3.Create a private variable and console it by accessing it.

let i = Symbol();
let obj = {
    [i]: " i is a private variable "
};
console.log(obj[i])

// 4. Create a static variable and console it by accessing it.

class staticvariable {
    static staticvar = "This is a static variable"
    static staticmethod(){
        return this.staticvar
    }
}
console.log(staticvariable.staticmethod())