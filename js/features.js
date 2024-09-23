console.log('connected feature.js');
function getInputValueById(id){

    return document.getElementById(id).value;;
}
function getInnerTextById(id){

    return parseFloat(document.getElementById(id).innerText);

}
function inputFieldValidation(input){

    let length= input.length;
    
    for (const ch of input) {
        if(isNaN(ch) && ch!='.'){
           return false;
        }
    }

    return parseFloat(input);
}


function showAlert(){
    alert('Invalid Donation Amount');
}
// updated