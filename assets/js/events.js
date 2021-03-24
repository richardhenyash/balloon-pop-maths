/**
* @fileOverview JavaScript Event Handler Library.
* @author <a href="https://github.com/richardhenyash">Richard Ash</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */
/* globals $, modeMultiply, initialiseBalloons, modeAddSubtract, modeDivide, playGame, returnBtnIdArray, makeNotActive */
/* globals checkOtherStickyButtons, checkSelectedAnswer, returnToMenu, muteAudio, unMuteAudio, muteAudioToggle */

// Initialisation Event Handlers //

// Event handler to switch to multiply mode when document is ready //
$(document).ready(modeMultiply);

// Hide in game score
$("#score").hide();
// Hide game canvas and controls.
$("#game-canvas-controls").hide();

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
});

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

// On click event handler added to multiplication and division options buttons with the .btn-mul-div-toggle class in multiplication and division modes //
// Removes active class on all other multiplication and division buttons to give toggle behaviour to options buttons with the .btn-mul-div-toggle class //
$(".btn-mul-div-toggle").click(function(){
    // Get button ID
    let btnId = "#" + ($(this)[0].id);
    // Initialise button ID array
    let btnIdArray = returnBtnIdArray("btn-mul-div");
    // Remove clicked button from button ID array
    let i = btnIdArray.indexOf(btnId);
    if (i > -1) {
        btnIdArray.splice(i, 1);
    }
    // Make all buttons in button ID array not active
    makeNotActive(btnIdArray);
    // Toggle button back on if de-selected;
    if ($(this).hasClass("active")) {
        $(this).button('toggle');
    }
});

// On click event handler added to all multiplication and division options buttons with the .btn-mul-div-sticky class //
// Makes the first two multiply and divide option buttons not active //
// Allows selection of multiple buttons with the .btn-mul-div-sticky class. Checks to see if other sticky buttons //
// are selected before releasing button selection, to ensure that one option is always selected //
$(".btn-mul-div-sticky").click(function(){
    // Initialise button ID array
    let btnIdArray = ["#btn-mul-div-1", "#btn-mul-div-2"];
    // Make all buttons in button ID array not active
    makeNotActive(btnIdArray);
    // Get button ID
    let btnId = ($(this)[0].id);
    // Toggle button back on if de-selected, and no other buttons with the .btn-mul-div-sticky class are selected
    if (($(this).hasClass("active")) && ((checkOtherStickyButtons(btnId)) == false)) {
        $(this).button('toggle');
    }
});

// On click event handler added to addition and subtraction options buttons with the .btn-add-sub-toggle class in addition and subtraction modes //
// Removes active class on all other buttons to give toggle behaviour to addition and subtraction options buttons with the .btn-add-sub-toggle class //
$(".btn-add-sub-toggle").click(function(){
    // Get button ID
    let btnId = "#" + ($(this)[0].id);
    // Initialise button ID array
    let btnIdArray = returnBtnIdArray("btn-add-sub");
    // Remove clicked button from button ID array
    let i = btnIdArray.indexOf(btnId);
    if (i > -1) {
        btnIdArray.splice(i, 1);
    }
    // Make all buttons in button ID array not active
    makeNotActive(btnIdArray);
    // Toggle button back on if de-selected;
    if ($(this).hasClass("active")) {
        $(this).button('toggle');
    }
});

// Game Event Handlers //

// On click event added to balloon answer text divs to check the selected answer using checkSelectedAnswer function //
$("#balloon-answer-text-left-1").on("click", checkSelectedAnswer);
$("#balloon-answer-text-left-2").on("click", checkSelectedAnswer);
$("#balloon-answer-text-left-3").on("click", checkSelectedAnswer);
$("#balloon-answer-text-right-1").on("click", checkSelectedAnswer);
$("#balloon-answer-text-right-2").on("click", checkSelectedAnswer);
$("#balloon-answer-text-right-3").on("click", checkSelectedAnswer);

// On click event added to game mode home button to hide game section and show heading and options sections //
$("#btn-game-section-home").on("click", returnToMenu);

// On click event added to options audio off button to mute audio //
$("#audio-off").on("click", muteAudio);

// On click event added to options audio on button to un-mute audio //
$("#audio-on").on("click", unMuteAudio);

// On click event added to in-game mute button to toggle audio mute //
$("#mute").on("click", muteAudioToggle);
