// const userInputs = document.querySelectorAll('.input-flip');
// const userInputArray = [];


// // disabling all fields until every field is filled
// var form = document.querySelector('form');
// var inputs = document.querySelectorAll('.input-flip');
// var required_inputs = document.querySelectorAll('.input-flip');
// var register = document.querySelector('input[type="submit"]');
// form.addEventListener('keyup', function(e) {
//  var disabled = false
//  inputs.forEach(function(input, index) {
//  if (input.value === '' || !input.value.replace(/\s/g, '').length) {
//  disabled = true
//  }
//  })
//  if (disabled) {
//  register.setAttribute('disabled', 'disabled');
//  } else {
//  register.removeAttribute('disabled');
//  }
// })

// const numTotal = document.querySelector('#input_1_4').value.toString();
// console.log(numTotal);

// function submitButtonHandler(){ 
//     for(const input of userInputs){
//         userInputArray.push(input.value);  
//     }
    // none of the items must be empty in order for the alert() to run
//     if(!userInputArray.includes("")){
//         alert(userInputArray);
//     }     

// }

// const submitButton = document.querySelector('#input_1_8');
// submitButton.addEventListener('click', submitButtonHandler);





//sam-code
const textbox = document.querySelectorAll("input");

console.log(textbox);
const btn = textbox[3];
console.log(textbox[3]);
const textb1 = textbox[0];
const textb2 = textbox[1];
const textb3 = textbox[2];
// const textbox1 = textb1.value;

btn.addEventListener("click",function(e){
    const name = textb1.value;
    const email = textb2.value;
    const mobile = textb3.value;
    const email1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const check = /^[-+]?[0-9]+$/;
    if(name =="" || email ==""|| mobile ==""){
        alert("Fill all fields")
    }else if(!(email.match(email1))){
        alert("Highlighted field - wrong format");
        textb2.style.border = "2px solid red";
    } else if(!(mobile.match(check))){
        alert("Highlighted field - wrong format");
        
     }else if(mobile.length>10){
         alert("number is greater 10")
         textb3.style.border = "2px solid red";
     }
     else if(mobile.length<10){
         alert("number is less than 10")
         textb3.style.border = "2px solid red";
     } else if(!(mobile.startsWith("0"))){
         alert("mobile number must start with a zero");
         textb3.style.border = "2px solid red";
     }

    else{
        alert (`
        Name: ${name}
        E-mail: ${email}
        Phone: ${mobile}
        
        
        `)
    }
   
    
        

   
    



   
       
    
})
