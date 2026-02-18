document.getElementById('cashout-btn').addEventListener('click', function(){
    const cashOutNumber = getValueFormInput('cashout-number');
    if(cashOutNumber.length !== 11){
        alert('Invalid Agent Number');
        return;
    }
    const amountNumber = getValueFormInput('amount-number');

    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(amountNumber);
    if(newBalance < 0){
        alert('Invalid Amount');
        return;
    }
    const pin = getValueFormInput('cashout-pin');
    if(pin === '1234'){
        alert('Cash Out Successful');
        setBalance(newBalance);
    }
    else{
        alert('Invalid Pin');
        return;
    }
})

// document.getElementById('btn-cashout').addEventListener('click',function(){
//     const cashOut = document.getElementById('cashout');
//     cashOut.classList.remove('hidden');
// }
// )

// document.getElementById('cashout-btn').addEventListener('click',function(){
//     const cashOutNumberInput = document.getElementById('cashout-number');
//     const cashOutNumber = cashOutNumberInput.value;
//     if(cashOutNumber.length !== 11){
//         alert('Invalid Agent Number');
//         return;
//     }

//     const amountNumberInput = document.getElementById('amount-number');
//     const amountNumber = amountNumberInput.value;
//     console.log(amountNumber);

    // const currentBalance = document.getElementById('balance');
    // const balance = currentBalance.innerText;
    // const newBalance = Number(balance) - Number(amountNumber);
    // if(newBalance < 0){
    //     alert('Invalid Amount');
    //     return;
    // }
    
//     const cashOutPinInput = document.getElementById('cashout-pin');
//     const cashOutPin = cashOutPinInput.value;
    // if(cashOutPin === '1234'){
    //     alert('Cash Out Successful');
    //     console.log('new balance', newBalance);
    //     currentBalance.innerText = newBalance;
    // }
    // else{
    //     alert('Invalid Pin');
    //     return;
    // }
// })