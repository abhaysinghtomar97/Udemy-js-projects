let email = document.getElementById("input");
let error =document.getElementById("error-msg");
let icon = document.getElementById("icon");


function checker(){

    icon.style.display = "inline-block";
    let emailID =email.value.trim();

    if(emailID=== ""){
        icon.style.display="none";
        error.style.display="none";
        email.style.border="1px solid #d1d3d4";

    }else if(validateEmail(emailID)){
        icon.innneHTML='<i class="fa-solid fa-check-circle"></i>';
        icon.style.color= "#2ecc71";
        error.style.display="none";
        email.style.border="1px solid #2ecc71";
    }else{
        icon.innerHTML='<i class="fa-solid fa-exclamation-circle"></i>';
        icon.style.color= "#ff2851";
        error.style.display="block";
        error.style.color="#ff2851";
        email.style.border="1px solid #ff2851";
    }
}
function validateEmail(email) {
    let atindex = email.indexOf("@");
    let dotindex = email.lastIndexOf(".");

    if(atindex >0 &&
        dotindex > atindex +1 &&
        dotindex < email.length - 2 
    ){
       return true;
    }else {
        return false;
    }

}
