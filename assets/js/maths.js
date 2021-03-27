/**
* @fileOverview JavaScript Maths Function Library.
* @author <a href="https://github.com/richardhenyash">Richard Ash</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */

/**
* [Function to return random question and answer array, given game mode, options and number of questions]
* @param  {[string]}    gameMode        [Game mode]
* @param  {[string]}    optionArray     [Array of active option button text value strings]
* @param  {[number]}    qno             [Number of questions]
* @return {[array]}                     [Question and answer array - an array of 2 item arrays giving question and answer]
*/
function returnQuestionArray (gameMode, optionArray, qno) {
    let questionArray = [];
    // Check game mode and run correct question array function
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

/**
* [Function to return random multiplication question and answer array, given options and number of questions]
* @param  {[string]}    optionArray     [Array of active option button text value strings]
* @param  {[number]}    qno             [Number of questions]
* @return {[array]}                     [Question and answer array - an array of 2 item arrays giving question and answer]
*/
function returnMultiplicationQuestionArray (optionArray, qno) {
    // Initialise multiplication question array
    let mqArray = [];
    let i;
    let ttq;
    let tk;
    // For 2, 5 and 10 times tables
    if (optionArray[0] == "2x, 5x, 10x") {
        let remq = (qno % 3);
        // Set number of 2 times table questions
        let no2xQ = Math.floor(qno / 3) + remq;
        // Set number of 5 times table questions
        let no5xQ = Math.floor(qno / 3);
        // Set number of 10 times table questions
        let no10xQ = Math.floor(qno / 3);
        // Generate random multiplication questions and add to array
        for (i = 0; i < no2xQ; i++) {
            // Generate random question
            ttq = returnMultiplicationQuestion(2);
            // Check random question is not already in question array
            tk = 0;
            while ((tk < 11) && (checkQuestionArray(ttq, mqArray))) {
                ttq = returnMultiplicationQuestion(2);
                tk++;
            }
            // Add random question to question array
            mqArray.push(ttq);
        }
        for (i = 0; i < no5xQ; i++) {
            // Generate random question
            ttq = returnMultiplicationQuestion(5);
            // Check random question is not already in question array
            tk = 0;
            while ((tk < 11) && (checkQuestionArray(ttq, mqArray))) {
                ttq = returnMultiplicationQuestion(5);
                tk++;
            }
            // Add random question to question array
            mqArray.push(ttq);
        }
        for (i = 0; i < no10xQ; i++) {
            // Generate random question
            ttq = returnMultiplicationQuestion(10);
            // Check random question is not already in question array
            tk = 0;
            while ((tk < 11) && (checkQuestionArray(ttq, mqArray))) {
                ttq = returnMultiplicationQuestion(10);
                tk++;
            }
            // Add random question to question array
            mqArray.push(ttq);
        }
    } else if (optionArray[0] == "Mixed 1 to 12") {
        // For mixed 1 to 12
        let ttno;
        let ttq;
        // Generate random multiplication questions and add to array
        for (i = 0; i < qno; i++) {
            ttno = Math.floor((Math.random() * 12) + 1);
            // Generate random question
            ttq = returnMultiplicationQuestion(ttno);
            // Check random question is not already in question array
            tk = 0;
            while ((tk < 11) && (checkQuestionArray(ttq, mqArray))) {
                ttq = returnMultiplicationQuestion(ttno);
                tk++;
            }
            // Add random question to question array
            mqArray.push(ttq);
        }
    } else {
        // For specific times tables
        let ttk = 0;
        let ttqstr;
        let ttqstrnew;
        for (i = 0; i < qno; i++) {
            ttqstr = (optionArray[ttk]);
            ttqstrnew = ttqstr.substring(0, ttqstr.length - 1);
            // Generate random question
            ttq = returnMultiplicationQuestion(ttqstrnew);
            // Check random question is not already in question array
            tk = 0;
            while ((tk < 11) && (checkQuestionArray(ttq, mqArray))) {
                ttq = returnMultiplicationQuestion(ttqstrnew);
                tk++;
            }
            // Add random question to question array
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

/**
* [Function to return random division question and answer array, given options and number of questions]
* @param  {[string]}    optionArray     [Array of active option button text value strings]
* @param  {[number]}    qno             [Number of questions]
* @return {[array]}                     [Question and answer array - an array of 2 item arrays giving question and answer]
*/
function returnDivisionQuestionArray (optionArray, qno) {
    // Initialise division question array
    let dqArray = [];
    let dq;
    let i;
    let dk;
    // For 2, 5 and 10 division questions
    if ((optionArray[0].substring(1, 2) == "2") && (optionArray[0].substring(5, 6) == "5") && (optionArray[0].substring(9, 11) == "10")) {
        let remq = (qno % 3);
        // Set number of 2 division questions
        let no2Q = Math.floor(qno / 3) + remq;
        // Set number of 5 division questions
        let no5Q = Math.floor(qno / 3);
        // Set number of 10 division questions
        let no10Q = Math.floor(qno / 3);
        let dq;
        // Generate random division questions and add to array
        for (i = 0; i < no2Q; i++) {
            // Generate random question
            dq = returnDivisionQuestion(2);
            // Check random question is not already in question array
            dk = 0;
            while ((dk < 11) && (checkQuestionArray(dq, dqArray))) {
                dq = returnDivisionQuestion(2);
                dk++;
            }
            // Add random question to question array
            dqArray.push(dq);
        }
        for (i = 0; i < no5Q; i++) {
            // Generate random question
            dq = returnDivisionQuestion(5);
            dk = 0;
            while ((dk < 11) && (checkQuestionArray(dq, dqArray))) {
                dq = returnDivisionQuestion(5);
                dk++;
            }
            // Add random question to question array
            dqArray.push(dq);
        }
        for (i = 0; i < no10Q; i++) {
            // Generate random question
            dq = returnDivisionQuestion(10);
            // Check random question is not already in question array
            dk = 0;
            while ((dk < 11) && (checkQuestionArray(dq, dqArray))) {
                dq = returnDivisionQuestion(10);
                dk++;
            }
            // Add random question to question array
            dqArray.push(dq);
        }
    } else if (optionArray[0] == "Mixed 1 to 12") {
        // For mixed 1 to 12
        let dno;
        // Generate random division questions and add to array
        for (i = 0; i < qno; i++) {
            dno = Math.floor((Math.random() * 12) + 1);
            // Generate random question
            dq = returnDivisionQuestion(dno);
            // Check random question is not already in question array
            dk = 0;
            while ((dk < 11) && (checkQuestionArray(dq, dqArray))) {
                dq = returnDivisionQuestion(dno);
                dk++;
            }
            // Add random question to question array
            dqArray.push(dq);
        }
    } else {
        // For specific division questions
        let ddk = 0;
        let dqstr;
        let dqstrnew;
        // Generate random division questions and add to array
        for (i = 0; i < qno; i++) {
            dqstr = (optionArray[ddk]);
            dqstrnew = dqstr.substring(1, dqstr.length);
            // Generate random question
            dq = returnDivisionQuestion(dqstrnew);
            // Check random question is not already in question array
            dk = 0;
            while ((dk < 11) && (checkQuestionArray(dq, dqArray))) {
                dq = returnDivisionQuestion(dqstrnew);
                dk++;
            }
            // Add random question to question array
            dqArray.push(dq);
            // Increment division option counter
            if (ddk < (optionArray.length - 1)) {
                ddk = (ddk + 1);
            } else {
                ddk = 0;
            }
        }
    }
    return(dqArray);
}

/**
* [Function to return random addition question and answer array, given options and number of questions]
* @param  {[string]}    optionArray     [Array of active option button text value strings]
* @param  {[number]}    qno             [Number of questions]
* @return {[array]}                     [Question and answer array - an array of 2 item arrays giving question and answer]
*/
function returnAdditionQuestionArray (optionArray, qno) {
    // Initialise addition question array
    let aqArray = [];
    let qt;
    let aq;
    let i;
    let ak;
    // Set question type
    if (optionArray[0] == "Mixed to 10") {
        qt = 10;
    } else if (optionArray[0] == "Mixed to 20") {
        qt = 20;
    } else if (optionArray[0] == "Mixed to 50") {
        qt = 50;
    } else if (optionArray[0] == "Mixed to 100") {
        qt = 100;
    }
    // Return random addition questions and add to array
    for (i = 0; i < qno; i++) {
        // Generate random question
        aq =  returnAdditionQuestion(qt);
        // Check random question is not already in question array
        ak = 0;
        while ((ak < qno) && (checkQuestionArray(aq, aqArray))) {
           aq =  returnAdditionQuestion(qt);
           ak++;
        }
        // Add random question to question array
        aqArray.push(aq);
    }
    return(aqArray);
}

/**
* [Function to return random subtraction question and answer array, given options and number of questions]
* @param  {[string]}    optionArray     [Array of active option button text value strings]
* @param  {[number]}    qno             [Number of questions]
* @return {[array]}                     [Question and answer array - an array of 2 item arrays giving question and answer]
*/
function returnSubtractionQuestionArray (optionArray, qno) {
    // Initialise subtraction question array
    let sqArray = [];
    let qt;
    let sq;
    let i;
    let sk;
    // Set question type
    if (optionArray[0] == "Mixed to 10") {
        qt = 10;
    } else if (optionArray[0] == "Mixed to 20") {
        qt = 20;
    } else if (optionArray[0] == "Mixed to 50") {
        qt = 50;
    } else if (optionArray[0] == "Mixed to 100") {
        qt = 100;
    }
    // Return random subtraction questions and add to array
    for (i = 0; i < qno; i++) {
        // Generate random question
        sq = returnSubtractionQuestion(qt);
        // Check random question is not already in question array
        sk = 0;
        while ((sk < qno) && (checkQuestionArray(sq, sqArray))) {
           sq = returnSubtractionQuestion(qt);
           sk++;
        }
        // Add random question to question array
        sqArray.push(sq);
        
    }    
    return(sqArray);
}

/**
* [Function to return random multiplication question and answer array from 1 to 12, given times table number]
* @param  {[number]}    tno             [Times table number, integer from 1 to 12]
* @return {[array]}                     [Question and answer array - an array of 2 items giving question and answer]
*/
function returnMultiplicationQuestion(tno) {
    // Set random number between 1 and 12
    let ttno = Math.floor((Math.random() * 12) + 1);
    // Set question string
    let ttqStr = tno.toString() + " x " + ttno.toString();
    // Set answer
    let ttAnswer = (tno * ttno);
    // Set question array
    let mq = [ttqStr, ttAnswer];
    return mq;
}

/**
* [Function to return random division question and answer array from 1 to 12, given division table number]
* @param  {[number]}    dno             [Division table number, integer from 1 to 12]
* @return {[array]}                     [Question and answer array - an array of 2 items giving question and answer]
*/
function returnDivisionQuestion(dno) {
    // Set random number between 1 and 12
    let dtno = Math.floor((Math.random() * 12) + 1);
    // Set division sum
    let dsum = dtno * dno;
    // Set question string
    let dqStr = dsum.toString() + " &divide " + dno.toString();
    // Set answer
    let dAnswer = (dtno);
    // Set question array
    let dq = [dqStr, dAnswer];
    return dq;
}

/**
* [Function to return random addition question and answer array, given maximum sum]
* @param  {[number]}    maxsum          [Maximum sum]
* @return {[array]}                     [Question and answer array - an array of 2 items giving question and answer]
*/
function returnAdditionQuestion(maxsum) {
    // Set first random number
    let no1 = Math.floor((Math.random() * (maxsum / 2)) + 1);
    // Set second random number
    let no2 = Math.floor((Math.random() * (maxsum / 2)) + 1);
    // Set question string
    let aqStr = no1.toString() + " + " + no2.toString();
    // Set answer
    let aqAnswer = (no1 + no2);
    // Set question array
    let aq = [aqStr, aqAnswer];
    return aq;
}

/**
* [Function to return random subtraction question and answer array, given maximum sum]
* @param  {[number]}    maxsum          [Maximum sum]
* @return {[array]}                     [Question and answer array - an array of 2 items giving question and answer]
*/
function returnSubtractionQuestion(maxsum) {
    // Set first random number
    let no1 = Math.floor((Math.random() * maxsum) + 1);
    // Set second random number
    let no2 = Math.floor((Math.random() * maxsum) + 1);
    // Set minimum number
    let minno = Math.min(no1, no2);
    // Set maximum number
    let maxno = Math.max(no1, no2);
    // Set question string
    let mqStr = maxno.toString() + " - " + minno.toString();
    // Set answer
    let mqAnswer = (maxno - minno);
    // Set question array
    let mq = [mqStr, mqAnswer];
    return mq;
}

/**
* [Function to check if a new question is already contained in the question array]
* @param  {[array]}     nq              [New question, 2 item array of question and answer]
* @return {[array]}     qArray          [Question array, array of 2 item arrays to check]
*/
function checkQuestionArray(nq, qArray) {
    let i = 0;
    let qCheck = false;
    while ((qCheck == false) && (i < qArray.length)) {
        if (qArray[i][0] == nq[0]) {
            qCheck = true;
        }
        i++;
    }
    return(qCheck);
}

/**
* [Function to generate array of 5 wrong answers and the correct answer, given game mode and current question]
* @param  {[string]}    gameMode        [Game mode]
* @param  {[array]}     qCurrent        [Current question array, array of 2 items giving question and answer]
* @return {[array]}                     [Array of 2 item arrays, 5 wrong answers and 1 correct answer]
*/
function answerArray(gameMode, qCurrent) {
    // Initialise answer array
    let answerArray = [];
    // Check game mode, run relevant wrong answer function to add wrong answers to answer array
    if (gameMode == "multiply") {
        answerArray = wrongAnswersMultiplication(qCurrent);
    } else if (gameMode == "divide") {
        answerArray = wrongAnswersDivision(qCurrent);
    } else if (gameMode == "add") {
        answerArray = wrongAnswersAddition(qCurrent);        
    } else if (gameMode == "subtract") {
        answerArray = wrongAnswersSubtraction(qCurrent);
    }
    // Add correct answer to answer array
    answerArray.push(qCurrent[1]);
    // Shuffle answer array to randomise order
    answerArray = shuffleArray(answerArray);
    return(answerArray);
}

/**
* [Function to generate array of 5 wrong multiplication answers, given current question]
* @param  {[array]}     qCurrent        [Current question array, array of 2 items giving question and answer]
* @return {[array]}                     [Array of 2 item arrays, 5 wrong answers and 1 correct answer]
*/
function wrongAnswersMultiplication(qCurrent) {
    // Set question string
    let qStr = qCurrent[0];
    // Set question string array from question string
    let qStrArray = qStr.split(" ");
    // Set first integer
    let no1 = parseInt(qStrArray[0]);
    // Set second integer
    let no2 = parseInt(qStrArray[2]);
    // Set correct answer
    let cA = qCurrent[1];
    // Initialise wrong answer array
    let wrongAnswerArray = [];
    // Add wrong answers to array
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
    // Complete wrong answer array
    wrongAnswerArray = wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt);
    return(wrongAnswerArray);
}

/**
* [Function to generate array of 5 wrong division answers, given current question]
* @param  {[array]}     qCurrent        [Current question array, array of 2 items giving question and answer]
* @return {[array]}                     [Array of 2 item arrays, 5 wrong answers and 1 correct answer]
*/
function wrongAnswersDivision(qCurrent) {
    // Set question string
    let qStr = qCurrent[0];
    // Set question string array from question string
    let qStrArray = qStr.split(" ");
    // Set first integer
    let no1 = parseInt(qStrArray[0]);
    // Set correct answer
    let cA = qCurrent[1];
    // Set minimum integer
    let minInt = 1;
    // Set maximum integer
    let maxInt = 12;
    // Check minimum integer
    if (no1 < 12) {
        maxInt = no1;
    }
    // Check maximum integer
    if (maxInt < 6) {
        maxInt = 6;
    }
    // Add wrong answers to array
    let wrongAnswerArray = [(cA - 1), (cA + 1), (cA + 2)];
    // Complete wrong answer array
    wrongAnswerArray = wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt);
    return(wrongAnswerArray);
}

/**
* [Function to generate array of 5 wrong addition answers, given current question]
* @param  {[array]}     qCurrent        [Current question array, array of 2 items giving question and answer]
* @return {[array]}                     [Array of 2 item arrays, 5 wrong answers and 1 correct answer]
*/
function wrongAnswersAddition(qCurrent) {
    // Set question string
    let qStr = qCurrent[0];
    // Set question string array from question string
    let qStrArray = qStr.split(" ");
    // Set first integer
    let no1 = parseInt(qStrArray[0]);
    // Set second integer
    let no2 = parseInt(qStrArray[2]);
    // Set correct answer
    let cA = qCurrent[1];
    // Add wrong answers to array
    let wrongAnswerArray = [(cA - 1), (cA + 1), (cA + 2)];
    // Set minimum integer
    let minInt = (Math.max(no1, no2)) + 1;
    // Set maximum integer
    let maxInt = (no1 + no2 + 6);
    // Complete wrong answer array
    wrongAnswerArray = wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt);
    return(wrongAnswerArray);    
}

/**
* [Function to generate array of 5 wrong subtraction answers, given current question]
* @param  {[array]}     qCurrent        [Current question array, array of 2 items giving question and answer]
* @return {[array]}                     [Array of 2 item arrays, 5 wrong answers and 1 correct answer]
*/
function wrongAnswersSubtraction(qCurrent) {
    // Set question string
    let qStr = qCurrent[0];
    // Set question string array from question string
    let qStrArray = qStr.split(" ");
    // Set first integer   
    let no1 = parseInt(qStrArray[0]);
    // Set correct answer
    let cA = qCurrent[1];
    // Add wrong answers to array
    let wrongAnswerArray = [(cA - 1), (cA + 1), (cA + 2)];
    // Set maximum integer
    let maxInt = no1 - 1;
    // Set minimum integer
    let minInt = 0;
    // Check maximum integer
    if (maxInt < 6) {
        maxInt = 6;
    }
    // Complete wrong answer array
    wrongAnswerArray = wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt);
    return(wrongAnswerArray); 
}

