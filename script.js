var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var Name = document.getElementById("name").value;
    if(Name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(Name.length < 12){
        nameError.innerHTML = "Write full name";
        return false;   
    }
    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}
   function validatePhone(){
    var number = document.getElementById("phone").value;
    if(number.length==0){
        phoneError.innerHTML = "Number is required";
        return false;
    }
    if(number.length < 10){
        phoneError.innerHTML = "Number should be <br> of 10 digit";
        return false;   
    }
    if(!number.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "phone Number is required";
        return false; 
    }
    phoneError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;

   }

   function validatEmail(){
    var email = document.getElementById("email").value;
    if(email.length == 0){
        emailError.innerHTML ='email is required';
        return false; 
    }
    emailError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
   }
   function validateMessage(){
    var message = document.getElementById("message").value;
    if(message.length == 0){
        messageError.innerHTML ='message is required';
        return false; 
    }
    if(message.length < 10){
        messageError.innerHTML ='message atleast should <br> be of 10 words';
        return false; 
    }

    messageError.innerHTML ='<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
   }

   function validateSubmit(){
    if(!validateName() || !validatePhone()|| !validatEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML ='please fix error to submit';
        setTimeout(function() {submitError.style.display = "none";}, 3000);
        return false;
    }
   }