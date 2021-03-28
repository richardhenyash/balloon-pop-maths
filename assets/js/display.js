/**
* @fileOverview JavaScript Display Interaction Function Library.
* @author <a href="https://github.com/richardhenyash">Richard Ash</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */
/* globals $ */

/**
* [Function to return to menu - hides game section and shows heading and options]
*/
function returnToMenu() {
    // Hide game section
    $("#game-section").hide(400);  
    // Show heading section 
    $("#heading-section").show(400);
    // Show options section 
    $("#options-section").show(400);
    // Show information section 
    $("#information-section").show(400);
}

/**
* [Function to hide multiplication and division options buttons and show options buttons for addition and subtraction game]
*/
function modeAddSubtract() {
    // Hide multiply and divide options
    $("#options-multiply-divide").hide(400);
    // Show add and subtract options
    $("#options-add-subtract").show(400);
    // Make first option button active
    makeActive("#btn-mul-div-1");
}

/**
* [Function to hide addition and subtraction options buttons and show options buttons for multiplication game]
*/
function modeMultiply()
 {
    // Hide add and subtract options
    $("#options-add-subtract").hide(400);
    // Show multiply and divide options
    $("#options-multiply-divide").show(400);
    // Make first option button active
    makeActive("#btn-mul-div-1");
    // Update button text values
    $("#btn-mul-div-1").html("2x, 5x, 10x");
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

/**
* [Function to hide addition and subtraction options buttons and show options buttons for division game]
*/
function modeDivide() {
    // Hide add and subtract options
    $("#options-add-subtract").hide(400);
    // Show multiply and divide options
    $("#options-multiply-divide").show(400);
    // Make first option button active
    makeActive("#btn-mul-div-1");
    // Update button text values
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

/**
* [Function to return an array of button id strings, given button prefix]
* @param  {[string]}   btnPrefix        [Button Prefix]
* @return {[array]}                     [Array of Button ID strings]
*/
function returnBtnIdArray(btnPrefix) {
    let btnArray = $(":button");
    let btnIdArray = [];
    let i = 0;
    for (i = 0; i < btnArray.length; i++) {
        if (((btnArray[i].id).search(btnPrefix)) > -1) {
            btnIdArray.push("#" + btnArray[i].id);
        }
    }     
    return(btnIdArray);
}

/**
* [Function to make the passed button active, and all other buttons not active]
* @param  {[string]}   btnId            [Button ID]
* @return {[string]}                    [Button ID]
*/
function makeActive(btnId) {
    // Set button ID array
    let btnIdArray = ["#btn-mul-div-1", "#btn-mul-div-2", "#btn-mul-div-3", "#btn-mul-div-4", "#btn-mul-div-5", "#btn-mul-div-6", "#btn-mul-div-7", "#btn-mul-div-8", "#btn-mul-div-9", "#btn-mul-div-10", "#btn-mul-div-11", "#btn-mul-div-12", "#btn-mul-div-13", "#btn-mul-div-14"];
    // Make all buttons in button ID array not active
    makeNotActive(btnIdArray);
    // Make passed button active
    $(btnId).addClass("active").attr("aria-pressed", "true");
    return(btnId);
}

/**
* [Function to make the passed button active, and all other buttons not active]
* @param  {[array]}   btnIdArray        [Array of Button ID strings]
* @return {[array]}                     [Array of Button ID strings]
*/
function makeNotActive(btnIdArray) {
    // Iterate through passed button array, make each button not active
    for (let btnId of btnIdArray) {
        $(btnId).removeClass("active").removeClass("focus").attr("aria-pressed", "false");
    }
    return(btnIdArray);
}

/**
* [Function to check if any other buttons with the .btn-mul-div-sticky class are selected]
* @param  {[string]}   btnId            [Button ID]
* @return {[boolean]}                   [Boolean indicating if any other buttons with the .btn-mul-div-sticky class are selected]
*/
function checkOtherStickyButtons(btnId) {
    let mdbtnIdArray = $(".btn-mul-div-sticky");
    let activeFlag = false;
    let i = 0;
    while ((activeFlag == false) && (i < mdbtnIdArray.length)) {
        if (((mdbtnIdArray[i].id) !== btnId) && (mdbtnIdArray[i].classList.contains("active"))) {
            activeFlag = true;
        }
        i++;
    }
    return(activeFlag);
}

/**
* [Function to return selected game mode]
* @return {[string]}                    [Selected game mode]
*/
function returnGameMode() {
    let gameMode = "";
    // Check active class and set game mode
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

/**
* [Function to return selected difficulty level]
* @return {[string]}                    [Selected difficulty level]
*/
function returnDifficulty() {
    let difficulty = "";
    // Check active class and set difficulty
    if ($("#easy").hasClass("active")) {
        difficulty = "easy";
    } else if ($("#medium").hasClass("active")) {
        difficulty = "medium";
    } else if ($("#hard").hasClass("active")) {
        difficulty = "hard";
    } 
    return(difficulty);
}

/**
* [Function to return selected number of questions]
* @return {[number]}                    [Selected number of questions]
*/
/** Function to return number of questions. **/
function returnQuestions() {
    let qno = "";
    // Check active class and set number of questions
    if ($("#10q").hasClass("active")) {
        qno = 10;
    } else if ($("#20q").hasClass("active")) {
        qno = 20;
    }
    return(qno);
}

/**
* [Function to return an array of active button ID strings]
* @param  {[string]}   gameMode         [Game mode]
* @return {[array]}                     [Array of active Button ID strings]
*/
function returnActiveButtons(gameMode) {
    // Return array of all buttons with a defined ID attribute
    let btnIdArray = btnArray();
    // Initialise active button array
    let btnActiveArray = [];
    for (let btnId of btnIdArray) {
        // Add "#" to button ID
        btnId = "#" + btnId;
        // Check if button is active, and add to array of it is
        if ($(btnId).hasClass("active")) {
            if ((gameMode == "add" || gameMode == "subtract") && ((btnId.substring(1, 12)) == "btn-add-sub")) {
                btnActiveArray.push(btnId);
            }
            if ((gameMode == "multiply" || gameMode == "divide") && ((btnId.substring(1, 12)) == "btn-mul-div")) {
                btnActiveArray.push(btnId);
            }
        }
    }
    return(btnActiveArray);
}

/**
* [Function to return an array of all button ID strings for all buttons with a defined id attribute]
* @return {[array]}                     [Array of Button ID strings]
*/
function btnArray() {
    // Initialise button array
    let btnArray = [];
    // Iterate through each button and add ID to button array if it has a defined ID
    $(':button.btn-xl').each(function() {
        let btnId = (this.id);
        if (btnId != "") {
            btnArray.push(btnId);
        }
    });
    return btnArray;
}

/**
* [Function to return options array, given array of active button ID's]
* @param  {[string]}    activeButtons   [Array of active button ID strings]
* @return {[array]}                     [Array of active option button text value strings]
*/
function returnOptionArray (activeButtons) {
    // Initialise option array
    let optionArray = [];
    // Iterate through active button array, get button text value and add to option array
    for (let [key, btnId] of Object.entries(activeButtons)) {
        optionArray.push($(btnId).text());
        key = key;
    }
    return(optionArray);
}

/**
* [Function to initialise health bar, given difficulty level]
* @param  {[string]}    difficulty      [Difficulty level]
* @return {[array]}                     [Health array - array of 2 integers, current health and total health]
*/
function initialiseHealthBar(difficulty) {
    // Initialise health array
    let healthArray;
    // Check difficulty level
    if (difficulty == "easy") {
        // If difficulty level is "easy", initialise health bar with 5 hearts
        healthArray = [5, 5];
        $("#heart1").show();
        $("#heart2").show();
        $("#heart3").show();
        $("#heart4").show();
        $("#heart5").show();
    } else if (difficulty == "medium") {
        // If difficulty level is "medium", initialise health bar with 3 hearts
        healthArray = [3, 3];
        $("#heart1").show();
        $("#heart2").show();
        $("#heart3").show();
        $("#heart4").hide();
        $("#heart5").hide();
    } else if (difficulty == "hard") {
        // If difficulty level is "hard", initialise health bar with 1 heart
        healthArray = [1, 1];
        $("#heart1").show();
        $("#heart2").hide();
        $("#heart3").hide();
        $("#heart4").hide();
        $("#heart5").hide();
    }
    // Set health bar, given health array of 2 integers from 1 to 5
    setHealthBar(healthArray);
    return healthArray;
}

/**
* [Function to set health bar, given an array of 2 integers from 1 to 5]
* @param  {[array]}   healthArray       [Health array - array of 2 integers, current health and total health]
* @return {[array]}                     [Health array - array of 2 integers, current health and total health]
*/
function setHealthBar(healthArray) {
    // Set current health
    let currentHealth = healthArray[0];
    // Set total health
    let totalHealth = healthArray[1];
    let i;
    let hstr;
    // iterate through all hearts, add "solid" heart icon
    for (i = 1; i < (totalHealth + 1); i++) {
        hstr = "#heart" + i;
        $(hstr).removeClass("far fa-heart").addClass("fas fa-heart");
    }
    // iterate through hearts, add "empty" heart icon to reflect current health
    for (i = (currentHealth + 1); i < (totalHealth + 1); i++) {
        hstr = "#heart" + i;
        $(hstr).removeClass("fas fa-heart").addClass("far fa-heart");
    }
    return(healthArray);
}

/**
* [Function to check high score, returns true or false]
* @param  {[array]}   highScore         [High score array - array of 2 integers, score and number of questions]
* @param  {[array]}   scoreArray        [Score array - array of 2 integers, score and number of questions]
* @return {[boolean]}                   [Boolean]
*/
function checkHighScore(highScore, scoreArray) {
    let res = false;
    // Check if current score is greater than high score. Check uses a ratio of score divided by number of questions.
    if (scoreArray[0] > 0) {
        if (
            ((scoreArray[0] / scoreArray[1]) > (highScore[0] / highScore[1])) || 
            ((scoreArray[0] / scoreArray[1]) == ((highScore[0] / highScore[1])) && (scoreArray[1] > highScore[1]))
            ) {
        res = true;
        } 
    }
    return res;
}

/**
* [Function to get high score, returns an array of 2 integers]
* @return {[array]}                     [Score array - array of 2 integers, score and number of questions]
*/
function getHighScore() {
    // Get current score string
    let scoreString = $("#highscore").text();
    // Split string into temporary array
    let scoreArrayTemp = scoreString.split(" ");
    // Initialise score array of 2 integers
    let scoreArray = [parseInt(scoreArrayTemp[2]), parseInt(scoreArrayTemp[4])];
    return scoreArray;
}

/**
* [Function to set high score, given an array of 2 integers]
* @param  {[array]}   scoreArray        [Score array - array of 2 integers, score and number of questions]
* @return {[array]}                     [Score array - array of 2 integers, score and number of questions]
*/
function setHighScore(scoreArray) {
    // Set score string from score array of 2 integers
    let scoreString = "High Score: " + scoreArray[0] + " / " + scoreArray[1];
    // Update high score
    $("#highscore").text(scoreString);
    return(scoreArray);
}

/**
* [Function to set current score, given an array of 2 integers]
* @param  {[array]}   scoreArray        [Score array - array of 2 integers, score and number of questions]
* @return {[array]}                     [Score array - array of 2 integers, score and number of questions]
*/
function setScore(scoreArray) {
    // Set score string from score array of 2 integers
    let scoreString = "Score: " + scoreArray[0] + " / " + scoreArray[1];
    $("#score").text(scoreString);
    // Update current score
    return(scoreArray);
}

/**
* [Function to set current question, given a 2 item array of question and answer]
* @param  {[array]}   qCurrent          [Current question array - 2 item array of question string and answer number]
* @return {[array]}                     [Current question array - 2 item array of question string and answer number]
*/
function setQuestion(qCurrent) {
    // Set question string from current question array
    let qString = qCurrent[0];
    // Update current question
    $("#question").html(qString);
    return(qCurrent);
}

/**
* [Function to set balloon text, given a 6 item array in random order with 5 wrong answers and 1 correct answer]
* @param  {[array]}   answerArray       [Answer array - 6 item array in random order with 5 wrong answer numbers and 1 correct answer number]
* @return {[array]}                     [Answer array - 6 item array in random order with 5 wrong answer numbers and 1 correct answer number]
*/
function setBalloons(answerArray) {
    // Set ballon text from answer array
    $("#balloon-answer-text-left-1").html(answerArray[0]);
    $("#balloon-answer-text-left-2").html(answerArray[1]);
    $("#balloon-answer-text-left-3").html(answerArray[2]);
    $("#balloon-answer-text-right-1").html(answerArray[3]);
    $("#balloon-answer-text-right-2").html(answerArray[4]);
    $("#balloon-answer-text-right-3").html(answerArray[5]);
    return(answerArray);
}
