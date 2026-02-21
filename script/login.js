document.getElementById('login-btn').addEventListener('click',
    function(){
        const numberInput = document.getElementById('number-input');
        const contactNumber = numberInput.value;

        const pinInput = document.getElementById('pin-input');
        const pin = pinInput.value;

        if(contactNumber === '01861254722' && pin === '1234'){
            alert('login Successfully');
            // window.location.replace("/home.html");
            window.location.assign("home.html")
        }
        else{
            alert('login failed');
            return;
        }
    }
)