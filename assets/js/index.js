/** Function to return to menu - hides game section and shows heading and options **/
function returnToMenu() {
    $("#game-section").hide(400);   
    $("#heading-section").show(400);
    $("#options-section").show(400);
}

/** Function to hide multiplication and division option buttons and show option buttons for addition and subtraction game **/
function modeAddSubtract() {
   $("#options-multiply-divide").hide(400);
   $("#options-add-subtract").show(400);
    makeActive("#btn-mul-div-1");
}

/** Function to hide addition and subtraction option buttons and show option buttons for multiplication game **/
function modeMultiply()
 {
    $("#options-add-subtract").hide(400);
    $("#options-multiply-divide").show(400);
    makeActive("#btn-mul-div-1");
    $("#btn-mul-div-1").html("2x, 5x, 10x")
    $("#btn-mul-div-2").html("Mixed 1 to 12");
    $("#btn-mul-div-3").html("1x");
    $("#btn-mul-div-4").html("7x");
    $("#btn-mul-div-5").html("2x");
    $("#btn-mul-div-6").html("8x");
    $("#btn-mul-div-7").html("3x");
    $("#btn-mul-div-8").html("9x");
    $("#btn-mul-div-9").html("4x");
    $("#btn-mul-div-10").html("10x");
    $("#btn-mul-div-11").html("5x");
    $("#btn-mul-div-12").html("11x");
    $("#btn-mul-div-13").html("6x");
    $("#btn-mul-div-14").html("12x");
}

/** Function to hide addition and subtraction option buttons and show option buttons for division game **/
function modeDivide() {
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
}

/** Function to make the passed button active, and all other buttons not active. **/
function makeActive(btnId) {
    let btnIdList = ["#btn-mul-div-1", "#btn-mul-div-2", "#btn-mul-div-3", "#btn-mul-div-4", "#btn-mul-div-5", "#btn-mul-div-6", "#btn-mul-div-7", "#btn-mul-div-8", "#btn-mul-div-9", "#btn-mul-div-10", "#btn-mul-div-11", "#btn-mul-div-12", "#btn-mul-div-13", "#btn-mul-div-14"]
    makeNotActive(btnIdList);
    $(btnId).addClass("active").attr("aria-pressed", "true");
    return(btnId);
}

/** Function to make the passed list of buttons not active**/
function makeNotActive(btnIdList) {
    for (let btnId of btnIdList) {
        $(btnId).removeClass("active").removeClass("focus").attr("aria-pressed", "false");
    }
    return(btnIdList);
}

/** Function to activate #btn-mul-div-1 if all other buttons are inactive. **/
function checkButtons(gameMode) {
    if ((returnActiveButtons(gameMode).length) === 0) {
        if (gameMode == "add" || gameMode == "subtract") {
            $("#btn-add-sub-1").addClass("active").addClass("focus").attr("aria-pressed", "true");    
        } else $("#btn-mul-div-1").addClass("active").addClass("focus").attr("aria-pressed", "true");
    }
}

/** Function to toggle audio mute.  **/
function muteAudioToggle(){
    if (bpmSoundEffectsMuted == false) {
        soundPop.muted = true;
        soundDeflate.muted = true;
        soundHighScore.muted = true;
        soundUnlucky.muted = true;
        soundWellDone.muted = true;
        $(this).removeClass("fa-volume-off").addClass("fas fa-volume-mute");
        bpmSoundEffectsMuted = true;
    } else {
        soundPop.muted = false;
        soundDeflate.muted = false;
        soundHighScore.muted = false;
        soundUnlucky.muted = false;
        soundWellDone.muted = false;
        $(this).removeClass("fa-volume-mute").addClass("fas fa-volume-off");
        bpmSoundEffectsMuted = false;
    }
}

