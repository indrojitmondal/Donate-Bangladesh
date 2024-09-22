console.log('connected noakhali.js');

const  input=document.getElementById('noakhaliDonationAmount').value;


document.getElementById('noakhaliDonationButton').addEventListener('click', function(event){
     event.preventDefault();
    let input;
    input= getInputValueById('noakhaliDonationAmount');
    let x=inputFieldValidation(input);
    if(input.length===0){
        alert('Please Write some amount');
    }
    
    else if(x===false){
      showAlert();
    }
    else 
     {
        // Okay....
        document.getElementById('my_modal').showModal();
        document.getElementById('noakhaliDonationAmount').value='';
        console.log(x);

        let noakhaliDonationBalance = getInnerTextById('noakhaliDonationBalance');
        noakhaliDonationBalance +=x;
        // alert(noakhaliDonationBalance);
        document.getElementById('noakhaliDonationBalance').innerText=noakhaliDonationBalance;

     }

})





