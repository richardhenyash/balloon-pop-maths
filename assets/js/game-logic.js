// JavaScript Game Logic Functions //

/** Function to launch game. **/
function playGame() {

    // Set global variables //  
    bpmGameMode = returnGameMode();
    checkButtons(bpmGameMode);
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

    // Log global variables to console for debugging //
    // console.log(bpmGameMode); //
    // console.log(bpmQno); //
    // console.log(bpmDifficulty); //
    // console.log(bpmActiveButtons); //
    // console.log(bpmOptionArray); //
    // console.log(bpmQArray); //
    // console.log(bpmHealthArray); //
    // console.log(bpmQCurrent); //
    // console.log(bpmAnswerArray); //
    // console.log(bpmScoreArray); //

    // Hide heading section and options section //
    $("#heading-section").hide(400);
    $("#options-section").hide(400);
    $("#game-section").hide();
    $("#game-section").removeClass( "d-none" )
    $("#game-section").show(1000); 
    
    //  display balloon animation frame 1 in each canvas element
    initialiseBalloons();
    return bpmScoreArray;
}

/** Function to check selected answer on click of balloon **/
function checkSelectedAnswer() {
    let answerTextID = "#"+ (this.id);
    let canvasID = "#"+ returnCanvasID(answerTextID);
    let sAnswer = this.innerHTML;
    let highScore = getHighScore();
    let currentScore;
    if (sAnswer == bpmQCurrent[1]) {
        soundPop.play();
        let balloonTimeout = animateBalloon(canvasID);
        // Log to console for debugging //
        // console.log("Correct!"); //
        currentScore = bpmScoreArray[0];
        bpmScoreArray = setScore([(currentScore + 1), bpmScoreArray[1]]);
        bpmCQ = bpmCQ + 1;
        if (bpmCQ < bpmQno) {
            $("[id^=canvas-balloon]").fadeIn("fast");
            $("[id^=balloon-answer-text]").fadeIn("fast");
            bpmQCurrent = setQuestion(bpmQArray[bpmCQ]);
            bpmAnswerArray = answerArray(bpmGameMode, bpmQCurrent);
            bpmAnswerArray = setBalloons(bpmAnswerArray);
        } else {
            // Log to console for debugging //
            // console.log("Well Done! - you scored " +  bpmScoreArray[0] + " out of " + bpmScoreArray[1] + "!") //
            // Display feedback modal //
            if (checkHighScore(highScore, bpmScoreArray)) {
                setHighScore(bpmScoreArray);
                $("#modal-feedback-heading-text").text("Awesome - New High Score!!!");
                soundHighScore.play();
            } else {                
                if ((bpmScoreArray[0]) < 4) {
                    $("#modal-feedback-heading-text").text("Unlucky - try again!!");
                    soundUnlucky.play();
                } else {
                    $("#modal-feedback-heading-text").text("Well Done!!");
                    soundWellDone.play();
                }
            }
            $("#modal-feedback-body-text").text("You scored " +  bpmScoreArray[0] + " out of " + bpmScoreArray[1] + "!");
            $('#modal-feedback').modal();
            returnToMenu();
        }
    } else {
        // Log to console for debugging //
        // console.log("Wrong!") //
        let cHealth = bpmHealthArray[0];
        if (cHealth > 0) {
            $(answerTextID).fadeOut("slow");
            $(canvasID).fadeOut("slow");
            let healthArray = [(cHealth - 1), bpmHealthArray[1]];
            bpmHealthArray = setHealthBar(healthArray);
            soundDeflate.play();
        } else {
            if (checkHighScore(highScore, bpmScoreArray)) {
                setHighScore(bpmScoreArray);
                $("#modal-feedback-heading-text").text("Awesome - New High Score!!!");
                soundHighScore.play();
            } else {                
                if ((bpmScoreArray[0]) < 4) {
                    $("#modal-feedback-heading-text").text("Unlucky - try again!!");
                    soundUnlucky.play();
                } else {
                    $("#modal-feedback-heading-text").text("Well Done!!");
                    soundWellDone.play();
                }
            }
            $("#modal-feedback-body-text").text("You scored " +  bpmScoreArray[0] + " out of " + bpmScoreArray[1] + "!");
            $('#modal-feedback').modal();
            returnToMenu();
        }
    }
}
