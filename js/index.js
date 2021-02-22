// Hide additional multiplication and division option buttons and update option buttons for addition game
$("#add").click(function() {
    $("#options-multiply-divide").hide("slow");
    $("#btn1").html("Mixed to 10");
    $("#btn2").html("Mixed to 20");
    $("#btn3").html("Mixed to 50");
    $("#btn4").html("Mixed to 100");
});

// Hide additional multiplication and division option buttons and update option buttons for subtraction game
$("#subtract").click(function() {
    $("#options-multiply-divide").hide("slow");
    $("#btn1").html("Mixed to 10");
    $("#btn2").html("Mixed to 20");
    $("#btn3").html("Mixed to 50");
    $("#btn4").html("Mixed to 100");
});

// Show additional multiplication and division option buttons and update option buttons for multiplication game
$("#multiply").click(function() {
    $("#options-multiply-divide").show("slow");
    $("#btn1").html("x2, x5, x10");
    $("#btn2").html("Mixed 1 to 12");
    $("#btn3").html("x1");
    $("#btn4").html("x7");
    $("#btn5").html("x2");
    $("#btn6").html("x8");
    $("#btn7").html("x3");
    $("#btn8").html("x9");
    $("#btn9").html("x4");
    $("#btn10").html("x10");
    $("#btn11").html("x5");
    $("#btn12").html("x11");
    $("#btn13").html("x6");
    $("#btn14").html("x12");
});

// Show additional multiplication and division option buttons and update option buttons for division game
$("#divide").click(function() {
    $("#options-multiply-divide").show("slow");
    $("#btn1").html("&divide2, &divide5, &divide10");
    $("#btn2").html("Mixed 1 to 12");
    $("#btn3").html("&divide1");
    $("#btn4").html("&divide7");
    $("#btn5").html("&divide2");
    $("#btn6").html("&divide8");
    $("#btn7").html("&divide3");
    $("#btn8").html("&divide9");
    $("#btn9").html("&divide4");
    $("#btn10").html("&divide10");
    $("#btn11").html("&divide5");
    $("#btn12").html("&divide11");
    $("#btn13").html("&divide6");
    $("#btn14").html("&divide12");
});