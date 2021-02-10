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



$( "#contactForm" ).submit(function( event ) {
  event.preventDefault();
  alert( "Your Message has been sent !\n Thank you!!" );
});


