function whatsappApi(){
    var phoneNumber = document.getElementById("phone").value;
    if(phoneNumber.length<10){
       document.getElementById("msg").innerText="*Please enter valid 10 digit mobile number";
    }
    else{
        if (phoneNumber != null || phoneNumber!=undefined) 
        { 
            if(phoneNumber.length == 13)
                window.location.href = "https://api.whatsapp.com/send?phone=" + phoneNumber; 
            else
                 window.location.href = "https://api.whatsapp.com/send?phone=+91" + phoneNumber; 
        }
        else{
            document.getElementById("msg").innerText="Something went wrong. Please try again later";
        }
    }
    
}
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        whatsappApi();
    }
});

const selectElement = document.querySelector('#phone');
selectElement.addEventListener('input',function(){
        document.getElementById("msg").innerText=' ';
})
