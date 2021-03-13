// JavaScript event handlers //

// Event handler to switch to Multiply mode when document is ready
$(document).ready(modeMultiply);

// Hide play button, add Event handler to show Play button when window has completed loading
$("#play").hide()
$(window).on("load", function() {
    $("#play").show(400)
})

// On click event added to add and subtract buttons to switch to addition and subtraction options modes
$("#add").on("click", modeAddSubtract);
$("#subtract").on("click", modeAddSubtract);

// On click event added to multiply and divide buttons to switch to multiplication and division options modes
$("#multiply").on("click", modeMultiply);
$("#divide").on("click", modeDivide);

// On click event added to play game when play button is clicked
$("#play").on("click", playGame);

// On click event added to divide button to show multiplication and division option buttons and update option buttons for division game
$("#divide").click(function() {
    $("#options-add-subtract").hide(400);
    $("#options-multiply-divide").show(400);
    makeActive("#btn-mul-div-1");
    $("#btn-mul-div-1").html("&divide2, &divide5, &divide10");
    $("#btn-mul-div-2").html("Mixed 1 to 12");
    $("#btn-mul-div-3").html("&divide1");
    $("#btn-mul-div-4").html("&divide7");
    $("#btn-mul-div-5").html("&divide2");
    $("#btn-mul-div-6").html("&divide8");
    $("#btn-mul-div-7").html("&divide3");
    $("#btn-mul-div-8").html("&divide9");
    $("#btn-mul-div-9").html("&divide4");
    $("#btn-mul-div-10").html("&divide10");
    $("#btn-mul-div-11").html("&divide5");
    $("#btn-mul-div-12").html("&divide11");
    $("#btn-mul-div-13").html("&divide6");
    $("#btn-mul-div-14").html("&divide12");
})

// Remove active class to give toggle behaviour to first two option buttons in multiplication and division game
$("#btn-mul-div-1").click(function() {
    let btnIdList = ["#btn-mul-div-2", "#btn-mul-div-3", "#btn-mul-div-4", "#btn-mul-div-5", "#btn-mul-div-6", "#btn-mul-div-7", "#btn-mul-div-8", "#btn-mul-div-9", "#btn-mul-div-10", "#btn-mul-div-11", "#btn-mul-div-12", "#btn-mul-div-13", "#btn-mul-div-14"]
    makeNotActive(btnIdList);
})
$("#btn-mul-div-2").click(function() {
    let btnIdList = ["#btn-mul-div-1", "#btn-mul-div-3", "#btn-mul-div-4", "#btn-mul-div-5", "#btn-mul-div-6", "#btn-mul-div-7", "#btn-mul-div-8", "#btn-mul-div-9", "#btn-mul-div-10", "#btn-mul-div-11", "#btn-mul-div-12", "#btn-mul-div-13", "#btn-mul-div-14"]
    makeNotActive(btnIdList);
})
let mdBtnIdList = ["#btn-mul-div-3", "#btn-mul-div-4", "#btn-mul-div-5", "#btn-mul-div-6", "#btn-mul-div-7", "#btn-mul-div-8", "#btn-mul-div-9", "#btn-mul-div-10", "#btn-mul-div-11", "#btn-mul-div-12", "#btn-mul-div-13", "#btn-mul-div-14"]
for (mdBtn of mdBtnIdList) {
    $(mdBtn).click(function() {
        let btnIdList = ["#btn-mul-div-1", "#btn-mul-div-2"]
        makeNotActive(btnIdList);
    })
}

// Remove active class to give toggle behaviour to first four option buttons in addition and subtraction mode
$("#btn-add-sub-1").click(function() {
    let btnIdList = ["#btn-add-sub-2", "#btn-add-sub-3", "#btn-add-sub-4"]
    makeNotActive(btnIdList);
})
$("#btn-add-sub-2").click(function() {
    let btnIdList = ["#btn-add-sub-1", "#btn-add-sub-3", "#btn-add-sub-4"]
    makeNotActive(btnIdList);
})
$("#btn-add-sub-3").click(function() {
    let btnIdList = ["#btn-add-sub-1", "#btn-add-sub-2", "#btn-add-sub-4"]
    makeNotActive(btnIdList);
})
$("#btn-add-sub-4").click(function() {
    let btnIdList = ["#btn-add-sub-1", "#btn-add-sub-2", "#btn-add-sub-3"]
    makeNotActive(btnIdList);
})

// Game Event Handlers

// On click event added to balloon answer text divs to check the selected answer
$("#balloon-answer-text-left-1").on("click", checkSelectedAnswer);
$("#balloon-answer-text-left-2").on("click", checkSelectedAnswer);
$("#balloon-answer-text-left-3").on("click", checkSelectedAnswer);
$("#balloon-answer-text-right-1").on("click", checkSelectedAnswer);
$("#balloon-answer-text-right-2").on("click", checkSelectedAnswer);
$("#balloon-answer-text-right-3").on("click", checkSelectedAnswer);

// On click event added to game mode options button to hide game section and show heading and options sections
$("#btn-game-section-options").on("click", returnToMenu);

// On click event added to mute button to toggle audio mute
$("#mute").on("click", muteAudioToggle);
