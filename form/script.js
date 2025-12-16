function mouseIn(id){
    const inputNum = document.getElementById(id);
    inputNum.style.backgroundColor ="lightblue";
}
function mouseLeave(id){
    const inputNum = document.getElementById(id);
    inputNum.style.backgroundColor ="white";
}

let firstNameValid = false;
let lastNameValid = false;
let emailValid = false;
let phoneValid = false;
let usernameValid = false;
let passwordValid = false;
let confirmPasswordValid = false;
let isValid = false;
// Name validation
function nameValidation(id){
    const field = document.getElementById(id);
    const inputField = document.getElementById(id).value.trim();
    const elementError = document.getElementById(id + "_error");
    
    //  console.log(elementError);
    let legalName = /^[A-Za-z]+$/;
    if(inputField.length === 0){
        elementError.innerText = "this field is requerd";
        elementError.style.color = "red";
        field.style.backgroundColor = "red";
        isValid = false;
    }else if(legalName.test(inputField)){
          elementError.innerHTML = " is not allowed"
          elementError.style.color = "red";
          field.style.backgroundColor = "red";
          isValid = false;
    }else if(inputField.length<3){
        elementError.innerText = "name at least 3  character "
        elementError.style.color = "red";
        field.style.backgroundColor = "red";
        isValid = false;
    }
    else if(inputField.length>20){
        elementError.innerText = "name at cannot not exceed 20 character "
        elementError.style.color = "red";
        field.style.backgroundColor = "red";
        isValid = false;
    }else{
        elementError.innerText = "Successfully entered";
        elementError.style.color = "green";
        field.style.backgroundColor="white";
         isValid = true;   
    }

    if(id === "firstname"){
        firstNameValid = isValid;
    }
    if(id === "lasttname"){
        lastNameValid = isValid;
    }
   checkButtonState();

}
// Email validation
function emailValidation(id){
    const field = document.getElementById(id);
    const inputField =document.getElementById(id).value.trim();
    const elementError = document.getElementById(id + "_error");
    let legalEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(inputField.length === 0){
        elementError.innerText = "this field is requerd";
        elementError.style.color = "red";
        field.style.backgroundColor = "red";
        emailValid = false;
    }else if(!legalEmail.test(inputField)){
        elementError.innerHTML =  "Invalid Email Address";
         elementError.style.color = "red";
          field.style.backgroundColor = "red";
          emailValid = false;
    }else{
        elementError.innerText = "Successfully entered";
        elementError.style.color = "green";
        field.style.backgroundColor="white";
         emailValid = true;

    }
    checkButtonState();
}
// phone number validation
function phoneValidation(id){
    const field = document.getElementById(id);
    const inputField =document.getElementById(id).value.trim();
    const elementError = document.getElementById(id + "_error");
    isValid = false;
    const legalPhone = /^(?:\+251|251|0)(9|7)\d{8}$/;

    if(inputField.length === 0){
        elementError.innerText = "this field is requerd";
        elementError.style.color = "red";
        field.style.backgroundColor = "red";
        phoneValid = false;
    }else if(!legalPhone.test(inputField)){
        elementError.innerHTML =  "Invalid Phone number";
         elementError.style.color = "red";
          field.style.backgroundColor = "red";
          phoneValid = false;
    }else{
        elementError.innerHTML =  "successfully entered";
        field.style.backgroundColor = "white";
        elementError.style.color = "green";
        phoneValid = true;
    }
    checkButtonState();

}

