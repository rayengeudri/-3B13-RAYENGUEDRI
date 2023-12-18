
var submit_btn=document.querySelector('#btn-submit')
let nameform = document.querySelector('#name');
let email = document.querySelector("#email");
let message = document.querySelector("#message");


 const onSubmit = ()=>{
    let nm = nameform.value;
    let eml = email.value;
    if(nm === "" || eml==="") {
        alert("email is requierd")
    }
    else{
    alert (`thank you ${nm}  your message has been recived , an email will be sent to ${eml}`)
    nm.value=""
    eml.value=""
    message.value=""
    
    }
 }
 document.addEventListener("DOMContentLoaded", function() {
    
    var mybutton = document.getElementById("backToTopBtn");

   
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    mybutton.onclick = function() {
        topFunction();
    };

    function topFunction() {
        
        document.documentElement.scrollTop = 0; 
    }
});
 submit_btn.addEventListener('click',()=>onSubmit())