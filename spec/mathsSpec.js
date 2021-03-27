describe("JavaScript Maths Function Library Testing Utilities", function () {

    // Import maths function library
    let maths = require('../lib/js/maths');

    // Set an array of all possible "number of questions" options
    let qNoArray = [10, 20];
    // Set an array of all possible "game mode" options
    let gameModeArray = ["multiply", "divide", "add", "subtract"];

    // Test returnQuestionArray function with a variety of options set
    // Loop through question number array
    for (let qni = 0; qni < qNoArray.length; qni++) {
        let qNo = qNoArray[qni];
        // Loop through game mode array
        for (let gmi = 0; gmi < gameModeArray.length; gmi++) {
            let gameMode = gameModeArray[gmi];
            // Set options to check depending on game mode
            let optionsToCheck;
            if (gameMode == "multiply") {
                optionsToCheck = [["2x, 5x, 10x"], ["Mixed 1 to 12"], ["1x"], ["2x"], ["3x"], ["4x"], ["5x"], ["6x"], ["7x"], ["8x"], ["9x"], ["10x"], ["11x"], ["12x"], ["1x", "2x", "3x", "4x", "5x", "6x"], ["7x", "8x", "9x", "10x", "11x", "12x"]];
            } else if (gameMode == "divide") {
                optionsToCheck = [["÷2, ÷5, ÷10"], ["Mixed 1 to 12"], ["÷1"], ["÷2"], ["÷3"], ["÷4"], ["÷5"], ["÷6"], ["÷7"], ["÷8"], ["÷9"], ["÷10"], ["÷11"], ["÷12"], ["÷1", "÷2", "÷3", "÷4", "÷5", "÷6"], ["÷7", "÷8", "÷9", "÷10", "÷11", "÷12"]];
            } else if (gameMode == "add" || gameMode == "subtract") {
            optionsToCheck = [["Mixed to 10"], ["Mixed to 20"], ["Mixed to 50"], ["Mixed to 100"]];
            }
            // Loop through options to check
            for (let oni = 0; oni < optionsToCheck.length; oni++) {
                let optionArray = optionsToCheck[oni];
                // Set test function string
                let teststr = "returnQuestionArray " + gameMode + " " + optionArray + " " + qNo + " Questions";
                // returnQuestionArray Test function
                it(teststr, function () {
                    let qArray = maths.returnQuestionArray(gameMode, optionArray, qNo);
                    expect(qArray).toBeInstanceOf(Array);
                    expect(qArray).toHaveSize(qNo);
                });
            }
        }
    }

    // Test returnMultiplicationQuestion function with all possible options
    for (let tno = 1; tno < 13; tno++) {
        // Set test function string
        let teststr = "returnMultiplicationQuestion " + tno;
        // returnMultiplicationQuestion Test function
        it(teststr, function () {
            let mQ = maths.returnMultiplicationQuestion(tno);
            expect(mQ).toBeInstanceOf(Array);
            expect(mQ).toHaveSize(2);
            expect(mQ[0]).toBeInstanceOf(String);
            expect(mQ[1]).toBeInstanceOf(Number);
        });
    }

    // Test returnDivisionQuestion function with all possible options
    for (let dno = 1; dno < 13; dno++) {
        // Set test function string
        let teststr = "returnDivisionQuestion " + dno;
        // returnDivisionQuestion Test function
        it(teststr, function () {
            let dQ = maths.returnDivisionQuestion(dno);
            expect(dQ).toBeInstanceOf(Array);
            expect(dQ).toHaveSize(2);
            expect(dQ[0]).toBeInstanceOf(String);
            expect(dQ[1]).toBeInstanceOf(Number);
        });
    }

    // Test returnAdditionQuestion function with all possible options
    // Set an array of all possible "maximum sum" options
    let maxSumArray = [10, 20, 50, 100];
    // Loop through maximum sum array
    for (let msi = 0; msi < maxSumArray.length; msi++) {
        let maxsum = maxSumArray[msi];
        // Set test function string
        let teststr = "returnAdditionQuestion " + maxsum;
        // returnAdditionQuestion Test function
        it(teststr, function () {
            let aQ = maths.returnAdditionQuestion(maxsum);
            expect(aQ).toBeInstanceOf(Array);
            expect(aQ).toHaveSize(2);
            expect(aQ[0]).toBeInstanceOf(String);
            expect(aQ[1]).toBeInstanceOf(Number);
        });
    }

    // Test returnSubtractionQuestion function with all possible options
    // Set an array of all possible "maximum sum" options
    maxSumArray = [10, 20, 50, 100];
    // Loop through maximum sum array
    for (let msi = 0; msi < maxSumArray.length; msi++) {
        let maxsum = maxSumArray[msi];
        // Set test function string
        let teststr = "returnSubtractionQuestion " + maxsum;
        // returnSubtractionQuestion Test function
        it(teststr, function () {
            let sQ = maths.returnSubtractionQuestion(maxsum);
            expect(sQ).toBeInstanceOf(Array);
            expect(sQ).toHaveSize(2);
            expect(sQ[0]).toBeInstanceOf(String);
            expect(sQ[1]).toBeInstanceOf(Number);
        });
    }

    // Test checkQuestionArray function
    it("checkQuestionArray", function () {
        let qArray = [["5 x 9", 45], ["2 x 1", 2], ["2 x 12", 24]];
        // Should return true
        let qaC = maths.checkQuestionArray(["2 x 1", 2], qArray);
        expect(qaC).toBe(true);
        // Should return false;
        qaC = maths.checkQuestionArray(["2 x 2", 4], qArray);
        expect(qaC).toBe(false);
    });

    // Test answerArray function for all possible questions in multiplication game mode
    // Loop through all times tables
    for (let ttk1 = 1; ttk1 < 13; ttk1++) {
        for (let ttk2 = 1; ttk2 < 13; ttk2++) {
            let gameMode = "multiply"
            let qstr = ttk1 + " x " + ttk2;
            let qa = (ttk1 * ttk2);
            let qCurrent = [qstr, qa];
            // Set test function string
            let teststr = "answerArray " + gameMode + " " +  qCurrent;
            // answerArray Test function
            it(teststr, function () {
                let qArray = maths.answerArray(gameMode, qCurrent);
                expect(qArray).toBeInstanceOf(Array);
                expect(qArray).toHaveSize(6);
            });
        }
    }

    // Test answerArray function for all possible questions in division game mode
    // Loop through all division tables
    for (let ttk1 = 1; ttk1 < 13; ttk1++) {
        for (let ttk2 = 1; ttk2 < 13; ttk2++) {
            let gameMode = "divide";
            let sum = (ttk1 * ttk2);
            let qstr = sum + " &divide " + ttk2;
            let qa = (sum / ttk2);
            let qCurrent = [qstr, qa];
            // Set test function string
            let teststr = "answerArray " + gameMode + " " +  qCurrent;
            // answerArray Test function
            it(teststr, function () {
                let qArray = maths.answerArray(gameMode, qCurrent);
                expect(qArray).toBeInstanceOf(Array);
                expect(qArray).toHaveSize(6);
            });
        }
    }

});
