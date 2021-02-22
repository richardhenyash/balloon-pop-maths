// Hide additional multiplication and division option buttons and update option buttons for addition game
$("#add").click(function() {
    $("#options-multiply-divide").hide("slow");
    $("#btn1").html("Mixed to 10").addClass("active");
    $("#btn2").html("Mixed to 20").removeClass("active");
    $("#btn3").html("Mixed to 50").removeClass("active");
    $("#btn4").html("Mixed to 100").removeClass("active");
});

// Hide additional multiplication and division option buttons and update option buttons for subtraction game
$("#subtract").click(function() {
    $("#options-multiply-divide").hide("slow");
    $("#btn1").html("Mixed to 10").addClass("active");
    $("#btn2").html("Mixed to 20").removeClass("active");
    $("#btn3").html("Mixed to 50").removeClass("active");
    $("#btn4").html("Mixed to 100").removeClass("active");
});

// Show additional multiplication and division option buttons and update option buttons for multiplication game
$("#multiply").click(function() {
    $("#options-multiply-divide").show("slow");
    $("#btn1").html("x2, x5, x10").addClass("active");
    $("#btn2").html("Mixed 1 to 12").removeClass("active");
    $("#btn3").html("x1").removeClass("active");
    $("#btn4").html("x7").removeClass("active");
    $("#btn5").html("x2").removeClass("active");
    $("#btn6").html("x8").removeClass("active");
    $("#btn7").html("x3").removeClass("active");
    $("#btn8").html("x9").removeClass("active");
    $("#btn9").html("x4").removeClass("active");
    $("#btn10").html("x10").removeClass("active");
    $("#btn11").html("x5").removeClass("active");
    $("#btn12").html("x11").removeClass("active");
    $("#btn13").html("x6").removeClass("active");
    $("#btn14").html("x12").removeClass("active");
});

// Show additional multiplication and division option buttons and update option buttons for division game
$("#divide").click(function() {
    $("#options-multiply-divide").show("slow");
    $("#btn1").html("&divide2, &divide5, &divide10").addClass("active");
    $("#btn2").html("Mixed 1 to 12").removeClass("active");
    $("#btn3").html("&divide1").removeClass("active");
    $("#btn4").html("&divide7").removeClass("active");
    $("#btn5").html("&divide2").removeClass("active");
    $("#btn6").html("&divide8").removeClass("active");
    $("#btn7").html("&divide3").removeClass("active");
    $("#btn8").html("&divide9").removeClass("active");
    $("#btn9").html("&divide4").removeClass("active");
    $("#btn10").html("&divide10").removeClass("active");
    $("#btn11").html("&divide5").removeClass("active");
    $("#btn12").html("&divide11").removeClass("active");
    $("#btn13").html("&divide6").removeClass("active");
    $("#btn14").html("&divide12").removeClass("active");
});