/** Function to return selected game mode. **/
function returnGameMode() {
    let gameMode = "";
    if ($("#multiply").hasClass("active")) {
        gameMode = "multiply";
    } else if ($("#divide").hasClass("active")) {
        gameMode = "divide";
    } else if ($("#add").hasClass("active")) {
        gameMode = "add";
    } else if ($("#subtract").hasClass("active")) {
        gameMode = "subtract";
    }
    return(gameMode);
}

/** Function to return selected difficulty level. **/
function returnDifficulty() {
    let difficulty = "";
    if ($("#easy").hasClass("active")) {
        difficulty = "easy";
    } else if ($("#medium").hasClass("active")) {
        difficulty = "medium";
    } else if ($("#hard").hasClass("active")) {
        difficulty = "hard";
    } 
    return(difficulty);
}

/** Function to return number of questions. **/
function returnQuestions() {
    let qno = "";
    if ($("#10q").hasClass("active")) {
        qno = 10;
    } else if ($("#20q").hasClass("active")) {
        qno = 20;
    }
    return(qno);
}

/** Function to return an array of active buttons with a defined id attribute. **/
function returnActiveButtons(gameMode) {
    let btnIdList = btnArray();
    let btnActiveArray = [];
    for (let btnId of btnIdList) {
        btnId = "#" + btnId
        if ($(btnId).hasClass("active")) {
            if ((gameMode == "add" || gameMode == "subtract") && ((btnId.substring(1, 12)) == "btn-add-sub")) {
                btnActiveArray.push(btnId)
            }
            if ((gameMode == "multiply" || gameMode == "divide") && ((btnId.substring(1, 12)) == "btn-mul-div")) {
                btnActiveArray.push(btnId)
            }
        }
    }
    return(btnActiveArray);
}

