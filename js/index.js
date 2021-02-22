// Hide additional multiplication and division option buttons and update option buttons for addition game
$("#add").click(function() {
    $("#options-multiply-divide").hide("slow");
    $("#btn1").html("Mixed to 10").addClass("active").attr("aria-pressed", "true");
    $("#btn2").html("Mixed to 20").removeClass("active").attr("aria-pressed", "false");
    $("#btn3").html("Mixed to 50").removeClass("active").attr("aria-pressed", "false");
    $("#btn4").html("Mixed to 100").removeClass("active").attr("aria-pressed", "false");
    $("#btn5").removeClass("active").attr("aria-pressed", "false");
    $("#btn6").removeClass("active").attr("aria-pressed", "false");
    $("#btn7").removeClass("active").attr("aria-pressed", "false");
    $("#btn8").removeClass("active").attr("aria-pressed", "false");
    $("#btn9").removeClass("active").attr("aria-pressed", "false");
    $("#btn10").removeClass("active").attr("aria-pressed", "false");
    $("#btn11").removeClass("active").attr("aria-pressed", "false");
    $("#btn12").removeClass("active").attr("aria-pressed", "false");
    $("#btn13").removeClass("active").attr("aria-pressed", "false");
    $("#btn14").removeClass("active").attr("aria-pressed", "false");
})

// Hide additional multiplication and division option buttons and update option buttons for subtraction game
$("#subtract").click(function() {
    $("#options-multiply-divide").hide("slow");
    $("#btn1").html("Mixed to 10").addClass("active").attr("aria-pressed", "true");
    $("#btn2").html("Mixed to 20").removeClass("active").attr("aria-pressed", "false");
    $("#btn3").html("Mixed to 50").removeClass("active").attr("aria-pressed", "false");
    $("#btn4").html("Mixed to 100").removeClass("active").attr("aria-pressed", "false");
    $("#btn5").removeClass("active").attr("aria-pressed", "false");
    $("#btn6").removeClass("active").attr("aria-pressed", "false");
    $("#btn7").removeClass("active").attr("aria-pressed", "false");
    $("#btn8").removeClass("active").attr("aria-pressed", "false");
    $("#btn9").removeClass("active").attr("aria-pressed", "false");
    $("#btn10").removeClass("active").attr("aria-pressed", "false");
    $("#btn11").removeClass("active").attr("aria-pressed", "false");
    $("#btn12").removeClass("active").attr("aria-pressed", "false");
    $("#btn13").removeClass("active").attr("aria-pressed", "false");
    $("#btn14").removeClass("active").attr("aria-pressed", "false");
})

// Show additional multiplication and division option buttons and update option buttons for multiplication game
$("#multiply").click(function() {
    $("#options-multiply-divide").show("slow");
    $("#btn1").html("x2, x5, x10").addClass("active").attr("aria-pressed", "true");
    $("#btn2").html("Mixed 1 to 12").removeClass("active").attr("aria-pressed", "false");
    $("#btn3").html("x1").removeClass("active").attr("aria-pressed", "false");
    $("#btn4").html("x7").removeClass("active").attr("aria-pressed", "false");
    $("#btn5").html("x2").removeClass("active").attr("aria-pressed", "false");
    $("#btn6").html("x8").removeClass("active").attr("aria-pressed", "false");
    $("#btn7").html("x3").removeClass("active").attr("aria-pressed", "false");
    $("#btn8").html("x9").removeClass("active").attr("aria-pressed", "false");
    $("#btn9").html("x4").removeClass("active").attr("aria-pressed", "false");
    $("#btn10").html("x10").removeClass("active").attr("aria-pressed", "false");
    $("#btn11").html("x5").removeClass("active").attr("aria-pressed", "false");
    $("#btn12").html("x11").removeClass("active").attr("aria-pressed", "false");
    $("#btn13").html("x6").removeClass("active").attr("aria-pressed", "false");
    $("#btn14").html("x12").removeClass("active").attr("aria-pressed", "false");
})

