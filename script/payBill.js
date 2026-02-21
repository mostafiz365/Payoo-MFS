document.getElementById('pay-bill-btn').addEventListener('click',function(){
    const payBillOption = getValueFormInput('pay-bill-option');
    if(payBillOption === 'Select Bill Option'){
        alert('Please Select A Pay Bill Option');
        return;
    }
    const billerAccountNumber = getValueFormInput('biller-account-number');
    if(billerAccountNumber.length !== 11){
        alert('Invalid Account Number');
        return;
    }
    const payBillAmount = getValueFormInput('pay-bill-amount');
    const balance = getBalance();
    const newBalance = balance - Number(payBillAmount);
    if(newBalance < 0){
        alert('Invalid Amount');
        return;
    }
    const payBillPin = getValueFormInput('pay-bill-pin');
    if(payBillPin === '1234'){
        alert('Bill Pay Successful');
        setBalance(newBalance);
    }
    else{
        alert('Invalid Pin');
        return;
    }
})