//  user name validation
function usernameValidation(id){
    const field = document.getElementById(id);
    const inputField =document.getElementById(id).value.trim();
    const elementError = document.getElementById(id + "_error");
        
    const legalUsername = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;

    if(inputField.length === 0){
        elementError.innerText = "this field is requerd";
        elementError.style.color = "red";
        field.style.backgroundColor = "red";
        usernameValid = false;
    }else if(!legalUsername.test(inputField)){
        elementError.innerHTML =  "Invalid username";
         elementError.style.color = "red";
          field.style.backgroundColor = "red";
          usernameValid = false;
    }else if(inputField.length < 8){
        elementError.innerHTML =  " username at least have 8 character";
         elementError.style.color = "red";
          field.style.backgroundColor = "red";
          usernameValid = false;
    }
    else if(inputField.length > 15){
        elementError.innerHTML =  " username cannotexceed 15 character";
         elementError.style.color = "red";
          field.style.backgroundColor = "red";
          usernameValid = false;
    }
    else{
        elementError.innerHTML =  "successfully entered";
         field.style.backgroundColor = "white";
          elementError.style.color = "green";
          usernameValid = true;
    }
    checkButtonState();
}


function passwordValidation(id){
    const field = document.getElementById(id);
    const inputField =document.getElementById(id).value.trim();
    const elementError = document.getElementById(id + "_error");
    passwordField = inputField; 
    const legalPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    // const legalPassword = /^[A-Za-z0-9]{6,}$/;
    if(inputField.length === 0){
        elementError.innerText = "this field is required";
        elementError.style.color = "red";
        field.style.backgroundColor = "red";
        passwordValid = false;
    }else if(!legalPassword.test(inputField)){
        elementError.innerHTML =  "Invalid  password";
         elementError.style.color = "red";
          field.style.backgroundColor = "red";
          passwordValid = false;
    }else if(inputField.length < 8){
        elementError.innerHTML =  " password at least have 8 character";
         elementError.style.color = "red";
          field.style.backgroundColor = "red";
          passwordValid = false;
    }
    else if(inputField.length > 15){
        elementError.innerHTML =  " password cannotexceed 15 character";
         elementError.style.color = "red";
          field.style.backgroundColor = "red";
          passwordValid = false;
    }
    else{
        elementError.innerHTML =  "successfully entered";
         field.style.backgroundColor = "white";
          elementError.style.color = "green";
          passwordValid = true;
          
    }
    checkButtonState();
}
//const passwordField = document.getElementById()
// confirm password
function confirmPassword(id){
    const confirmfield = document.getElementById(id).value;
    const passwordField = document.getElementById(passwordField).value.trim();
    const elementError = document.getElementById(id + "_error");

        
    if(inputField.length === 0){
        elementError.innerText = "this field is required";
        elementError.style.color = "red";
        field.style.backgroundColor = "red";
         confirmPasswordValid = false;
    }else if(confirmfield !== passwordField){
     elementError.innerText = "password does not match! ";
        elementError.style.color = "red";
        // field.style.backgroundColor = "red";
        confirmPasswordValid = false;
    }
    else{
       elementError.innerText = "Successfully entered";
        elementError.style.color = "green";
        field.style.backgroundColor="white";
          confirmPasswordValid = true;
    }
    checkButtonState();
}

function birthdateValidation(id){
    const field = document.getElementById(id);
    const inputField =document.getElementById(id).value;
    const elementError = document.getElementById(id + "_error");
     const birthdate = new Date(inputField);
      const today = new Date();
         
    if(inputField.length === 0){
        elementError.innerText = "this field is required";
        elementError.style.color = "red";
        field.style.backgroundColor = "red";
    }else if(birthdate > today){
     elementError.innerText = "birth date cannot in the future! ";
        elementError.style.color = "red";
        field.style.backgroundColor = "red";
    }
    else{
        elementError.innerHTML =  "successfully entered";
         field.style.backgroundColor = "white";
          elementError.style.color = "green"
    }
}
 function checkButtonState(){
  const btn = document.getElementById('registerbtn');
  if(
    firstNameValid &&
    lastNameValid &&
    emailValid &&
    phoneValid &&
    passwordValid &&
    usernameValid &&
    usernameValid &&
    confirmPasswordValid
  ){
    btn.disabled= false
  }else{
    btn.disabled = true;
  }
  checkButtonState();
 }