// Show additional multiplication and division option buttons and update option buttons for division game
$("#divide").click(function() {
    $("#options-multiply-divide").show("slow");
    $("#btn1").html("&divide2, &divide5, &divide10").addClass("active").attr("aria-pressed", "true");
    $("#btn2").html("Mixed 1 to 12").removeClass("active").attr("aria-pressed", "false");
    $("#btn3").html("&divide1").removeClass("active").attr("aria-pressed", "false");
    $("#btn4").html("&divide7").removeClass("active").attr("aria-pressed", "false");
    $("#btn5").html("&divide2").removeClass("active").attr("aria-pressed", "false");
    $("#btn6").html("&divide8").removeClass("active").attr("aria-pressed", "false");
    $("#btn7").html("&divide3").removeClass("active").attr("aria-pressed", "false");
    $("#btn8").html("&divide9").removeClass("active").attr("aria-pressed", "false");
    $("#btn9").html("&divide4").removeClass("active").attr("aria-pressed", "false");
    $("#btn10").html("&divide10").removeClass("active").attr("aria-pressed", "false");
    $("#btn11").html("&divide5").removeClass("active").attr("aria-pressed", "false");
    $("#btn12").html("&divide11").removeClass("active").attr("aria-pressed", "false");
    $("#btn13").html("&divide6").removeClass("active").attr("aria-pressed", "false");
    $("#btn14").html("&divide12").removeClass("active").attr("aria-pressed", "false");
})

// Remove active class to give toggle behaviour to option buttons in addition and subtraction mode
$("#btn1").click(function() {
    let gameMode = returnGameMode();
    if (gameMode === "add" || gameMode === "subtract") {
        $("#btn2").removeClass("active").removeClass("focus").attr("aria-pressed", "false");
        $("#btn3").removeClass("active").removeClass("focus").attr("aria-pressed", "false");
        $("#btn4").removeClass("active").removeClass("focus").attr("aria-pressed", "false");
    }
})

// Remove active class to give toggle behaviour to option buttons in addition and subtraction mode
$("#btn2").click(function() {
    let gameMode = returnGameMode();
    if (gameMode === "add" || gameMode === "subtract") {
        $("#btn1").removeClass("active").removeClass("focus").attr("aria-pressed", "false");
        $("#btn3").removeClass("active").removeClass("focus").attr("aria-pressed", "false");
        $("#btn4").removeClass("active").removeClass("focus").attr("aria-pressed", "false");
    }
})

// Remove active class to give toggle behaviour to option buttons in addition and subtraction mode
$("#btn3").click(function() {
    let gameMode = returnGameMode();
    if (gameMode === "add" || gameMode === "subtract") {
        $("#btn1").removeClass("active").removeClass("focus").attr("aria-pressed", "false");
        $("#btn2").removeClass("active").removeClass("focus").attr("aria-pressed", "false");
        $("#btn4").removeClass("active").removeClass("focus").attr("aria-pressed", "false");
    }
})

// Remove active class to give toggle behaviour to option buttons in addition and subtraction mode
$("#btn4").click(function() {
    let gameMode = returnGameMode();
    if (gameMode === "add" || gameMode === "subtract") {
        $("#btn1").removeClass("active").removeClass("focus").attr("aria-pressed", "false");
        $("#btn2").removeClass("active").removeClass("focus").attr("aria-pressed", "false");
        $("#btn3").removeClass("active").removeClass("focus").attr("aria-pressed", "false");
    }
})

function checkButtons() {
    let btnIdList = ["#btn1", "#btn2", "#btn3", "#btn4", "#btn5", "#btn6", "#btn7", "#btn8", "#btn9", "#btn10", "#btn11", "#btn12", "#btn13", "#btn14"]
    if ((returnActiveButtons(btnIdList).length) === 0) {
        $("#btn1").addClass("active").addClass("focus").attr("aria-pressed", "true");        
    }
}

// Function to return selected game mode
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

// Function to return selected difficulty level;
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

// Function to return number of questions;
function returnQuestions() {
    let qno = "";
    if ($("#easy").hasClass("active")) {
        qno = "10";
    } else if ($("#medium").hasClass("active")) {
        qno = "20";
    }
    return(qno);
}

// Function to return an array of active buttons
function returnActiveButtons(btnIdList) {
    let btnActiveArray = [];
    for (let btnId of btnIdList) {
        if ($(btnId).hasClass("active")) {
            btnActiveArray.push(btnId)
        }
    }
    return(btnActiveArray);
}
