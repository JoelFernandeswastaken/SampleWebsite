const userAge = document.getElementById("age");
// const inputField = document.getElementById("fname");
// inputField.parentElement.lastElementChild.innerHTML = "hiuhuihui";

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

function calcAge(x){
    let a = new Date();
    let currYear = a.getFullYear();
    let birthYear = x.value.slice(0, 4);
    let age = currYear - birthYear;
    console.log(`age: ${age}`);
    userAge.value = age;

    // console.log(x.value.slice(0, 4));
}

function validateEmail(x){
    var pattern = /^[a-zA-Z.]+[0-9]*[@][a-zA-Z]{2,}[.][a-zA-Z]{2,3}$/;
    var text = x.value;
    validate(pattern, text, x, "Invalid email");
}

function validatePhone(x){
    var pattern = /^[0-9]{10}$/;
    var text = x.value;
    validate(pattern, text, x, "Invalid no.");
}

function validate(pattern, text, element, errorMessage){
    if(text.match(pattern)){
        element.parentElement.lastElementChild.innerHTML = "";
    }
    else{
        element.parentElement.lastElementChild.innerHTML = errorMessage;
    }
    errorMessage = "";
}