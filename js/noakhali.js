
console.log('connected noakhali.js');

const input = document.getElementById('noakhaliDonationAmount').value;


document.getElementById('noakhaliDonationButton').addEventListener('click', function (event) {
  event.preventDefault();
  let input;
  input = getInputValueById('noakhaliDonationAmount');
  let x = inputFieldValidation(input);
  let acoountBalance = getInnerTextById('acoountBalance');
  if (input.length === 0) {
    alert('Please Write some amount');
  }

  else if (x === false || x > acoountBalance || x < 0 || x === 0) {
    showAlert();
  }
  else {
    // Okay....
    document.getElementById('my_modal').showModal();
    document.getElementById('noakhaliDonationAmount').value = '';
    

    let noakhaliDonationBalance = getInnerTextById('noakhaliDonationBalance');
    noakhaliDonationBalance += x;

    let currentBalance = parseFloat(document.getElementById('noakhaliDonationBalance').innerText);
    let newDonationAmount = x;

    
    let updatedBalance = currentBalance + newDonationAmount;
  
    // Update the Noakhali Donation balance
    document.getElementById('noakhaliDonationBalance').innerText = parseFloat(updatedBalance.toFixed(2));




  
    // Updating AccountBalance
    let accountBalance = parseFloat(document.getElementById('acoountBalance').innerText);
    
    accountBalance -= newDonationAmount;
    document.getElementById('acoountBalance').innerText = parseFloat(accountBalance.toFixed(2));

    let historyContainer = document.getElementById('historyContainer');
    historyContainer.classList.add('space-y-4');
    let newDiv = document.createElement('div');
    // border border-[rgba(17, 17, 17, 0.1)] rounded-2xl p-8
    newDiv.classList.add('border', 'border-[#1111111a]', 'rounded-2xl', 'p-8');
    let h3 = document.createElement('h3');
    h3.classList.add('text-md', 'font-bold');
    h3.innerHTML = `${x} Taka is Donated for Flood at Noakhali, Bangladesh.
        `;
    let p = document.createElement('p');
    p.classList.add('text-[#111111b3]');
    p.innerHTML = `
        Date: ${new Date()}
        `;
    newDiv.append(h3);
    newDiv.append(p);

    historyContainer.append(newDiv);
    console.log(historyContainer);


  }

})

// updated