/** Function to return an array of all buttons with a defined id attribute. **/
function btnArray() {
    let btnArray = [];
    $(':button.btn-xl').each(function() {
        let btnId = (this.id);
        if (btnId != "") {
            btnArray.push(btnId)
        }
    });
    return btnArray;
}

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
    console.log(bpmGameMode);
    console.log(bpmQno);
    console.log(bpmDifficulty);
    console.log(bpmActiveButtons);
    console.log(bpmOptionArray);
    console.log(bpmQArray);
    console.log(bpmHealthArray);
    console.log(bpmQCurrent);
    console.log(bpmAnswerArray);
    console.log(bpmScoreArray);

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
    console.log("test click event");
    let answerTextID = "#"+ (this.id);
    console.log(answerTextID);
    let canvasID = "#"+ returnCanvasID(answerTextID);
    console.log(canvasID);
    let sAnswer = this.innerHTML;
    console.log(sAnswer);
    let highScore = getHighScore();
    let currentScore;
    if (sAnswer == bpmQCurrent[1]) {
        soundPop.play();
        let balloonTimeout = animateBalloon(canvasID);
        console.log("Correct!");
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
            console.log("Well Done! - you scored " +  bpmScoreArray[0] + " out of " + bpmScoreArray[1] + "!")
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
        console.log("Wrong!")
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


/** Function to generate options array from Active Buttons  **/
function returnOptionArray (activeButtons) {
    let optionArray = []
    for (let [key, btnId] of Object.entries(activeButtons)) {
        optionArray.push($(btnId).text());
    }
    return(optionArray);
}

/** Function to return random question array, given game mode, options and number of questions **/
function returnQuestionArray (gameMode, optionArray, qno) {
    let questionArray = []
    if (gameMode == "multiply") {
        questionArray = returnMultiplicationQuestionArray(optionArray, qno);
    } else if (gameMode == "divide") {
        questionArray = returnDivisionQuestionArray(optionArray, qno);
    } else if (gameMode == "add") {
        questionArray = returnAdditionQuestionArray(optionArray, qno);        
    } else if (gameMode == "subtract") {
        questionArray = returnSubtractionQuestionArray(optionArray, qno);        
    }
    return(questionArray);
}

/** Function to return random multiplication question array, given options and number of questions **/
function returnMultiplicationQuestionArray (optionArray, qno) {
    let mqArray = [];
    if (optionArray[0] == "2x, 5x, 10x") {
        let remq = (qno % 3)
        let no2xQ = Math.floor(qno / 3) + remq;
        let no5xQ = Math.floor(qno / 3);
        let no10xQ = Math.floor(qno / 3);
        let ttq;
        for (i = 0; i < no2xQ; i++) {
            ttq = returnMultiplicationQuestion(2);
            mqArray.push(ttq);
        }
        for (i = 0; i < no5xQ; i++) {
            ttq = returnMultiplicationQuestion(5);
            mqArray.push(ttq);
        }
        for (i = 0; i < no10xQ; i++) {
            ttq = returnMultiplicationQuestion(10);
            mqArray.push(ttq);
        }
    } else if (optionArray[0] == "Mixed 1 to 12") {
        let ttno
        let ttq
        for (i = 0; i < qno; i++) {
            ttno = Math.floor((Math.random() * 12) + 1);
            ttq = returnMultiplicationQuestion(ttno);
            mqArray.push(ttq);
        }
    } else {
        let ttk = 0;
        let ttqstr;
        let ttqstrnew;
        for (i = 0; i < qno; i++) {
            ttqstr = (optionArray[ttk]);
            ttqstrnew = ttqstr.substring(0, ttqstr.length - 1);
            ttq = returnMultiplicationQuestion(ttqstrnew);
            mqArray.push(ttq);
            if (ttk < (optionArray.length - 1)) {
                ttk = (ttk + 1);
            } else {
                ttk = 0;
            }
        }
    }
    return(mqArray);
}

/** Function to return random question array, given game mode, options and number of questions **/
function returnQuestionArray (gameMode, optionArray, qno) {
    let questionArray = []
    if (gameMode == "multiply") {
        questionArray = returnMultiplicationQuestionArray(optionArray, qno);
    } else if (gameMode == "divide") {
        questionArray = returnDivisionQuestionArray(optionArray, qno);
    } else if (gameMode == "add") {
        questionArray = returnAdditionQuestionArray(optionArray, qno);        
    } else if (gameMode == "subtract") {
        questionArray = returnSubtractionQuestionArray(optionArray, qno);        
    }
    questionArray = shuffleArray(questionArray);
    return(questionArray);

}

/** Function to return random division question array, given options and number of questions **/
function returnDivisionQuestionArray (optionArray, qno) {
    let dqArray = [];
    if ((optionArray[0].substring(1, 2) == "2") && (optionArray[0].substring(5, 6) == "5") && (optionArray[0].substring(9, 11) == "10")) {
        let remq = (qno % 3)
        let no2Q = Math.floor(qno / 3) + remq;
        let no5Q = Math.floor(qno / 3);
        let no10Q = Math.floor(qno / 3);
        let dq;
        for (i = 0; i < no2Q; i++) {
            dq = returnDivisionQuestion(2);
            dqArray.push(dq);
        }
        for (i = 0; i < no5Q; i++) {
            dq = returnDivisionQuestion(5);
            dqArray.push(dq);
        }
        for (i = 0; i < no10Q; i++) {
            dq = returnDivisionQuestion(10);
            dqArray.push(dq);
        }
    } else if (optionArray[0] == "Mixed 1 to 12") {
        let dno
        let dq
        for (i = 0; i < qno; i++) {
            dno = Math.floor((Math.random() * 12) + 1);
            dq = returnDivisionQuestion(dno);
            dqArray.push(dq);
        }
    } else {
        let dk = 0;
        let dqstr;
        let dqstrnew;
        for (i = 0; i < qno; i++) {
            dqstr = (optionArray[dk]);
            dqstrnew = dqstr.substring(1, dqstr.length);
            dq = returnDivisionQuestion(dqstrnew);
            dqArray.push(dq);
            if (dk < (optionArray.length - 1)) {
                dk = (dk + 1);
            } else {
                dk = 0;
            }
        }
    }
    return(dqArray);
}

/** Function to return random addition question and answer array, given options and number of questions **/
function returnAdditionQuestionArray (optionArray, qno) {
    let aqArray = [];
    let aq;
    for (i = 0; i < qno; i++) {
        if (optionArray[0] == "Mixed to 10") {
            aq =  returnAdditionQuestion(10);
            aqArray.push(aq);
        } else if (optionArray[0] == "Mixed to 20") {
            aq =  returnAdditionQuestion(20);
            aqArray.push(aq);
        } else if (optionArray[0] == "Mixed to 50") {
            aq =  returnAdditionQuestion(50);
            aqArray.push(aq);
        } else if (optionArray[0] == "Mixed to 100") {
            aq =  returnAdditionQuestion(100);
            aqArray.push(aq);
        }
    }
    return(aqArray);
}

/** Function to return random subtraction question and answer array, given options and number of questions **/
function returnSubtractionQuestionArray (optionArray, qno) {
    let sqArray = [];
    let sq;
    for (i = 0; i < qno; i++) {
        if (optionArray[0] == "Mixed to 10") {
            sq =  returnSubtractionQuestion(10);
            sqArray.push(sq);
        } else if (optionArray[0] == "Mixed to 20") {
            sq =  returnSubtractionQuestion(20);
            sqArray.push(sq);
        } else if (optionArray[0] == "Mixed to 50") {
            sq =  returnSubtractionQuestion(50);
            sqArray.push(sq);
        } else if (optionArray[0] == "Mixed to 100") {
            sq =  returnSubtractionQuestion(100);
            sqArray.push(sq);
        }
    }
    return(sqArray);
}

/** Function to return random multiplication question and answer array from 1 to 12, given times table number **/
function returnMultiplicationQuestion(tno) {
    let ttno = Math.floor((Math.random() * 12) + 1);
    let ttqStr = tno.toString() + " x " + ttno.toString();
    let ttAnswer = (tno * ttno);
    let mq = [ttqStr, ttAnswer];
    return mq;
}

/** Function to return random division question and answer array from 1 to 12, given division table number **/
function returnDivisionQuestion(dno) {
    let dtno = Math.floor((Math.random() * 12) + 1);
    let dsum = dtno * dno;
    let dqStr = dsum.toString() + " &divide " + dno.toString();
    let dAnswer = (dtno);
    let dq = [dqStr, dAnswer];
    return dq;
}

/** Function to return random addition question and answer array, given maximum sum **/
function returnAdditionQuestion(maxsum) {
    let no1 = Math.floor((Math.random() * (maxsum / 2)) + 1);
    let no2 = Math.floor((Math.random() * (maxsum / 2)) + 1);
    let aqStr = no1.toString() + " + " + no2.toString();
    let aqAnswer = (no1 + no2);
    let aq = [aqStr, aqAnswer];
    return aq;
}

/** Function to return random subtraction question and answer array, given maximum sum **/
function returnSubtractionQuestion(maxsum) {
    let no1 = Math.floor((Math.random() * maxsum) + 1);
    let no2 = Math.floor((Math.random() * maxsum) + 1);
    let minno = Math.min(no1, no2);
    let maxno = Math.max(no1, no2);
    let mqStr = maxno.toString() + " - " + minno.toString();
    let mqAnswer = (maxno - minno);
    let mq = [mqStr, mqAnswer];
    return mq;
}

/** Function to randomize an array in place using the Durstenfeld shuffle algorithm **/
/** Function referenced from stack overflow link below, many thanks to Laurens Holst **/
/** https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array **/
function shuffleArray(array) {
    let j;
    for (let i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return(array);
}

/** Function to initialise health bar, given difficulty level **/
function initialiseHealthBar(difficulty) {
    let healthArray;
    if (difficulty == "easy") {
        healthArray = [5, 5];
        $("#heart1").show();
        $("#heart2").show();
        $("#heart3").show();
        $("#heart4").show();
        $("#heart5").show();
    } else if (difficulty == "medium") {
        healthArray = [3, 3];
        $("#heart1").show();
        $("#heart2").show();
        $("#heart3").show();
        $("#heart4").hide();
        $("#heart5").hide();
    } else if (difficulty == "hard") {
        healthArray = [1, 1];
        $("#heart1").show();
        $("#heart2").hide();
        $("#heart3").hide();
        $("#heart4").hide();
        $("#heart5").hide();
    }
    setHealthBar(healthArray);
    return healthArray;
}

/** Function to set health bar, given an array of 2 integers from 1 to 5 **/
function setHealthBar(healthArray) {
    let currentHealth = healthArray[0];
    let totalHealth = healthArray[1];
    let hdiff = healthArray[1] - healthArray[0];
    let i;
    for (i = 1; i < (totalHealth + 1); i++) {
        hstr = "#heart" + i;
        $(hstr).removeClass("far fa-heart").addClass("fas fa-heart");
    }
    for (i = (currentHealth + 1); i < (totalHealth + 1); i++) {
        hstr = "#heart" + i;
        $(hstr).removeClass("fas fa-heart").addClass("far fa-heart");
    }
    return(healthArray);
}

/** Function to check high score, returns true or false**/
function checkHighScore(highScore, scoreArray) {
    let res;
    if (
            ((scoreArray[0] / scoreArray[1]) > (highScore[0] / highScore[1])) || 
            ((scoreArray[0] / scoreArray[1]) == ((highScore[0] / highScore[1])) && (scoreArray[1] > highScore[1]))
        ) {
        res = true;
    } else {
        res = false;
    }
    return res;
}

/** Function to get high score, returns an array of 2 integers**/
function getHighScore() {
    let scoreString = $("#highscore").text();
    let scoreArrayTemp = scoreString.split(" ");
    let scoreArray = [parseInt(scoreArrayTemp[2]), parseInt(scoreArrayTemp[4])];
    return scoreArray;
}

/** Function to set high score, given an array of 2 integers**/
function setHighScore(scoreArray) {
    let scoreString = "High Score: " + scoreArray[0] + " / " + scoreArray[1];
    $("#highscore").text(scoreString);
    return(scoreArray);
}

/** Function to set current score, given an array of 2 integers**/
function setScore(scoreArray) {
    let scoreString = "Score: " + scoreArray[0] + " / " + scoreArray[1];
    $("#score").text(scoreString);
    return(scoreArray);
}

/** Function to set current question, given a 2 item array of question and answer **/
function setQuestion(qCurrent) {
    let qString = qCurrent[0];
    $("#question").html(qString);
    return(qCurrent);
}

/** Function to set balloon text, given a 6 item array in random order with 5 wrong answers and 1 correct answer **/
function setBalloons(answerArray) {
    $("#balloon-answer-text-left-1").html(answerArray[0]);
    $("#balloon-answer-text-left-2").html(answerArray[1]);
    $("#balloon-answer-text-left-3").html(answerArray[2]);
    $("#balloon-answer-text-right-1").html(answerArray[3]);
    $("#balloon-answer-text-right-2").html(answerArray[4]);
    $("#balloon-answer-text-right-3").html(answerArray[5]);
    return(answerArray);
}

/** Function to generate array of 5 wrong answers and the correct answer, given game mode and current question**/
function answerArray(gameMode, qCurrent) {
    let answerArray = [];
    if (gameMode == "multiply") {
        answerArray = wrongAnswersMultiplication(qCurrent);
    } else if (gameMode == "divide") {
        answerArray = wrongAnswersDivision(qCurrent);
    } else if (gameMode == "add") {
        answerArray = wrongAnswersAddition(qCurrent);        
    } else if (gameMode == "subtract") {
        answerArray = wrongAnswersSubtraction(qCurrent);
    }
    answerArray.push(qCurrent[1])
    answerArray = shuffleArray(answerArray);
    return(answerArray);
}

/** Function to generate array of 5 wrong multiplication answers, given current question**/
function wrongAnswersMultiplication(qCurrent) {
    let qStr = qCurrent[0];
    let qStrArray = qStr.split(" ");
    let no1 = parseInt(qStrArray[0]);
    let no2 = parseInt(qStrArray[2]);
    let cA = qCurrent[1];
    let wrongAnswerArray = []
    if (no1 > 1) {
        wrongAnswerArray.push((no1 - 1) * no2);
    } else {
        wrongAnswerArray.push((no1 + 2) * no2);
    }
    if (no1 > 2) {
        wrongAnswerArray.push((no1 - 2) * no2);
    } else {
        wrongAnswerArray.push((no1 + 3) * no2);
    }
    wrongAnswerArray.push((no1 + 1) * no2);
    let minInt = ((no1 - 1) * no2);
    let maxInt = ((no1 + 1) * no2);
    if (maxInt < 10) {
        minInt = 0;
        maxInt = 10;
    }
    wrongAnswerArray = wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt);
    return(wrongAnswerArray);
}

/** Function to generate array of 5 wrong division answers, given current question**/
function wrongAnswersDivision(qCurrent) {
    let qStr = qCurrent[0];
    let qStrArray = qStr.split(" ");
    let no1 = parseInt(qStrArray[0]);
    let no2 = parseInt(qStrArray[2]);
    let cA = qCurrent[1];
    let minInt = 1;
    let maxInt = 12;
    if (no1 < 12) {
        maxInt = no1;
    }
    if (maxInt < 6) {
        maxInt = 6;
    }
    let wrongAnswerArray = [(cA - 1), (cA + 1), (cA + 2)];
    wrongAnswerArray = wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt);
    return(wrongAnswerArray);
}

