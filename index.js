const info= {
    input_1_1: "invalid first name",
    input_1_2: "invalid last name",
    input_1_3: "invalid email",
    input_1_4: "invalid phone number",
    input_1_5: "invalid website",
    input_1_6: "invalid company",

}
const userInputs = document.querySelectorAll('.input-flip');
const userInputArray = [];

function submitButtonHandler(){
    for(const input of userInputs){
        //checks if empty, then use the id of that element to access an object having id and corresponding msg
        if(input.value === ""){
            userInputArray.push(info[input.id]);
        }
        else{
            userInputArray.push(input.value);
        }    
    }
    alert(userInputArray);
}

const submitButton = document.querySelector('#input_1_8');
submitButton.addEventListener('click', submitButtonHandler);