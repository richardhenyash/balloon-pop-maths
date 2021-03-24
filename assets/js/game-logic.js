/**
* @fileOverview JavaScript Game Logic Function Library.
* @author <a href="https://github.com/richardhenyash">Richard Ash</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */
/* globals $, bpmGameMode: true, bpmQno: true, bpmDifficulty: true, bpmActiveButtons: true, bpmOptionArray: true */
/* globals bpmQArray: true, bpmHealthArray: true, bpmCQ: true, bpmQCurrent: true, bpmAnswerArray: true, bpmScoreArray: true */
/* globals returnGameMode, returnQuestions, returnDifficulty, returnActiveButtons, returnOptionArray, returnQuestionArray */
/* globals initialiseHealthBar, setQuestion, answerArray, setBalloons, setScore, returnCanvasID, getHighScore, soundPop */
/* globals animateBalloon, checkHighScore, setHighScore, soundHighScore, soundUnlucky, soundWellDone, returnToMenu, setHealthBar */
/* globals soundDeflate */

/**
* [Function to launch game]
* @return {[array]}                     [Score array - array of 2 numbers, score and number of questions]          
*/
function playGame() {
    // Show all balloon canvas elements
    $("[id^=canvas-balloon]").show();
    // Show all balloon text elements
    $("[id^=balloon-answer-text]").show();
    // Set global variables 
    bpmGameMode = returnGameMode();
    bpmQno = returnQuestions();
    bpmDifficulty = returnDifficulty();
    bpmActiveButtons = returnActiveButtons(bpmGameMode);
    bpmOptionArray = returnOptionArray(bpmActiveButtons);
    bpmQArray = returnQuestionArray(bpmGameMode, bpmOptionArray, bpmQno);
    bpmHealthArray = initialiseHealthBar(bpmDifficulty);
    bpmCQ = 0;
    bpmQCurrent = setQuestion(bpmQArray[bpmCQ]);
    bpmAnswerArray = answerArray(bpmGameMode, bpmQCurrent);
    bpmAnswerArray = setBalloons(bpmAnswerArray);
    bpmScoreArray = setScore([0, bpmQno]);
    // Log global variables to console for debugging
    // console.log(bpmGameMode);
    // console.log(bpmQno);
    // console.log(bpmDifficulty);
    // console.log(bpmActiveButtons);
    // console.log(bpmOptionArray);
    // console.log(bpmQArray);
    // console.log(bpmHealthArray);
    // console.log(bpmQCurrent);
    // console.log(bpmAnswerArray);
    // console.log(bpmScoreArray);
    // Hide heading section and options section
    $("#heading-section").hide(400);
    $("#options-section").hide(400);
    $("#information-section").hide(400);
    // Show game section
    $("#game-section").hide();
    $("#game-section").removeClass("d-none");
    $("#game-section").show(1000);     
    // Return score array
    return bpmScoreArray;
}

/**
* [Function to check selected answer on click of balloon]   
*/
function checkSelectedAnswer() {
    // Add "#" to ID
    let answerTextID = "#"+ (this.id);
    // Get canvas ID
    let canvasID = "#"+ returnCanvasID(answerTextID);
    // Set selected answer
    let sAnswer = this.innerHTML;
    // Set high score
    let highScore = getHighScore();
    // Initialise current score
    let currentScore;
    // Check selected answer against correct answer from current question array
    // If answer is correct
    if (sAnswer == bpmQCurrent[1]) {
        // Play balloon popping sound
        soundPop.play();
        // Show balloon popping animation
        let balloonTimeout = animateBalloon(canvasID);
        // Log to console for debugging
        // console.log("Correct!");
        // Set current score
        currentScore = bpmScoreArray[0];
        // Update global score array variable bpmScoreArray
        bpmScoreArray = setScore([(currentScore + 1), bpmScoreArray[1]]);
        // Update global current question variable bpmCQ
        bpmCQ = bpmCQ + 1;
        // If current question is less than total questions
        if (bpmCQ < bpmQno) {
            // Show all balloon canvas elements
            $("[id^=canvas-balloon]").fadeIn("fast");
            // Show all balloon text elements
            $("[id^=balloon-answer-text]").fadeIn("fast");
            // Set current question, store in bpmQCurrent global variable
            bpmQCurrent = setQuestion(bpmQArray[bpmCQ]);
            // Get answer array, store in bpmAnswerArray global variable
            bpmAnswerArray = answerArray(bpmGameMode, bpmQCurrent);
            // Set balloon text using answer array
            bpmAnswerArray = setBalloons(bpmAnswerArray);
        } else {
            // Log to console for debugging
            // console.log("Well Done! - you scored " +  bpmScoreArray[0] + " out of " + bpmScoreArray[1] + "!") //
            // Check if score is a new high score
            if (checkHighScore(highScore, bpmScoreArray)) {
                // Set high score
                setHighScore(bpmScoreArray);
                // Set modal heading to high score
                $("#modal-feedback-heading-text").text("Awesome - New High Score!!!");
                // Play high score sound
                soundHighScore.play();
            } else { 
                // If score is less than 4               
                if ((bpmScoreArray[0]) < 4) {
                    // Set modal heading to unlucky
                    $("#modal-feedback-heading-text").text("Unlucky - try again!!");
                    // Play unlucky sound
                    soundUnlucky.play();
                } else {
                    // Otherwise set modal heading to well done
                    $("#modal-feedback-heading-text").text("Well Done!!");
                    // Play well done sound
                    soundWellDone.play();
                }
            }
            // Set modal body text to score out of number of questions asked
            $("#modal-feedback-body-text").text("You scored " +  bpmScoreArray[0] + " out of " + bpmScoreArray[1] + "!");
            // Display feedback modal
            $('#modal-feedback').modal();
            // Return to menu
            returnToMenu();
        }
    } else {
        // Answer is incorrect
        // Log to console for debugging
        // console.log("Wrong!")
        // Get current health
        let cHealth = bpmHealthArray[0];
        // If current health is greater than 0
        if (cHealth > 0) {
            // Fade out incorrect balloon answer text
            $(answerTextID).fadeOut("slow");
            // Fade out incorrect balloon canvas element
            $(canvasID).fadeOut("slow");
            // Update health array
            let healthArray = [(cHealth - 1), bpmHealthArray[1]];
            // Set health bar, set bpmHealthArray global variable to new health
            bpmHealthArray = setHealthBar(healthArray);
            // Play deflate sound
            soundDeflate.play();
        } else {
            // Check high score
            if (checkHighScore(highScore, bpmScoreArray)) {
                // Set high score
                setHighScore(bpmScoreArray);
                // Set modal heading to high score
                $("#modal-feedback-heading-text").text("Awesome - New High Score!!!");
                // Play high score sound
                soundHighScore.play();
            } else {
                // If score is less than 4  
                if ((bpmScoreArray[0]) < 4) {
                    // Set modal heading to unlucky
                    $("#modal-feedback-heading-text").text("Unlucky - try again!!");
                    // Play unlucky sound
                    soundUnlucky.play();
                } else {
                    // Otherwise set modal heading to well done
                    $("#modal-feedback-heading-text").text("Well Done!!");
                    // Play well done sound
                    soundWellDone.play();
                }
            }
            // Set modal body text to score out of number of questions asked
            $("#modal-feedback-body-text").text("You scored " +  bpmScoreArray[0] + " out of " + bpmScoreArray[1] + "!");
            // Display feedback modal
            $('#modal-feedback').modal();
            // Return to menu
            returnToMenu();
        }
    }
}
