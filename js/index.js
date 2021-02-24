// Event handler to switch to Multiply mode when document is ready
$(document).ready(modeMultiply);

// On click event added to add and subtract buttons to switch to addition and subtraction options
$("#add").on("click", modeAddSubtract);
$("#subtract").on("click", modeAddSubtract);

// On click event added to multiply and divide buttons to switch to multiplication and division options
$("#multiply").on("click", modeMultiply);
$("#divide").on("click", modeDivide);

// On click event added to play game when play button clicked
$("#play").on("click", playGame);

// Show multiplication and division option buttons and update option buttons for division game
$("#divide").click(function() {
    $("#options-add-subtract").hide("slow");
    $("#options-multiply-divide").show("slow");
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

// Remove active class to give toggle behaviour to four option buttons in addition and subtraction mode
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

/** Function to hide multiplication and division option buttons and show option buttons for addition and subtraction game **/
function modeAddSubtract() {
   $("#options-multiply-divide").hide("slow");
   $("#options-add-subtract").show("slow");
    makeActive("#btn-mul-div-1");
}

/** Function to hide addition and subtraction option buttons and show option buttons for multiplication game **/
function modeMultiply()
 {
    $("#options-add-subtract").hide("slow");
    $("#options-multiply-divide").show("slow");
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
    $("#options-add-subtract").hide("slow");
    $("#options-multiply-divide").show("slow");
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

/** Function to activate #btn-mul-div-1 if all other buttons are inactive . **/
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
        qno = "10";
    } else if ($("#20q").hasClass("active")) {
        qno = "20";
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
    let gameMode = returnGameMode();
    checkButtons(gameMode);
    let qno = returnQuestions();
    let difficulty = returnDifficulty();
    let activeButtons = returnActiveButtons(gameMode);
    let optionArray = returnOptionArray(activeButtons);
    let qArray = returnQuestionArray(gameMode, optionArray, qno);
    console.log(gameMode);
    console.log(qno);
    console.log(difficulty);
    console.log(activeButtons);
    console.log(optionArray);
    console.log(qArray);
}

/** Function to generate options array from Active Buttons  **/
function returnOptionArray (activeButtons) {
    let optionArray = []
    for (let [key, btnId] of Object.entries(activeButtons)) {
        optionArray.push($(btnId).text());
    }
    return(optionArray);
}

/** Function to return random question array, given game mode, options and number of questions**/
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

/** Function to return random multiplication question array, given options and number of questions**/
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

/** Function to return random question array, given game mode, options and number of questions**/
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

/** Function to return random division question array, given options and number of questions**/
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

/** Function to return random multiplication question and answer array from 1 to 12, given times table number**/
function returnMultiplicationQuestion(tno) {
    let ttno = Math.floor((Math.random() * 12) + 1);
    let ttqStr = tno.toString() + " x " + ttno.toString();
    let ttAnswer = (tno * ttno);
    let mq = [ttqStr, ttAnswer];
    return mq
}

/** Function to return random division question and answer array from 1 to 12, given division table number**/
function returnDivisionQuestion(dno) {
    let dtno = Math.floor((Math.random() * 12) + 1);
    let dsum = dtno * dno;
    let dqStr = dsum.toString() + " &divide " + dno.toString();
    let dAnswer = (dtno);
    let dq = [dqStr, dAnswer];
    return dq
}

/** Function to return times table array, given times table number */
function returnTimesTableArray (tno) {
    ttArray = [];
    for (i = 0; i <13; i++) {
        ttArray.push (i * tno);
    }
    return(ttArray);
}

/** Function to randomly shuffle an array*/
/** https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array **/
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return(array);
}
