console.log('connected noakhali.js');

const  input=document.getElementById('noakhali').value;


document.getElementById('noakhaliDonationButton').addEventListener('click', function(event){
     event.preventDefault();
    const input=document.getElementById('noakhali').value;
    if(input.length===0){
        alert('Please Write some amount');
    }
    
    else if(!inputFieldValidation(input)){
      showAlert();
    }
    else 
     {
        document.getElementById('my_modal').showModal();
        document.getElementById('noakhali').value='';

     }

})





