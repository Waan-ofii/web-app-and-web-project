function mouseIn(id){
    const inputNum = document.getElementById(id);
    inputNum.style.backgroundColor ="lightblue";
}
function mouseLeave(id){
    const inputNum = document.getElementById(id);
    inputNum.style.backgroundColor ="white";
}
// function mouseIn2(id){
//     const inputNum = document.getElementById(id);
    
// }

// function numberValidation(id){
//     const legalDigit = ;
//     const inputNum = document.getElementById(id);
//    // const oper = document.querySelector(".form-select");
//      const elementError = document.getElementById(id+"_error");
//     const inputValue=inputNum.value.trim();
    
//     if(inputValue === ""){
//        elementError.innerHTML ="this field is required";
//        elementError.style.color= "red";
       
//     }else if(!legalDigit.test(inputValue)){
//           elementError.innerHTML ="<img src='uncached.gif' alt='error'";
//     }else{
//         elementError.innerHTML="<img>"
//     }
// }


// function writeData(id){
//     const inputField = document.getElementById(id).value.trim();
//     const elementError = document.getElementById(id + "_error").value;
//     elementError.innerHTML = inputField;
    
// }

// const elementError = document.getElementById(id + "_error").trim();

// Number validation
function numberValidation(id){
    const legalDigit = /^\d+(\.\d+)?$/;
    const inputField = document.getElementById(id).value.trim();
    const elementError = document.getElementById(id + "_error");

    if(inputValue.length === 0){
       elementError.innerHTML ="this field is required";
       elementError.style.color= "red";
}else if(legalDigit.test(inputField)){
    elementError.innerText ="Only number is allowed";
     elementError.style.color= "red";
}else{
    elementError.innerHTML = "";
 }
}
// culculate
const culculate = document.getElementById("btnc");
culculate.style.backgroundColor = "orange";
      culculate.addEventListener('click', function(){
        const num1 =document.getElementById("num1").value.trim();
        const num2 =document.getElementById("num2").value.trim();
        const Op =document.getElementById("Operator").value;       
        const result = Operator(Number(num1),Number(num2),Op);
        document.getElementById("result").innerHTML = result;
        console.log(result);
      });

function Operator(num1,num2,Op){
    switch(Op){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1/num2;
    }
}
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
        field.style.backgroundColor = "red"
    }else if(legalName.test(inputField)){
          elementError.innerHTML = " is not allowed"
          elementError.style.color = "red";
          field.style.backgroundColor = "red"
    }else if(inputField.length<3){
        elementError.innerText = "name at least 3  character "
        elementError.style.color = "red";
        field.style.backgroundColor = "red"
    }
    else if(inputField.length>20){
        elementError.innerText = "name at cannot not exceed 20 character "
        elementError.style.color = "red";
        field.style.backgroundColor = "red"
    }else{
        elementError.innerText = " ";
        field.style.backgroundColor="white";
    }
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
    }else if(!legalEmail.test(inputField)){
        elementError.innerHTML =  "Invalid Email Address";
         elementError.style.color = "red";
          field.style.backgroundColor = "red";
    }else{
        elementError.innerHTML =  "";
         field.style.backgroundColor = "white";
    }
}