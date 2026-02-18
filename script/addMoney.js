document.getElementById('add-money-btn').addEventListener('click',function(){
    const addMoneyBank = getValueFormInput('add-money-bank');
    if(addMoneyBank === 'Select bank'){
        alert('Select a Bank');
        return;
    }
    const accountNumber = getValueFormInput('account-number');
    if(accountNumber.length !== 11){
        alert('Invalid Account Number');
        return;
    }
    const addAmount = getValueFormInput('add-amount-number');
    if(addAmount === '' || addAmount <= 0){
        alert('Please Add Some Money');
        return;
    }

    const balance = getBalance()
    const currentBalance = balance + Number(addAmount);
    


    const addMoneyPin = getValueFormInput('add-money-pin');
    if(addMoneyPin === '1234'){
        alert('Add Money Successful');
        setBalance(currentBalance);
    }
    else{
        alert('Invalid Pin');
        return;
    }
})

// document.getElementById('btn-add-money').addEventListener('click',function(){
//     const addMoney = document.getElementById('add-money');
//     addMoney.classList.remove('hidden');
// }
// )