function whatsappApi(){
    var phoneNumber = document.getElementById("phone").value;
    if(phoneNumber.length<10 || phoneNumber.length>13){
       document.getElementById("msg").innerText="*Please enter valid 10 digit mobile number";
    }
    else{
        if (phoneNumber != null || phoneNumber!=undefined) 
        { 
            window.location.href = "https://api.whatsapp.com/send?phone=+91" + phoneNumber; 
        }
        else{
            document.getElementById("msg").innerText="Something went wrong. Please try again later";
        }
    }
    
}