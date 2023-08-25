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