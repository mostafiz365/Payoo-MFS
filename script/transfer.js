document.getElementById('transfer-btn').addEventListener('click',function(){
    const transferNumber = getValueFormInput('transfer-number');
    if(transferNumber.length !== 11){
        alert('Invalid Number');
        return;
    }

    const transferAmount = getValueFormInput('transfer-amount');

    const balance = getBalance();
    const newBalance = balance - Number(transferAmount);
    if(newBalance < 0){
        alert('Invalid Amount');
        return;
    }

    const transferPin = getValueFormInput('transfer-pin');
    if(transferPin === '1234'){
        alert('Transfer Successful');
        setBalance(newBalance);
    }
    else{
        alert('Invalid Pin');
        return;
    }
})