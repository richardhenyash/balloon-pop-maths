  describe("JavaScript Display Interaction Function Library Testing Utilities", function () {
      
        // Test returnBtnIdArray function
        it("returnBtnIdArray", function () {
            let btnArray = returnBtnIdArray();
            expect(btnArray).toBeInstanceOf(Array);
        });

        // Test returnGameMode function
        it("returnGameMode", function () {
            let gameMode = returnGameMode();
            expect(gameMode).toBeInstanceOf(String);
        });

        // Test returnDifficulty function
        it("returnDifficulty", function () {
            let difficulty = returnDifficulty();
            expect(difficulty).toBeInstanceOf(String);
        });

        // Test returnQuestions function
        it("returnQuestions", function () {
            let qNo = returnQuestions();
            expect(qNo).toBeInstanceOf(Number);
        });

        // Test returnActiveButtons function
        it("returnActiveButtons", function () {
            let buttonArray = returnActiveButtons();
            expect(buttonArray).toBeInstanceOf(Array);
        });

        // Test returnButtonArray function
        it("btnArray", function () {
            let buttonArray = btnArray();
            expect(buttonArray).toBeInstanceOf(Array);
        });

        // Test returnOptionArray function
        it("returnOptionArray", function () {
            let activeButtons = returnActiveButtons();
            let optionArray = returnOptionArray(activeButtons);
            expect(optionArray).toBeInstanceOf(Array);
        });

        // Test initialiseHealthBar function for "easy" difficulty level
        it("initialiseHealthBar easy", function () {
            let healthArray = initialiseHealthBar("easy");
            expect(healthArray).toBeInstanceOf(Array);
            expect(healthArray).toEqual[5, 5];
        });

        // Test initialiseHealthBar function for "medium" difficulty level
        it("initialiseHealthBar medium", function () {
            let healthArray = initialiseHealthBar("medium");
            expect(healthArray).toBeInstanceOf(Array);
            expect(healthArray).toEqual[3, 3];
        }); 

        // Test initialiseHealthBar function for "hard" difficulty level
        it("initialiseHealthBar hard", function () {
            let healthArray = initialiseHealthBar("hard");
            expect(healthArray).toBeInstanceOf(Array);
            expect(healthArray).toEqual[1, 1];
        });

        // Test setHealthBar function
        it("setHealthBar", function () {
            let healthArray = [4, 5];
            healthArray = setHealthBar(healthArray);
            expect(healthArray).toBeInstanceOf(Array);
            expect(healthArray).toEqual[4, 5];
        });

        // Test checkHighScore function, true condition
        it("checkHighScore, true", function () {
            let highScore = [3, 10];
            let scoreArray = [8, 10];
            let res = checkHighScore(highScore, scoreArray); 
            expect(res).toBe(true);
        });

        // Test checkHighScore function, false condition
        it("checkHighScore, false", function () {
            let highScore = [8, 10];
            let scoreArray = [3, 10];
            let res = checkHighScore(highScore, scoreArray); 
            expect(res).toBe(false);
        });
    
        // Test getHighScore function
        it("getHighScore", function () {
            let highScore = getHighScore();
            expect(highScore).toBeInstanceOf(Array);
        });

        // Test setHighScore function
        it("setHighScore", function () {
            let highScore = setHighScore([8, 10]);
            let highScoreReturn = $("#highscore").html();
            expect(highScore).toBeInstanceOf(Array);
            expect(highScoreReturn).toBe("High Score: 8 / 10");
        });
    
        // Test setScore function
        it("setScore", function () {
            let scoreArray = setScore([1, 10]);
            let scoreReturn = $("#score").html();
            expect(scoreArray).toBeInstanceOf(Array);
            expect(scoreReturn).toBe("Score: 1 / 10");
        });

        // Test setQuestion function
        it("setQuestion", function () {
            let qCurrent = ["2 x 4", 8];
            qCurrent = setQuestion(qCurrent);
            let qReturn = $("#question").html();
            expect(qReturn).toBe("2 x 4");
            expect(qCurrent[0]).toBe("2 x 4");
            expect(qCurrent[1]).toBe(8);
        });

        // Test setBalloons function
        it("setBalloons", function () {
            let answerArray = [2, 4, 6, 8, 10, 12];
            answerArray = setBalloons(answerArray);
            expect(answerArray).toBeInstanceOf(Array);
            expect(answerArray).toEqual([2, 4, 6, 8, 10, 12]);
            let b1Return = $("#balloon-answer-text-left-1").html();
            expect(b1Return).toBe("2");
            let b2Return = $("#balloon-answer-text-left-2").html();
            expect(b2Return).toBe("4");
            let b3Return = $("#balloon-answer-text-left-3").html();
            expect(b3Return).toBe("6");
            let b4Return = $("#balloon-answer-text-right-1").html();
            expect(b4Return).toBe("8");
            let b5Return = $("#balloon-answer-text-right-2").html();
            expect(b5Return).toBe("10");
            let b6Return = $("#balloon-answer-text-right-3").html();
            expect(b6Return).toBe("12");
        });        

    });