/** Function to generate array of 5 wrong addition answers, given current question**/
function wrongAnswersAddition(qCurrent) {
    let qStr = qCurrent[0];
    let qStrArray = qStr.split(" ");
    let no1 = parseInt(qStrArray[0]);
    let no2 = parseInt(qStrArray[2]);
    let cA = qCurrent[1];
    let wrongAnswerArray = [(cA - 1), (cA + 1), (cA + 2)];
    let minInt = (Math.max(no1, no2)) + 1;
    let maxInt = (no1 + no2 + 6);
    wrongAnswerArray = wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt);
    return(wrongAnswerArray);    
}

/** Function to generate array of 5 wrong subtraction answers, given current question**/
function wrongAnswersSubtraction(qCurrent) {
    let qStr = qCurrent[0];
    let qStrArray = qStr.split(" ");
    let no1 = parseInt(qStrArray[0]);
    let no2 = parseInt(qStrArray[2]);
    let cA = qCurrent[1];
    let wrongAnswerArray = [(cA - 1), (cA + 1), (cA + 2)];
    let maxInt = no1 - 1;
    let minInt = 0;
    if (maxInt < 6) {
        maxInt = 6;
    }
    wrongAnswerArray = wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt);
    return(wrongAnswerArray); 
}

/** Function to populate wrong answer array with two randomly generated integers between the two integers given.
Generated random integers until a random integer not already in the array and not equal to the correct answer is found.
Returns completed wrong answer array **/
function wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt) {
    if ((maxInt - minInt) < 6) {
        maxInt = minInt + 6;
    }
    randomInt = getRandomIntInclusive(minInt, maxInt);
    while ((wrongAnswerArray.includes(randomInt)) || (randomInt == cA)) {
        randomInt = getRandomIntInclusive(minInt, maxInt);
    }
    wrongAnswerArray.push(randomInt);
    randomInt = getRandomIntInclusive(minInt, maxInt);
    while ((wrongAnswerArray.includes(randomInt)) || (randomInt == cA)) {
        randomInt = getRandomIntInclusive(minInt, maxInt);
    }
    wrongAnswerArray.push(randomInt);
    return(wrongAnswerArray);
}

