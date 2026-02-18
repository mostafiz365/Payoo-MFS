document.getElementById('cashout-btn').addEventListener('click',
    function(){
        const cashOutNumberInput = document.getElementById('cashout-number');
        const cashOutNumber = cashOutNumberInput.value;
        if(cashOutNumber.length !== 11){
            alert('Invalid Agent Number');
            return;
        }

        const amountNumberInput = document.getElementById('amount-number');
        const amount = amountNumberInput.value;

        const currentBalance = document.getElementById('balance');
        const balance = currentBalance.innerText;
        
        const newBalance = Number(balance) - Number(amount);
        if(newBalance < 0){
            alert('Invalid Balance');
            return;
        }

        const cashOutPinInput = document.getElementById('cashout-pin');
        const cashOutPin = cashOutPinInput.value;
        if(cashOutPin === '1234'){
            alert('Cash Out Successful');
            currentBalance.innerText = newBalance;
        }
        else{
            alert('Invalid Pin');
            return;
        }
    }
)