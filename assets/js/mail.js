/** JavaScript mail functions **/

/** Initialise EmailJS with assigned user ID **/
emailjs.init("user_JExUJN7eCUWFqFAl29Mbl");

/** Function to send email from modal contact form **/
function sendMail(contactForm) {
    emailjs.send("PersonalGmail","balloon-pop-maths",{
        from_name: contactForm.name.value,
        from_email: contactForm.email.value,
        message: contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            $("#modal-contact").modal('hide');
            $("#modal-feedback-heading-text").text("Success!");
            $("#modal-feedback-body-text").text("Your contact form was submitted succesfully.");
            $('#modal-feedback').modal();
        },
        function(error) {
            console.log("FAILED", error);
            $("#modal-contact").modal('hide');
            $("#modal-feedback-heading-text").text("Oops!");
            $("#modal-feedback-body-text").text("Your contact form was not submitted.");
            $('#modal-feedback').modal();
        }
    );
    return false;  // To block from loading a new page
}
