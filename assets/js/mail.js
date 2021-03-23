/**
* @fileOverview JavaScript Mail Library.
* @author <a href="https://github.com/richardhenyash">Richard Ash</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */
/* globals emailjs */

// Initialise EmailJS with assigned user ID //
emailjs.init("user_JExUJN7eCUWFqFAl29Mbl");

/**
* [Function to send email from modal contact form]
* @param  {[object]}   contactForm      [Contact form object]
* @return {[boolean]}                   [Boolean - returns false if not succesfull]
*/
function sendMail(contactForm) {
    emailjs.send("PersonalGmail","balloon-pop-maths",{
        from_name: contactForm.name.value,
        from_email: contactForm.email.value,
        message: contactForm.message.value
    })
    .then(
        function(response) {
            // Log to console for debugging //
            // console.log("SUCCESS", response); //
            $("#modal-contact").modal('hide');
            $("#modal-feedback-heading-text").text("Success!");
            $("#modal-feedback-body-text").text("Your contact form was submitted succesfully.");
            $('#modal-feedback').modal();
        },
        function(error) {
            // Log to console for debugging //
            // console.log("FAILED", error); //
            $("#modal-contact").modal('hide');
            $("#modal-feedback-heading-text").text("Oops!");
            $("#modal-feedback-body-text").text("Your contact form was not submitted.");
            $('#modal-feedback').modal();
        }
    );
    return false;  // To block from loading a new page
}
