console.log('connected feature.js');
function getInputValueByID(id){

    const value= document.getElementById(id).value;

    return value;
}
function inputFieldValidation(input){

    let length= input.length;
    for (const ch of input) {
        if(isNaN(ch)){
           return false;
        }
    }
    return true;
}