/** Function to generate a random integer between the two integers given **/
/** Function referenced from MDN Web Docs link below **/
/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random **/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

/** Function to return an array of canvas width and height, given canvas element ID **/
function getCanvasSize(canvasID) {
    if (canvasID.substr(0, 1) != "#") {
        canvasID = "#" + canvasID;
    }
    let cW = $(canvasID).width();
    let cH = $(canvasID).height();
    let cArray = [cW, cH];
    return cArray;
}

/** Function to draw balloon image on the canvas, given canvasID, image and frame number **/
function drawBalloonImage(canvasID, img, fno) {
    if (canvasID.substr(0, 1) != "#") {
        canvasID = "#" + canvasID;
    }
    let beginX = 3072- (fno * 512);
    let canvasElement =  $(canvasID)[0];
    let canvasContext = canvasElement.getContext('2d');
    canvasContext.clearRect(0, 0, 300, 150);
    canvasContext.drawImage(img, beginX, 0, 512, 512, 0, 0, 300, 150);
}

/** Function to return canvasID, given balloon text div id **/
function returnCanvasID(answerTextID) {
    if (answerTextID.substr(0, 1) != "#") {
        answerTextID = "#" + answerTextID;
    }
    let sArray = $(answerTextID).siblings();
    let canvasID = sArray[0].id;
    return(canvasID);
}

