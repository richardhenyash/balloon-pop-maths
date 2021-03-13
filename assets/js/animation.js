// JavaScript animation functions //

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
