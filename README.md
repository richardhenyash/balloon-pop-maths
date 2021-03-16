# Balloon Pop Maths #

## Contents ##
- [Background](#background)
- [Site Owner Goals](#site-owner-goals)
- [Project Goals](#project-goals)
- [User Goals](#user-goals)
- [UX](#ux)
    - [Project Strategy](#project-strategy)
        - [Opportunities Matrix](#opportunities-matrix)
        - [Initial Development Phase](#initial-development-phase)
    - [Project Scope](#project-scope)
        - [User Demographics](#user-demographics)
        - [User Requirements](#user-requirements)
        - [User Stories](#user-stories)
        - [Contraints](#constraints)
        - [Functional Requirements](#functional-requirements)
        - [Business Rules](#business-rules)
        - [Features](#features)
    - [Site Map](#site-map)
    - [Wireframes](#wireframes)
    - [Design Choices](#design-choices)
        - [Fonts](#fonts)
        - [Colours](#colours)
- [Technologies](#technologies)
    - [Languages](#languages)
    - [Frameworks Libraries and Tools](#frameworks-libraries-and-tools)
- [Features](#features)
    - [Features Implemented in Phase 1](#features-implemented-in-phase-1)
    - [Features To Be Implemented In Future Development Phases](#features-to-be-implemented-in-future-development-phases)
    - [Design Changes During The Phase 1 Development](#design-changes-during-the-phase-1-development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)

## Background ##
During the Covid pandemic, many parents have been required to facilitate education for their children at home. Often, parents have found
themselves juggling full time jobs and home education responsibilities. School work, especially for younger children, requires a 
high degree of facilitation and help from busy parents. Interative web based maths games can give children an engaging way of 
learning new maths skills and reinforcing existing maths knowledge independently.

## Site Owner Goals ##
Developing the site will serve as a learning experience for the developer. The finished website will act as a showcase for the
developer's new skills and will also help to raise the developer's profile. The devloper also hopes that his 7 year old
son will become a keen user of the site!

## Project Goals ##
To provide a simple and engaging maths game that young children are able to play independently to learn new maths skills and to
reinforce existing maths knowledge.

## User Goals ##
To play the maths game for fun, to learn new maths skills and to reinforce existing maths knowledge.

## UX ##

### Project Strategy ###

#### Opportunities Matrix ####
The following opportunities were identified and ranked using a score of 1 - 5 for importance and viability:

Opportunity | Importance |Viability
------------| -----------|---------
Balloon Pop Multiplication game|5|4
Balloon Pop Division game|3|4
Balloon Pop Addition game|3|4
Balloon Pop Subtraction game|3|4
Contact Form to contact developer|3|5
Link to developer [GitHub] page (https://github.com/richardhenyash)|4|5
Subscribe Option|1|2

<img src="/assets/wireframes/initial-strategy.png" style="margin: 15px; width: 400px;">

#### Initial Development Phase ####
The opportunities matrix was used to help decide which items should be included for the initial development phase (phase 1):
Item|Development Phase
----|-----------------
Balloon Pop Multiplication game|1
Contact Form to contact developer|1
Link to developer [GitHub] page (https://github.com/richardhenyash)|1
Balloon Pop Division game|1
Balloon Pop Addition game|1
Balloon Pop Subtraction game|1
Subscribe Option|2

### Project Scope ###
#### User Demographics ####
* The primary users of the site will be Key Stage 1 and 2 school pupils from ages 5 to 10.
* A simple, bright, colorful and engaging design would fit this demographic.

#### User Requirements ####
* Visually engaging
* Easy to navigate
* Easy to update game settings
* Responsive design is required as users may be viewing the site on Mobile, Tablet or Desktop.

#### User Stories ####
* ***As a user, I am playing the game for fun and enjoyment.***
* ***As a user, I am playing the game to learn new maths skills.***
* ***As a user, I am playing the game to reinforce existing maths knowledge.***
* ***As a user or parent, I would like to to provide feedback to the developer about the game.***

#### Constraints #####
* Developer skill set - the developer is currently learning JavaScript. This may impact on whether all four maths games
can be incorporated into the site in the initial development phase.

#### Functional Requirements ####
* The User would like to be able to select different maths games to play.
* The user would like to be able to select different options within each maths game - e.g. 2x, 5x and 10x tables
within the multiplication game, or addition of numbers up to 20 in the addition game.
* The user would like to be able to set the difficulty level of the maths games -  this will give the games a wider age appeal.
* The user needs to be able to initiate the game from the menu, and return to the main menu if they want to abort the current game.
* The user would like to see their current score, and their previous top score. This will mean that the user is more likely to play
another game or return to the site in the future to better their previous score.
* The user would like to be able to contact the developer.


#### Business Rules ####
* It is not envisaged that the game will be sold for profit. However, the game should be as much fun as possible to play, in order to 
maximise the learning opportunities for users, increase the game's following and therefore increase the profile of the developer.

#### Features ####
The following key features have been identified and scored from 1 - 5 for importance and difficulty. The proposed development phase has also been indicated:
Feature|Importance|Difficulty|Development Phase
-------|----------|----------|-----------------
Balloon Pop Multiplication game| 5 | 3 | 1 |
Contact Form to contact developer | 4 | 2 | 1
Link to developer [GitHub] page (https://github.com/richardhenyash) | 3 | 1 | 1
Balloon Pop Division game| 3 | 3 | 1
Balloon Pop Addition game| 3 | 3 | 1
Balloon Pop Subtraction game| 3 | 3 | 1
Subscribe Option| 1 | 3 | 2

### Site Map ###
An initial [Site Map](/assets/wireframes/site-map.png) was produced, and is shown below:  
<img src="./assets/wireframes/site-map.png" width="400px" style="margin: 15px;">

### Wireframes ###
[Hand Sketches](/assets/wireframes/rev0) were initially produced showing the home page and times table game:  

<img src="./assets/wireframes/rev0/home-sketch.jpg" width="600px" style="margin: 15px;">
<img src="./assets/wireframes/rev0/game-sketch.jpg" width="600px" style="margin: 15px;">

[Initial Wireframes](/assets/wireframes/rev1) were produced showing the [Home]("/assets/wireframes/rev1/home-multiplication.png)
page layout for each game mode: ([Multiplication]("/assets/wireframes/rev1/home-multiplication.png), 
[Division]("/assets/wireframes/rev1/home-division.png), [Addition]("/assets/wireframes/rev1/home-addition.png) 
and [Subtraction]("/assets/wireframes/rev1/home-subtraction.png).  The  home page [Multiplication]("/assets/wireframes/rev1/home-multiplication.png)
layout is also shown below:  

<img src="./assets/wireframes/rev1/home-multiplication.png" width="600px" style="margin: 15px;"> 

[Initial Wireframes](/assets/wireframes/rev1) were also produced showing the [Game]("/assets/wireframes/rev1/game-multiplication.png) 
page layout for each game mode: ([Multiplication]("/assets/wireframes/rev1/game-multiplication.png), 
[Division]("/assets/wireframes/rev1/game-division.png), [Addition]("/assets/wireframes/rev1/game-addition.png) 
and [Subtraction]("/assets/wireframes/rev1/game-subtraction.png).  The game page [Multiplication]("/assets/wireframes/rev1/game-multiplication.png)
layout is also shown below:  

<img src="./assets/wireframes/rev1/game-multiplication.png" width="600px" style="margin: 15px;"> 

[Responsive design wireframes](/assets/wireframes/rev2) were then produced showing the [Home]("/assets/wireframes/rev1/home-multiplication.png)
and [Game]("./assets/wireframes/rev1/game-multiplication.png) page layouts on [Tablet]("/assets/wireframes/rev2/home-multiplication-tablet.png) and
[Phone]("./assets/wireframes/rev2/home-multiplication-phone.png). The [Responsive design wireframes](/assets/wireframes/rev2) are also shown below:  

<img src="./assets/wireframes/rev2/home-multiplication-tablet.png" width="300px" align="left" valign="middle" style="margin: 15px;">
<img src="./assets/wireframes/rev2/home-multiplication-phone.png" width="300px" align="left" valign="middle" style="margin: 15px;">
<img src="./assets/wireframes/rev2/game-multiplication-tablet.png" width="300px" align="left" valign="middle" style="margin: 15px;">
<img src="./assets/wireframes/rev2/game-multiplication-phone.png" width="300px" align="left" valign="middle" style="margin: 15px;">

### Design Choices ###

#### Fonts ####


#### Colours ####


## Credits ##

Balloon Favicon:
https://www.favicon.cc/?action=icon&file_id=706495

Balloon Sprite Images:
http://www.gamedeveloperstudio.com/

Pin SVG Image
https://www.svgrepo.com/svg/207632/push-pin

Sound Effects:
https://mixkit.co/free-sound-effects/game/

Sprite animation:
https://spicyyoghurt.com/tutorials/html5-javascript-game-development/images-and-sprite-animations
https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3

Ramdom integer between 2 given integers:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Function to randomize an array in place using the Durstenfeld shuffle algorithm, referenced from stack overflow link below, many thanks to Laurens Holst
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
