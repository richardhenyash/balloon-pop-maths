/**
* @fileOverview JavaScript Animation Function Library.
* @author <a href="https://github.com/richardhenyash">Richard Ash</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */
/* globals $, imgBalloonBlue, imgBalloonOrange, imgBalloonPurple, imgBalloonYellow */
/* globals imgBalloonRed, imgBalloonGreen, imgBalloonYellow */
/* globals getCanvasSize, returnCanvasID, animateBalloon, initialiseBalloons */

/**
* [Function to return an array of canvas width and height, given canvas element ID]
* @param  {[string]}   canvasID     [Canvas ID]
* @return {[array]}                 [Array of canvas width and height]
*/
function getCanvasSize(canvasID) {
    // Check if canvasID starts with #, otherwise add it
    if (canvasID.substr(0, 1) != "#") {
        canvasID = "#" + canvasID;
    }
    // Get canvas width and height
    let cW = $(canvasID).width();
    let cH = $(canvasID).height();
    // Add to array
    let cArray = [cW, cH];
    return cArray;
}

/**
* [Function to draw balloon image on the canvas, given canvasID, image and frame number]
* @param  {[string]}   canvasID     [Canvas ID]
* @param  {[object]}   img          [Image object]
* @param  {[number]}   fno          [Frame number]
* @return {[object]}                [Canvas context]
*/
function drawBalloonImage(canvasID, img, fno) {
    // Check if canvasID starts with #, otherwise add it
    if (canvasID.substr(0, 1) != "#") {
        canvasID = "#" + canvasID;
    }
    // Set beginning x position of image frame
    let beginX = 3072- (fno * 512);
    // Return canvas element using jQuery
    let canvasElement =  $(canvasID)[0];
    // Get canvas context
    let canvasContext = canvasElement.getContext('2d');
    // Clear canvas
    canvasContext.clearRect(0, 0, 300, 150);
    // Draw balloon image frame
    canvasContext.drawImage(img, beginX, 0, 512, 512, 0, 0, 300, 150);
    return(canvasContext);
}

/**
* [Function to return canvasID, given balloon text div id]
* @param  {[string]}    answerTextID    [Balloon answer text div ID]
* @return {[string]}                    [Canvas ID]
*/
function returnCanvasID(answerTextID) {
    // Check if canvasID starts with #, otherwise add it
    if (answerTextID.substr(0, 1) != "#") {
        answerTextID = "#" + answerTextID;
    }
    // Return siblings array using jQuery;
    let sArray = $(answerTextID).siblings();
    // Get canvas ID
    let canvasID = sArray[0].id;
    return(canvasID);
}

/**
* [Function to animate balloon popping image on the canvas, given canvasID]
* @param  {[string]}    canvasID    [Balloon answer text div ID]
* @return {[number]}                [Timeout ID]
*/
function animateBalloon(canvasID) {
    // Check if canvasID starts with #, otherwise add it
    if (canvasID.substr(0, 1) != "#") {
        canvasID = "#" + canvasID;
    }
    let img;
    // Set balloon correct balloon image according to given canvas ID
    if (canvasID == "#canvas-balloon-left-1") {
        img = imgBalloonBlue;
    } else if (canvasID == "#canvas-balloon-left-2") {
        img = imgBalloonOrange;
    } else if (canvasID == "#canvas-balloon-left-3") {
        img = imgBalloonPurple;
    } else if (canvasID == "#canvas-balloon-right-1") {
        img = imgBalloonRed;
    } else if (canvasID == "#canvas-balloon-right-2") {
        img = imgBalloonGreen;
    } else if (canvasID == "#canvas-balloon-right-3") {
        img = imgBalloonYellow;
    }
    let balloonTimeout; 
    // Animate balloon image by drawing 6 frames using setTimeout, then return to frame 1
    balloonTimeout = setTimeout(drawBalloonImage, 25, canvasID, img, 1);        
    balloonTimeout = setTimeout(drawBalloonImage, 50, canvasID, img, 2);
    balloonTimeout = setTimeout(drawBalloonImage, 75, canvasID, img, 3);
    balloonTimeout = setTimeout(drawBalloonImage, 200, canvasID, img, 4);
    balloonTimeout = setTimeout(drawBalloonImage, 300, canvasID, img, 5);
    balloonTimeout = setTimeout(drawBalloonImage, 400, canvasID, img, 6); 
    balloonTimeout = setTimeout(drawBalloonImage, 500, canvasID, img, 1);
    return(balloonTimeout);
}

/**
* [Function to initialise balloons on animation frame 1]
*/
function initialiseBalloons() {
    // Show all balloon canvas elements
    $("[id^=canvas-balloon]").show();
    // Show all balloon text elements
    $("[id^=balloon-answer-text]").show();
    // Draw ballooon images in correct canvas elements on animmation frame 1
    drawBalloonImage("canvas-balloon-left-1", imgBalloonBlue, 1);
    drawBalloonImage("canvas-balloon-left-2", imgBalloonOrange, 1);
    drawBalloonImage("canvas-balloon-left-3", imgBalloonPurple, 1);
    drawBalloonImage("canvas-balloon-right-1", imgBalloonRed, 1);
    drawBalloonImage("canvas-balloon-right-2", imgBalloonGreen, 1);
    drawBalloonImage("canvas-balloon-right-3", imgBalloonYellow, 1);
}