/**
* [Function to populate wrong answer array with two randomly generated integers between the two integers given. 
  Generates random integers until a random integer not already in the array and not equal to the correct answer is found.
  Returns completed wrong answer array]
* @param  {[array]}     wrongAnswerArray    [Array of 2 item arrays]
* @param  {[number]}    cA                  [Correct answer]
* @param  {[number]}    minInt              [Minimum integer]
* @param  {[number]}    maxInt              [Maximum integer]
* @return {[array]}                         [Array of 2 item arrays]
*/
function wrongAnswerArrayComplete(wrongAnswerArray, cA, minInt, maxInt) {
    if ((maxInt - minInt) < 6) {
        maxInt = minInt + 6;
    }
    // Get random integer between 2 integers given
    let randomInt;
    randomInt = getRandomIntInclusive(minInt, maxInt);
    // Check if random integer is in wrong answer array, generate another random integer if it is
    while ((wrongAnswerArray.includes(randomInt)) || (randomInt == cA)) {
        randomInt = getRandomIntInclusive(minInt, maxInt);
    }
    // Add random integer to wrong answer array
    wrongAnswerArray.push(randomInt);
    // Get random integer between 2 integers given
    randomInt = getRandomIntInclusive(minInt, maxInt);
    // Check if random integer is in wrong answer array, generate another random integer if it is
    while ((wrongAnswerArray.includes(randomInt)) || (randomInt == cA)) {
        randomInt = getRandomIntInclusive(minInt, maxInt);
    }
    // Add random integer to wrong answer array
    wrongAnswerArray.push(randomInt);
    return(wrongAnswerArray);
}

/**
* [Function to generate a random integer between the two integers given. 
  Function referenced from MDN Web Docs link below:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random]
* @param  {[number]}    min             [Minimum integer]
* @param  {[number]}    max             [Maximum integer]
* @return {[number]}                    [Integer]
*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
* [Function to randomize an array in place using the Durstenfeld shuffle algorithm. 
  Function referenced from stack overflow link below, many thanks to Laurens Holst:
  https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array]
* @param  {[array]}     arrayToShuffle  [Array to shuffle]
* @return {[array]}                     [Shuffled array]
*/
function shuffleArray(arrayToShuffle) {
    let j;
    for (let i = arrayToShuffle.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
    }
    return(arrayToShuffle);
}
