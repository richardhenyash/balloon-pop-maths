// JavaScript Display Interaction Functions //

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

/** Function to generate options array from Active Buttons  **/
function returnOptionArray (activeButtons) {
    let optionArray = []
    for (let [key, btnId] of Object.entries(activeButtons)) {
        optionArray.push($(btnId).text());
    }
    return(optionArray);
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
