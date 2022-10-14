// toastr settings
toastr.options = {
    "closeButton": true,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "3000",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

function whatsappApi(){
    var phoneNumber = document.getElementById("phone").value;

    if(phoneNumber.length<10 || (phoneNumber === null || phoneNumber===undefined)){
        toastr.error("Please enter valid 10 digit mobile number!");
        return;
    }

    if(phoneNumber.substring(0,3) == "+91")
        phoneNumber = phoneNumber.substring(3)
    
    if(isNaN(phoneNumber)){
        toastr.error("Please enter valid 10 digit mobile number!");
        return;
    }

    if(isMobile())
        window.open("https://api.whatsapp.com/send?phone=+91" + phoneNumber,'_blank'); 
    else
        window.open("https://api.whatsapp.com/send?phone=" + phoneNumber,'_blank'); 

}
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        whatsappApi();
    }
});

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
