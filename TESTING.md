# Balloon Pop Maths - Testing #

## Contents ##
- [Automated Testing](#automated-testing)
    - [HTML](#html)
    - [Custom CSS Styling](#custom-css-styling)
- [User Stories Testing](#user-stories-testing)
- [Additional UX Testing](#additional-ux-testing)
- [Manual Testing](#manual-testing)
    - [Responsive Design](#responsive-design)
    - [Browser Compatibility Testing](#browser-compatibility-testing)
- [Javascript Code Library Testing](#javascript-code-library-testing)
- [Bugs Fixed During Testing](#bugs-fixed-during-testing)
- [Bugs Remaining](#bugs-remaining)

## Automated Testing ##

### HTML ###
All HTML code was validated using the [W3C Markup Validation Service](https://validator.w3.org/). 
38 errors and 8 warnings were initially generated. See [HTML Validation Report 1](./assets/testing/validation/html-validation-report-1.pdf).
* 29 errors were caused by the autocomplete="off" attribute being incorrectly set on button elements. 
This attribute is not required and has removed in all cases.
* 2 errors were caused by the aria-pressed="true" attribute being incorrectly set on label elements. These attributes were removed in both cases.
* 2 errors were caused by images not having "alt" attributes. Alt attributes were added in both cases.
* 2 errors were caused by the "href" attribute being incorrectly used on button elements. The attribute was replaced with the correct "data-target" attribute in both cases.
* 1 error was caused by the "type" attribute being incorrectly set on the textarea form element. The attribute was removed.
* 1 error was caused by the "aria-describedby" attribute being incorrectly set on the form name input. The attribute was removed.
* 1 error was caused by the "divide" character on the divide mode button not being terminated correctly with a semi colon. A semi colon was added.
* 4 warnings were caused by the misuse of the "aria-label" attribute. The attributes were removed in all cases.
* 3 warnings were related to sections lacking a heading. Appropriate "aria-label" attributes were added to identify the sections in each case.
* 1 warning was caused by the "type" attribute being set unnecesarilly for [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
resources, where the [Email JS](https://www.emailjs.com/) [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 is loaded. This code snippet was originally copied from the 
 [Email JS](https://www.emailjs.com/) [documentation](https://www.emailjs.com/docs/sdk/installation/). The attribute was removed.

The HTML code was then re-validated and now passes validation with no error or warnings. 
See [HTML Validation Report 2](./assets/testing/validation/html-validation-report-2.pdf).

### Custom CSS Styling ###
[Custom CSS styling](./assets/css/style.css) was validated using the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).  
No errors were generated. 12 "unknown vendor extension" warnings were generated. These warnings are related to the 12 global variables declared 
at the top of the [Custom CSS](./assets/css/style.css). The warnings are generated because the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) 
does not currenty support CSS variable declaration are are not considered to be an issue. See [Github Link](https://github.com/w3c/css-validator/pull/173).

## User Stories Testing ##
* ***As a user, I am playing the game for fun and enjoyment.*** The game has been tested thouroughly by my 7 year old son and his classmates. 
I have received very positive feedback from users so far, who appear to enjoy playing the game.
* ***As a user, I am playing the game to learn new maths skills.*** My son has been succesfully learning his 3 and 4 times tables using the game. 
The option to select specific times tables to practice successfully enables targeted learning. See [Options](./assets/testing/features/options-3-4.png).
* ***As a user, I am playing the game to reinforce existing maths knowledge.*** My son has been reinforcing his existing knowledge of 2, 5 and 10 times tables using the game.
The option to select specific times tables to practice successfully enables targeted learning. See [Options](./assets/testing/features/options.png).
* ***As a user or parent, I would like to to provide feedback to the developer about the game.***
The **Contact Modal** has been succesfully implemented using 
[Email JS](https://www.emailjs.com/) and the [JavaScript Mail Library](./assets/js/mail.js), has been tested and works as intended. 
See below screen prints:  
<img src="./assets/testing/features/contact-modal.png" align="left" style="margin: 15px; width:300px;">
<img src="./assets/testing/features/contact-modal-success.png" style="margin: 15px; width:300px;">  
<img src="./assets/testing/features/contact-modal-email.png" style="margin: 15px; width:300px;">

## Additional UX Testing ##
The game has been tested thoroughly by my 7 year old son and his classmates over a two week period, 
and no errors or bugs have been reported. Users have said that the game is fun to play, and parents 
have said that the game ties in well with the school curriculum and has helped with learning.

## Manual Testing ##
* **Balloon Pop Maths** title link has been tested and works correctly, linking to home page if selected:
<img src="./assets/testing/features/title.png" style="margin: 15px; width:300px;"> 

* **Game Mode Selector** has been tested and works as intended, faciliting switching between
multiplication, division, subtraction and addition games. Hover styling is working as intended.  
<img src="./assets/testing/features/game-mode.png" style="margin: 15px; width:300px;"> 

* **High Score Panel**, has been tested and works as intended. **High Score Panel** is updated if the user gets a new high score.  
<img src="./assets/testing/features/high-score.png" style="margin: 15px; width:300px;"> 

* **Play Button** has been tested and works as intended, launching the game. 
Hover styling is working as intended. 
<img src="./assets/testing/features/play.png" style="margin: 15px; width:300px;"> 

* **Options Audio Controls** have been tested and work as intended, 
allowing audio to be toggled on and off from the **Options** area. 
Hover styling is working as intended. 
<img src="./assets/testing/features/options-audio.png" style="margin: 15px; width:300px;">

* **Options Button** has been tested and works as intended, opening collapsing **Options** panel. 
Hover styling is working as intended.  
<img src="./assets/testing/features/options.png" style="margin: 15px; width:300px;"> 

* **How To Play Button** has been tested and works as intended, opening collapsing information panel.
Hover styling is working as intended.  
<img src="./assets/testing/features/how-to-play.png" style="margin: 15px; width:300px;"> 

* **Footer Contact Developer Link** has been tested and works as intended, opening contact modal. 
Hover styling is working as intended.  
<img src="./assets/testing/features/contact-developer-link.png" style="margin: 15px; width:150px;">  
<img src="./assets/testing/features/contact-modal.png" style="margin: 15px; width:150px;">  

* **Footer GitHub Link** has been tested and works as intended, 
linking to developer page on github. 
Hover styling is working as intended.  
<img src="./assets/testing/features/github-link.png" style="margin: 15px; width:50px;"> 

* **In Game Home Button** has been tested and works as intended, returning to Home panel from game.
Hover styling is working as intended.   
<img src="./assets/testing/features/game-home.png" style="margin: 15px; width:100px;">

* **Game Loader**, has been tested and works as intended. 
**Game Loader** is displayed while the game window is loading.  
<img src="./assets/testing/features/game-loader.png" style="margin: 15px; width:100px;">  

* **In Game Score** has been tested and works as intended, recording current score in-game:  
<img src="./assets/testing/features/game-score.png" style="margin: 15px; width:100px;">

* **Answer Balloons** showing potential answers have been tested and work as intended. 
Balloons show a "pop" animation sequence and play a "pop" sound if the correct answer is selected. 
If an incorrect answer is selected, a "deflate" sound is played and the balloon and
answer fades out:
<img src="./assets/testing/features/game-balloons.png" style="margin: 15px; width:500px;">

* **Custom Cursor** has been tested and works as intended. Cursor is changed to a drawing pin when hovering over answer balloons:  
<img src="./assets/images/pin.svg" style="margin: 15px; width:30px;">

* **In Game Audio Controls** have been tested and work as intended, allowing audio to be toggled on and off in-game:  
<img src="./assets/testing/features/game-audio.png" style="margin: 15px; width:40px;">

* **Health Bar** has been tested and works as intended. Game finishes when health is fully depleted. 
If game is played on "Easy" difficulty level (selected in options), health is set to 5 hearts.
If game is played on "Medium" difficulty level (selected in options), health is set to 3 hearts.
If game is played on "Hard" difficulty level (selected in options), health is set to 1 heart:
<img src="./assets/testing/features/game-health.png" style="margin: 15px; width:150px;">

* **Question Panel** has been tested and works as intended, showing the current question:
<img src="./assets/testing/features/game-question.png" style="margin: 15px; width:200px;">

* **Contact Modal** has been tested and works as intended. 
If the contact form is succesfully submitted, a "Success" modal is displayed and an email is
sent to the developer. 
<img src="./assets/testing/features/contact-modal.png" style="margin: 15px; width:300px;">
<img src="./assets/testing/features/contact-modal-success.png" style="margin: 15px; width:300px;">
<img src="./assets/testing/features/contact-modal-email.png" style="margin: 15px; width:300px;">

* **Game Feedback Modal** has been tested and works as intended,  giving varying feedback to the user at the end of a game:
<img src="./assets/testing/features/modal-unlucky.png" style="margin: 15px; width:300px;">
<img src="./assets/testing/features/modal-well-done.png" style="margin: 15px; width:300px;">
<img src="./assets/testing/features/modal-high-score.png" style="margin: 15px; width:300px;">


### Responsive Design ###
* Responsive design has been tested by using [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) 
to emulate viewing the website on a number of devices with varying screen dimensions, 
including iPhone 5/SE, iPhone 6/7/8, iPhone 6/7/8 plus, iPhone 11, iPad, iPad Pro, Moto G4, Galaxy S5, Surface Duo, 
Galaxy Fold, Widescreen Laptop and Desktop PC. 
See [Responsive Design Testing](./assets/testing/responsive) screen prints, a selection of which are shown below:  
<img src="./assets/testing/responsive/home-iphone11.png" "width=250px" style="margin: 15px;">  
<img src="./assets/testing/responsive/home-ipad.png" "width=250px" style="margin: 15px;">  
<img src="./assets/testing/responsive/home-medium-screen.png" "width=250px" style="margin: 15px;">  
<img src="./assets/testing/responsive/game-iphone11.png" "width=250px" style="margin: 15px;">  
<img src="./assets/testing/responsive/game-ipad.png" "width=250px" style="margin: 15px;">  
<img src="./assets/testing/responsive/game-medium-screen.png" "width=250px" style="margin: 15px;">  

* Responsive design was then further tested using the 
[Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en)
plug in for chrome. This emulates viewing the website on a large number of devices, 
including iPhone XR, iPhone XS Max, iPhone XS, iPhone X, Galaxy S9 Plus, Galaxy S8 Plus, Galaxy S9, Note 8, Note S8, Pixel 3, Pixel 3XL,
Medium Desktop PC and Large Desktop PC. See 
[Responsive Design Testing](./assets/testing/responsive) screen prints, also shown below: 
<img src="./assets/testing/responsive/responsive-viewer-home-1.png" "width=250px" style="margin: 15px;">  
<img src="./assets/testing/responsive/responsive-viewer-home-2.png" "width=250px" style="margin: 15px;">  
<img src="./assets/testing/responsive/responsive-viewer-home-3.png" "width=250px" style="margin: 15px;">  
<img src="./assets/testing/responsive/responsive-viewer-home-4.png" "width=250px" style="margin: 15px;"> 
<img src="./assets/testing/responsive/responsive-viewer-game-1.png" "width=250px" style="margin: 15px;">  
<img src="./assets/testing/responsive/responsive-viewer-game-2.png" "width=250px" style="margin: 15px;">  
<img src="./assets/testing/responsive/responsive-viewer-game-3.png" "width=250px" style="margin: 15px;">  
<img src="./assets/testing/responsive/responsive-viewer-game-4.png" "width=250px" style="margin: 15px;">   

* The **Balloon Pop Maths** title behaves as expected, stacking on screens under 768 pixels wide.
* The **Game** view behaves as expected, showing 2 panels of 3 balloons stacked vertically on small and medium 
devices under 992 pixels wide, and shown side by side on large devices over 992 pixels wide.
* The **Game** view dynamically sizes as expected on devices up to 768 pixels wide. Two further sizes are 
implemented and behave as expected, on medium devices over 768 pixels wide and large devices over 992 pixels wide. 

### Browser Compatibility Testing ###

## Javascript Code Library Testing ##
Each individual function and event handler contained in the [JavaScript Code Library](./assets/js) was thoroughly 
tested in the Console window during the **Phase 1 Development**, to confirm correct operation. 
See [Bugs Fixed During Testing](#bugs-fixed-during-testing) for JavaScript bugs fixed during the testing process.

## Bugs Fixed During Testing ##
High Score should not be set if new score is 0.
Balloons fading out - javascript updated to fade back in on new game.
Responsive design.

## Bugs Remaining ##
There are no known bugs remaining.