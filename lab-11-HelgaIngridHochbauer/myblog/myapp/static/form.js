function validateForm() {
    let fname = document.getElementById("firstName").value;
     let lname = document.getElementById("lastName").value;
     let email = document.getElementById("email").value;
     
     
     let correct = 1;
     if (fname == "" || lname == "" || email == "" ) {
     alert("Please fill in your data");
     correct = 0;
     return false;
     }
     
     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
     if (!emailPattern.test(email)) {
         alert("Please enter a valid email address.");
         correct = 0 ;
         return false;
         }
     
     
         if(correct == 1 ){
         alert("Success!");
         }
         return true;
         }