
console.log('connected index.js');
document.getElementById('donationButton').addEventListener('click', function(){
   
    document.getElementById('historyContainer').classList.add('hidden');
    document.getElementById('donationContainer').classList.remove('hidden');
    document.getElementById('donationButton').classList.add('bg-primary');
    document.getElementById('historyButton').classList.remove('bg-primary');
   
})

document.getElementById('historyButton').addEventListener('click', function(){
   
    document.getElementById('donationContainer').classList.add('hidden');
    document.getElementById('historyContainer').classList.remove('hidden');
    document.getElementById('historyButton').classList.add('bg-primary');
    document.getElementById('donationButton').classList.remove('bg-primary');
})

// all donateButton 
const allDonateButton = document.querySelectorAll('section button');
console.log(allDonateButton);

// updated