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
The option to select specific times tables to practice enables targeted learning. See [Options]("/assets/testing/features/options.png).
* ***As a user, I am playing the game to reinforce existing maths knowledge.*** My son has been reinforcing his existing knowledge of 2, 5 and 10 times tables using the game.
The option to select specific times tables to practice enables targeted learning. See [Options]("/assets/testing/features/options.png).
* ***As a user or parent, I would like to to provide feedback to the developer about the game.***
The **Contact Modal** has been succesfully implemented using 
[Email JS](https://www.emailjs.com/) and the [JavaScript Mail Library](./assets/js/mail.js), has been tested and works as intended. 
See below screen prints:  
<img src="./assets/testing/features/contact-modal.png" align="left" style="margin: 15px; width:300px;">
<img src="./assets/testing/features/contact-modal-success.png" style="margin: 15px; width:300px;">  


<img src="./assets/testing/features/contact-modal-email.png" style="margin: 15px; width:300px;">


## Additional UX Testing ##

## Manual Testing ##

### Responsive Design ###

### Browser Compatibility Testing ###

## Bugs Fixed During Testing ##

## Bugs Remaining ##
There are no known bugs remaining.