/** Function to animate balloon popping image on the canvas, given canvasID and image **/
function animateBalloon(canvasID) {
    if (canvasID.substr(0, 1) != "#") {
        canvasID = "#" + canvasID;
    }
    let img;
    if (canvasID == "#canvas-balloon-left-1") {
        img = imgBalloonBlue;
        console.log("Blue");
    } else if (canvasID == "#canvas-balloon-left-2") {
        img = imgBalloonOrange;
        console.log("Orange");
    } else if (canvasID == "#canvas-balloon-left-3") {
        img = imgBalloonPurple;
        console.log("Purple");
    } else if (canvasID == "#canvas-balloon-right-1") {
        img = imgBalloonRed;
        console.log("Red");
    } else if (canvasID == "#canvas-balloon-right-2") {
        img = imgBalloonGreen;
        console.log("Green");
    } else if (canvasID == "#canvas-balloon-right-3") {
        img = imgBalloonYellow;
        console.log("Yellow");
    }
    let balloonTimeout; 
    balloonTimeout = setTimeout(drawBalloonImage, 25, canvasID, img, 1);        
    balloonTimeout = setTimeout(drawBalloonImage, 50, canvasID, img, 2);
    balloonTimeout = setTimeout(drawBalloonImage, 75, canvasID, img, 3);
    balloonTimeout = setTimeout(drawBalloonImage, 200, canvasID, img, 4);
    balloonTimeout = setTimeout(drawBalloonImage, 300, canvasID, img, 5);
    balloonTimeout = setTimeout(drawBalloonImage, 400, canvasID, img, 6); 
    balloonTimeout = setTimeout(drawBalloonImage, 500, canvasID, img, 1);
    return(balloonTimeout);
}

/** Function to initialise balloons on animation frame 1 **/
function initialiseBalloons() {
    $("[id^=canvas-balloon]").show();
    $("[id^=balloon-answer-text]").show();
    drawBalloonImage("canvas-balloon-left-1", imgBalloonBlue, 1);
    drawBalloonImage("canvas-balloon-left-2", imgBalloonOrange, 1);
    drawBalloonImage("canvas-balloon-left-3", imgBalloonPurple, 1);
    drawBalloonImage("canvas-balloon-right-1", imgBalloonRed, 1);
    drawBalloonImage("canvas-balloon-right-2", imgBalloonGreen, 1);
    drawBalloonImage("canvas-balloon-right-3", imgBalloonYellow, 1);
}
