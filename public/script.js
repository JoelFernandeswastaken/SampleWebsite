
const userAge = document.getElementById("age");

// funciton to validate and check if user has entered a valid name
function validateName(x){
    var pattern = /(^[a-zA-Z]+$)+/;
    var text = x.value;
    validate(pattern, text, x, "Invalid name");

    if(text.match(pattern)){
        console.log("success");
    }
    else{
        console.log("fail");
    }
}

// function to calcualte users age and display calculated value
function calcAge(x){
    let a = new Date();
    let currYear = a.getFullYear();
    let birthYear = x.value.slice(0, 4);
    let age = currYear - birthYear;
    console.log(`age: ${age}`);
    userAge.value = age;
}

// funciton to validate and check if user has entered a valid email address
function validateEmail(x){
    var pattern = /^[a-zA-Z.]+[0-9]*[@][a-zA-Z]{2,}[.][a-zA-Z]{2,3}$/;
    var text = x.value;
    validate(pattern, text, x, "Invalid email");
}

// funciton to validate and check if user has entered a phone number
function validatePhone(x){
    var pattern = /^[0-9]{10}$/;
    var text = x.value;
    validate(pattern, text, x, "Invalid no.");
}

// function that takes as parameters the text, pattern to be matched, input element and error message to be displayed
function validate(pattern, text, element, errorMessage){
    if(text.match(pattern)){
        element.parentElement.lastElementChild.innerHTML = "";
    }
    else{
        element.parentElement.lastElementChild.innerHTML = errorMessage;
    }
    errorMessage = "";
}

// funciton to populate options for city, based on state selected
function selectOptions(x){
    let selected = x.value;
    let options = document.getElementById("city");
    if (selected === "Goa"){
        options.innerHTML = "<option value='city-1'>goa-city-1</option><option value='city-2'>goa-city-2</option><option value='city-3'>goa-city-3</option><option value='city-4'>goa-city-4</option><option value='city-5'>goa-city-5</option>";
    }
    else if (selected === "Kerala"){
        options.innerHTML = "<option value='city-1'>kerala-city-1</option><option value='city-2'>kerala-city-2</option><option value='city-3'>kerala-city-3</option><option value='city-4'>kerala-city-4</option><option value='city-5'>kerala-city-5</option>kerala";
    }
    else if (selected === "Tamil Nadu"){
        options.innerHTML = "<option value='city-1'>tamil-nadu-city-1</option><option value='city-2'>tamil-nadu-city-2</option><option value='city-3'>tamil-nadu-city-3</option><option value='city-4'>tamil-nadu-city-4</option><option value='city-5'>tamil-nadu-city-5</option>";
    }
    else{
        options.innerHTML = ""
    }
}

// funciton to check if all fields of form are filled
function allFieldsFilled(id){
    let inputs = document.getElementById(id).getElementsByTagName("input");
    let filled = true;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            filled = false;
            break;
        }
    }
    if (filled) {
        document.getElementById(id).submit();
    } else {
        alert("Please fill all form fields.");
    }
}

// funciton to validate and check if pasword and confirm password match
function checkPass(x){
    let pass1 = document.getElementById("password").value;
    console.log(`pass1:${pass1}`);
    let conf = x.value;
    console.log(`conf:${conf}`);
    if(pass1 === conf){
        x.parentElement.lastElementChild.innerHTML = "";
    }
    else{
        x.parentElement.lastElementChild.innerHTML = "Passwords don't match.";
    }
}

// funciton to validate and check if user has entered a secure password
function validatePassword(x){
    let error = "Password 8 characters long. Must contain: Uppercase, Lowercase, Number, Special character";
    let pass1 = document.getElementById("password").value;
    let pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{}|;:'",.<>?/]).{8,}$/;
    validate(pattern, pass1, x, "Password 8 characters long. Must contain: Uppercase, Lowercase, Number, Special character");
}