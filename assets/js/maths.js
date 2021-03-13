// JavaScript Maths Functions //

/** Function to return random question array, given game mode, options and number of questions **/
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

/** Function to return random multiplication question array, given options and number of questions **/
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

/** Function to return random question array, given game mode, options and number of questions **/
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

/** Function to return random division question array, given options and number of questions **/
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

/** Function to return random addition question and answer array, given options and number of questions **/
function returnAdditionQuestionArray (optionArray, qno) {
    let aqArray = [];
    let aq;
    for (i = 0; i < qno; i++) {
        if (optionArray[0] == "Mixed to 10") {
            aq =  returnAdditionQuestion(10);
            aqArray.push(aq);
        } else if (optionArray[0] == "Mixed to 20") {
            aq =  returnAdditionQuestion(20);
            aqArray.push(aq);
        } else if (optionArray[0] == "Mixed to 50") {
            aq =  returnAdditionQuestion(50);
            aqArray.push(aq);
        } else if (optionArray[0] == "Mixed to 100") {
            aq =  returnAdditionQuestion(100);
            aqArray.push(aq);
        }
    }
    return(aqArray);
}

/** Function to return random subtraction question and answer array, given options and number of questions **/
function returnSubtractionQuestionArray (optionArray, qno) {
    let sqArray = [];
    let sq;
    for (i = 0; i < qno; i++) {
        if (optionArray[0] == "Mixed to 10") {
            sq =  returnSubtractionQuestion(10);
            sqArray.push(sq);
        } else if (optionArray[0] == "Mixed to 20") {
            sq =  returnSubtractionQuestion(20);
            sqArray.push(sq);
        } else if (optionArray[0] == "Mixed to 50") {
            sq =  returnSubtractionQuestion(50);
            sqArray.push(sq);
        } else if (optionArray[0] == "Mixed to 100") {
            sq =  returnSubtractionQuestion(100);
            sqArray.push(sq);
        }
    }
    return(sqArray);
}

/** Function to return random multiplication question and answer array from 1 to 12, given times table number **/
function returnMultiplicationQuestion(tno) {
    let ttno = Math.floor((Math.random() * 12) + 1);
    let ttqStr = tno.toString() + " x " + ttno.toString();
    let ttAnswer = (tno * ttno);
    let mq = [ttqStr, ttAnswer];
    return mq;
}

/** Function to return random division question and answer array from 1 to 12, given division table number **/
function returnDivisionQuestion(dno) {
    let dtno = Math.floor((Math.random() * 12) + 1);
    let dsum = dtno * dno;
    let dqStr = dsum.toString() + " &divide " + dno.toString();
    let dAnswer = (dtno);
    let dq = [dqStr, dAnswer];
    return dq;
}

/** Function to return random addition question and answer array, given maximum sum **/
function returnAdditionQuestion(maxsum) {
    let no1 = Math.floor((Math.random() * (maxsum / 2)) + 1);
    let no2 = Math.floor((Math.random() * (maxsum / 2)) + 1);
    let aqStr = no1.toString() + " + " + no2.toString();
    let aqAnswer = (no1 + no2);
    let aq = [aqStr, aqAnswer];
    return aq;
}

/** Function to return random subtraction question and answer array, given maximum sum **/
function returnSubtractionQuestion(maxsum) {
    let no1 = Math.floor((Math.random() * maxsum) + 1);
    let no2 = Math.floor((Math.random() * maxsum) + 1);
    let minno = Math.min(no1, no2);
    let maxno = Math.max(no1, no2);
    let mqStr = maxno.toString() + " - " + minno.toString();
    let mqAnswer = (maxno - minno);
    let mq = [mqStr, mqAnswer];
    return mq;
}


/** Function to generate array of 5 wrong answers and the correct answer, given game mode and current question**/
function answerArray(gameMode, qCurrent) {
    let answerArray = [];
    if (gameMode == "multiply") {
        answerArray = wrongAnswersMultiplication(qCurrent);
    } else if (gameMode == "divide") {
        answerArray = wrongAnswersDivision(qCurrent);
    } else if (gameMode == "add") {
        answerArray = wrongAnswersAddition(qCurrent);        
    } else if (gameMode == "subtract") {
        answerArray = wrongAnswersSubtraction(qCurrent);
    }
    answerArray.push(qCurrent[1])
    answerArray = shuffleArray(answerArray);
    return(answerArray);
}

