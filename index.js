const userInputs = document.querySelectorAll('.input-flip');
const userInputArray = [];


// disabling all fields until every field is filled
var form = document.querySelector('form');
var inputs = document.querySelectorAll('.input-flip');
var required_inputs = document.querySelectorAll('.input-flip');
var register = document.querySelector('input[type="submit"]');
form.addEventListener('keyup', function(e) {
 var disabled = false
 inputs.forEach(function(input, index) {
 if (input.value === '' || !input.value.replace(/\s/g, '').length) {
 disabled = true
 }
 })
 if (disabled) {
 register.setAttribute('disabled', 'disabled');
 } else {
 register.removeAttribute('disabled');
 }
})

const numTotal = document.querySelector('#input_1_4').value.toString();
console.log(numTotal);

function submitButtonHandler(){ 
    for(const input of userInputs){
        userInputArray.push(input.value);  
    }
    // none of the items must be empty in order for the alert() to run
    if(!userInputArray.includes("")){
        alert(userInputArray);
    }     

}

const submitButton = document.querySelector('#input_1_8');
submitButton.addEventListener('click', submitButtonHandler);