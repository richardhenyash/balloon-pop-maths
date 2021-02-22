// On click event added to add and subtract buttons to switch to addition and subtraction options
$("#add").on("click", modeAddSubtract);
$("#subtract").on("click", modeAddSubtract);

// On click event added to play game when play button clicked
$("#play").on("click", playGame);

// Show additional multiplication and division option buttons and update option buttons for multiplication game
$("#multiply").click(function() {
    $("#options-multiply-divide").show("slow");
    makeActive("#btn-all-1");
    $("#btn-all-1").html("2x, 5x, 10x")
    $("#btn-all-2").html("Mixed 1 to 12");
    $("#btn-all-3").html("1x");
    $("#btn-all-4").html("7x");
    $("#btn-md-5").html("2x");
    $("#btn-md-6").html("8x");
    $("#btn-md-7").html("3x");
    $("#btn-md-8").html("9x");
    $("#btn-md-9").html("4x");
    $("#btn-md-10").html("10x");
    $("#btn-md-11").html("5x");
    $("#btn-md-12").html("11x");
    $("#btn-md-13").html("6x");
    $("#btn-md-14").html("12x");
})

// Show additional multiplication and division option buttons and update option buttons for division game
$("#divide").click(function() {
    $("#options-multiply-divide").show("slow");
    makeActive("#btn-all-1");
    $("#btn-all-1").html("&divide2, &divide5, &divide10");
    $("#btn-all-2").html("Mixed 1 to 12");
    $("#btn-all-3").html("&divide1");
    $("#btn-all-4").html("&divide7");
    $("#btn-md-5").html("&divide2");
    $("#btn-md-6").html("&divide8");
    $("#btn-md-7").html("&divide3");
    $("#btn-md-8").html("&divide9");
    $("#btn-md-9").html("&divide4");
    $("#btn-md-10").html("&divide10");
    $("#btn-md-11").html("&divide5");
    $("#btn-md-12").html("&divide11");
    $("#btn-md-13").html("&divide6");
    $("#btn-md-14").html("&divide12");
})

// Remove active class to give toggle behaviour to option buttons in addition and subtraction mode
$("#btn-all-1").click(function() {
    let gameMode = returnGameMode();
    if (gameMode === "add" || gameMode === "subtract") {
        let btnIdList = ["#btn-all-2", "#btn-all-3", "#btn-all-4"]
        makeNotActive(btnIdList);
    }
})

// Remove active class to give toggle behaviour to option buttons in addition and subtraction mode
$("#btn-all-2").click(function() {
    let gameMode = returnGameMode();
    if (gameMode === "add" || gameMode === "subtract") {
        let btnIdList = ["#btn-all-1", "#btn-all-3", "#btn-all-4"]
        makeNotActive(btnIdList);
    }
})

// Remove active class to give toggle behaviour to option buttons in addition and subtraction mode //
$("#btn-all-3").click(function() {
    let gameMode = returnGameMode();
    if (gameMode === "add" || gameMode === "subtract") {
        let btnIdList = ["#btn-all-1", "#btn-all-2", "#btn-all-4"]
        makeNotActive(btnIdList);
    }
})

// Remove active class to give toggle behaviour to option buttons in addition and subtraction mode //
$("#btn-all-4").click(function() {
    let gameMode = returnGameMode();
    if (gameMode === "add" || gameMode === "subtract") {
        let btnIdList = ["#btn-all-1", "#btn-all-2", "#btn-all-3"]
        makeNotActive(btnIdList);
    }
})

/** Function to hide additional multiplication and division option buttons and update option buttons for subtraction game **/
function modeAddSubtract() {
   $("#options-multiply-divide").hide("slow");
    makeActive("#btn-all-1");
    $("#btn-all-1").html("Mixed to 10");
    $("#btn-all-2").html("Mixed to 20");
    $("#btn-all-3").html("Mixed to 50");
    $("#btn-all-4").html("Mixed to 100");
}

/** Function to make the passed button active, and all other buttons not active. **/
function makeActive(btnId) {
    let btnIdList = ["#btn-all-1", "#btn-all-2", "#btn-all-3", "#btn-all-4", "#btn-md-5", "#btn-md-6", "#btn-md-7", "#btn-md-8", "#btn-md-9", "#btn-md-10", "#btn-md-11", "#btn-md-12", "#btn-md-13", "#btn-md-14"]
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

/** Function to activate #btn-all-1 if all other buttons are inactive . **/
function checkButtons() {
    let btnIdList = ["#btn-all-1", "#btn-all-2", "#btn-all-3", "#btn-all-4", "#btn-md-5", "#btn-md-6", "#btn-md-7", "#btn-md-8", "#btn-md-9", "#btn-md-10", "#btn-md-11", "#btn-md-12", "#btn-md-13", "#btn-md-14"]
    if ((returnActiveButtons().length) === 0) {
        $("#btn-all-1").addClass("active").addClass("focus").attr("aria-pressed", "true");        
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
function returnActiveButtons() {
    let btnIdList = btnArray();
    let btnActiveArray = [];
    for (let btnId of btnIdList) {
        btnId = "#" + btnId
        if ($(btnId).hasClass("active")) {
            btnActiveArray.push(btnId)
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
    checkButtons();
    let gameMode = returnGameMode();
    let btnIdList = ["#btn-all-1", "#btn-all-2", "#btn-all-3", "#btn-all-4", "#btn-md-5", "#btn-md-6", "#btn-md-7", "#btn-md-8", "#btn-md-9", "#btn-md-10", "#btn-md-11", "#btn-md-12", "#btn-md-13", "#btn-md-14"]
    let qno = returnQuestions();
    let difficulty = returnDifficulty();
    let activeButtons = returnActiveButtons();
    console.log(gameMode);
    console.log(qno);
    console.log(difficulty);
    console.log(activeButtons);
}