/** Function to generate array of 5 wrong multiplication answers, given current question**/
function wrongAnswersMultiplication(qCurrent) {
    let qStr = qCurrent[0];
    let qStrArray = qStr.split(" ");
    let no1 = parseInt(qStrArray[0]);
    let no2 = parseInt(qStrArray[2]);
    let cA = qCurrent[1];
    let wrongAnswerArray = []
    if (no1 > 1) {
        wrongAnswerArray.push((no1 - 1) * no2);
    } else {
        wrongAnswerArray.push((no1 + 2) * no2);
    }
    if (no1 > 2) {
        wrongAnswerArray.push((no1 - 2) * no2);
    } else {
        wrongAnswerArray.push((no1 + 3) * no2);
    }
    wrongAnswerArray.push((no1 + 1) * no2);
    let minInt = ((no1 - 1) * no2);
    let maxInt = ((no1 + 1) * no2);
    if (maxInt < 10) {
        minInt = 0;
        maxInt = 10;
    }
    wrongAnswerArray = wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt);
    return(wrongAnswerArray);
}

/** Function to generate array of 5 wrong division answers, given current question**/
function wrongAnswersDivision(qCurrent) {
    let qStr = qCurrent[0];
    let qStrArray = qStr.split(" ");
    let no1 = parseInt(qStrArray[0]);
    let no2 = parseInt(qStrArray[2]);
    let cA = qCurrent[1];
    let minInt = 1;
    let maxInt = 12;
    if (no1 < 12) {
        maxInt = no1;
    }
    if (maxInt < 6) {
        maxInt = 6;
    }
    let wrongAnswerArray = [(cA - 1), (cA + 1), (cA + 2)];
    wrongAnswerArray = wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt);
    return(wrongAnswerArray);
}

/** Function to generate array of 5 wrong addition answers, given current question**/
function wrongAnswersAddition(qCurrent) {
    let qStr = qCurrent[0];
    let qStrArray = qStr.split(" ");
    let no1 = parseInt(qStrArray[0]);
    let no2 = parseInt(qStrArray[2]);
    let cA = qCurrent[1];
    let wrongAnswerArray = [(cA - 1), (cA + 1), (cA + 2)];
    let minInt = (Math.max(no1, no2)) + 1;
    let maxInt = (no1 + no2 + 6);
    wrongAnswerArray = wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt);
    return(wrongAnswerArray);    
}

/** Function to generate array of 5 wrong subtraction answers, given current question**/
function wrongAnswersSubtraction(qCurrent) {
    let qStr = qCurrent[0];
    let qStrArray = qStr.split(" ");
    let no1 = parseInt(qStrArray[0]);
    let no2 = parseInt(qStrArray[2]);
    let cA = qCurrent[1];
    let wrongAnswerArray = [(cA - 1), (cA + 1), (cA + 2)];
    let maxInt = no1 - 1;
    let minInt = 0;
    if (maxInt < 6) {
        maxInt = 6;
    }
    wrongAnswerArray = wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt);
    return(wrongAnswerArray); 
}

/** Function to populate wrong answer array with two randomly generated integers between the two integers given.
Generated random integers until a random integer not already in the array and not equal to the correct answer is found.
Returns completed wrong answer array **/
function wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt) {
    if ((maxInt - minInt) < 6) {
        maxInt = minInt + 6;
    }
    randomInt = getRandomIntInclusive(minInt, maxInt);
    while ((wrongAnswerArray.includes(randomInt)) || (randomInt == cA)) {
        randomInt = getRandomIntInclusive(minInt, maxInt);
    }
    wrongAnswerArray.push(randomInt);
    randomInt = getRandomIntInclusive(minInt, maxInt);
    while ((wrongAnswerArray.includes(randomInt)) || (randomInt == cA)) {
        randomInt = getRandomIntInclusive(minInt, maxInt);
    }
    wrongAnswerArray.push(randomInt);
    return(wrongAnswerArray);
}

/** Function to generate a random integer between the two integers given **/
/** Function referenced from MDN Web Docs link below **/
/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random **/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
