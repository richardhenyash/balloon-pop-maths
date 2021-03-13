// JavaScript initialisation functions //

// buffer balloon sprite images
let imgBalloonBlue = new Image();
imgBalloonBlue.src = "assets/images/balloon-blue-sprite.png";
let imgBalloonOrange = new Image();
imgBalloonOrange.src = "assets/images/balloon-orange-sprite.png";
let imgBalloonPurple = new Image();
imgBalloonPurple.src = "assets/images/balloon-purple-sprite.png";
let imgBalloonRed = new Image();
imgBalloonRed.src = "assets/images/balloon-red-sprite.png";
let imgBalloonGreen = new Image();
imgBalloonGreen.src = "assets/images/balloon-green-sprite.png";
let imgBalloonYellow = new Image();
imgBalloonYellow.src = "assets/images/balloon-yellow-sprite.png";

// buffer sound effects, set volume to 0.6
let soundPop = new Audio("assets/sounds/pop.mp3");
soundPop.volume = 0.6;
let soundDeflate = new Audio("assets/sounds/deflate.mp3");
soundDeflate.volume = 0.6;
let soundHighScore = new Audio("assets/sounds/high-score.mp3");
soundHighScore.volume = 0.6;
let soundUnlucky = new Audio("assets/sounds/unlucky.mp3");
soundUnlucky.volume = 0.6;
let soundWellDone = new Audio("assets/sounds/well-done.mp3");
soundWellDone.volume = 0.6;

// Initialise global variables //
let bpmSoundEffectsMuted = false;
let bpmGameMode
let bpmQno
let bpmDifficulty
let bpmActiveButtons
let bpmOptionArray
let bpmQArray
let bpmHealthArray
let bpmCQ
let bpmQCurrent
let bpmAnswerArray
let bpmScoreArray