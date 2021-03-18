// JavaScript Event Handlers //

// Initialisation Event Handlers //

// Event handler to switch to multiply mode when document is ready //
$(document).ready(modeMultiply);

// Hide in game score
$("#score").hide()
// Hide game canvas and controls.
$("#game-canvas-controls").hide()

// Show game loader until 1000ms after window has completed loading.
// Display balloon animation frame 1 in each canvas element
// Fade-in game score, game canvas and controls 1000ms after window has completed loading //
$(window).on("load", function() {
    // Display balloon animation frame 1 in each canvas element
    initialiseBalloons();
    // Set timeout
    setTimeout(function(){
        // Hide game loader
        $("#game-loader").hide();
        // Fade-in score
        $("#score").removeClass("d-none");
        $("#score").fadeIn(1000);
        // Fade-in game canvas and controls
        $("#game-canvas-controls").removeClass("d-none");
        $("#game-canvas-controls").fadeIn(1000);
    }, 1000);     
})

// Options Event Handlers //

// On click event added to add button to switch to addition and subtraction option mode //
$("#add").on("click", modeAddSubtract);

// On click event added to subtract button to switch to addition and subtraction option mode //
$("#subtract").on("click", modeAddSubtract);

// On click event added to multiply button to switch to multiply option mode //
$("#multiply").on("click", modeMultiply);

// On click event added to divide button to switch to divide option mode //
$("#divide").on("click", modeDivide);

// On click event added to run playGame function when play button is clicked //
$("#play").on("click", playGame);

// On click event handler added to first two options buttons in multiplication and division modes //
// Removes active class to give toggle behaviour to first two option buttons //
$("#btn-mul-div-1").click(function() {
    // Initialise button ID array
    let btnIdArray = ["#btn-mul-div-2", "#btn-mul-div-3", "#btn-mul-div-4", "#btn-mul-div-5", "#btn-mul-div-6", "#btn-mul-div-7", "#btn-mul-div-8", "#btn-mul-div-9", "#btn-mul-div-10", "#btn-mul-div-11", "#btn-mul-div-12", "#btn-mul-div-13", "#btn-mul-div-14"]
    // Make all buttons in button ID array not active
    makeNotActive(btnIdArray);
})
$("#btn-mul-div-2").click(function() {
    // Initialise button ID array
    let btnIdArray = ["#btn-mul-div-1", "#btn-mul-div-3", "#btn-mul-div-4", "#btn-mul-div-5", "#btn-mul-div-6", "#btn-mul-div-7", "#btn-mul-div-8", "#btn-mul-div-9", "#btn-mul-div-10", "#btn-mul-div-11", "#btn-mul-div-12", "#btn-mul-div-13", "#btn-mul-div-14"]
    // Make all buttons in button ID array not active
    makeNotActive(btnIdArray);
})

// Initialise button ID array with all multiply and divide options buttons except the first two //
let mdbtnIdArray = ["#btn-mul-div-3", "#btn-mul-div-4", "#btn-mul-div-5", "#btn-mul-div-6", "#btn-mul-div-7", "#btn-mul-div-8", "#btn-mul-div-9", "#btn-mul-div-10", "#btn-mul-div-11", "#btn-mul-div-12", "#btn-mul-div-13", "#btn-mul-div-14"]

// On click event handler added to all multiply and divide options buttons except the first two //
// Makes first two multiply and divide option buttons not active //
for (mdBtn of mdbtnIdArray) {
    $(mdBtn).click(function() {
        let btnIdArray = ["#btn-mul-div-1", "#btn-mul-div-2"]
        makeNotActive(btnIdArray);
    })
}

// On click event handler added to first four options buttons in addition and subtraction mode //
// Removes active class to give toggle behaviour to first four option buttons //
$("#btn-add-sub-1").click(function() {
    let btnIdArray = ["#btn-add-sub-2", "#btn-add-sub-3", "#btn-add-sub-4"]
    makeNotActive(btnIdArray);
})
$("#btn-add-sub-2").click(function() {
    let btnIdArray = ["#btn-add-sub-1", "#btn-add-sub-3", "#btn-add-sub-4"]
    makeNotActive(btnIdArray);
})
$("#btn-add-sub-3").click(function() {
    let btnIdArray = ["#btn-add-sub-1", "#btn-add-sub-2", "#btn-add-sub-4"]
    makeNotActive(btnIdArray);
})
$("#btn-add-sub-4").click(function() {
    let btnIdArray = ["#btn-add-sub-1", "#btn-add-sub-2", "#btn-add-sub-3"]
    makeNotActive(btnIdArray);
})

// Game Event Handlers //

// On click event added to balloon answer text divs to check the selected answer using checkSelectedAnswer function //
$("#balloon-answer-text-left-1").on("click", checkSelectedAnswer);
$("#balloon-answer-text-left-2").on("click", checkSelectedAnswer);
$("#balloon-answer-text-left-3").on("click", checkSelectedAnswer);
$("#balloon-answer-text-right-1").on("click", checkSelectedAnswer);
$("#balloon-answer-text-right-2").on("click", checkSelectedAnswer);
$("#balloon-answer-text-right-3").on("click", checkSelectedAnswer);

// On click event added to game mode options button to hide game section and show heading and options sections //
$("#btn-game-section-options").on("click", returnToMenu);

// On click event added to mute button to toggle audio mute //
$("#mute").on("click", muteAudioToggle);
