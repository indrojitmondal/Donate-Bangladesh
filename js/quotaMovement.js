


console.log('connected quota.js');




document.getElementById('quotaDonationButton').addEventListener('click', function (event) {
  event.preventDefault();
  // alert("clicked");
  let input;
  input = getInputValueById('quotaDonationAmount');
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
    document.getElementById('quotaDonationAmount').value = '';
    

    let quotaDonationBalance = getInnerTextById('quotaDonationBalance');
    quotaDonationBalance += x;

    let currentBalance = parseFloat(document.getElementById('quotaDonationBalance').innerText);
    let newDonationAmount = x;

    
    let updatedBalance = currentBalance + newDonationAmount;
  
    // Update the Quota Donation balance
    document.getElementById('quotaDonationBalance').innerText = parseFloat(updatedBalance.toFixed(2));




  
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
    h3.innerHTML = `${x} Taka is Donated for Aid for Injured in the Quota Movement.
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