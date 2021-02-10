function sendMail(contactForm) {
    emailjs.send("gmail", "template_c1k39bh", {
            "from_fname": contactForm.firstname.value,
            "from_lname": contactForm.lastname.value,
            "from_email": contactForm.email.value,
            "message": contactForm.message.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                contactForm.reset();
            },
            function(error) {
                console.log("FAILED", error);
            });
    return false;
}



<<<<<<< HEAD
$("#contactForm").submit(function(event) {
    event.preventDefault();
    alert("Your Message has been sent !\n Thank you!!");
});
=======
$( "#contactForm" ).submit(function( event ) {
  event.preventDefault();
  alert( "Your Message has been sent !\n Thank you!!" );
});


<<<<<<< HEAD
>>>>>>> 08a5924e719f5d3732d96eea74e64d26b89c2718
=======
>>>>>>> 08a5924e719f5d3732d96eea74e64d26b89c2718
