# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Ricky Kuang**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/rickykuang-lightsound

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] A clue button that replays the clue sequence, should the user want it replayed.
- [x] In addition to adding more chances to guess the pattern, I added text to the HTML page to display the live count
of the chances.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/CSOZRTH.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* For random number with range: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
* For displaying global variable from Javascript in HTML: https://www.geeksforgeeks.org/how-to-change-the-value-of-a-global-variable-inside-of-a-function-using-javascript/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
* The main challenge that I encountered in creating this light and sound memory game is learning the different languages that this program entails, 
which made it difficult for implementing the optional and additional features for the game. The code that was required for the game wasn't too 
difficult to accomplish since essentially all of it was given; the only challenge in completing the main part of the game was understanding what 
the code did and how it was accomplished. Understanding the code was where the challenges began since I was largely unfamiliar with HTML, Javascript, 
and CSS. There were some aspects that I remembered from previous classes I had taken as well as similar concepts such as for loops and methods/functions 
from other languages I learned, but overall I still had to take the time to grasp the new concepts I learned. Since there was essentially no guidance 
for the additional/optional features, I had to reflect on the knowledge that I already had as well as learn how to do different things on my own. Things 
making a function that created a random secret pattern weren't too difficult to implement since I had learned concepts like that in previous classes I had
taken, and the syntax of Javascript wasn't too different from the language I'm most familiar with (Java). For concepts that I had absolutely no prior 
knowledge about, such as displaying a global variable from the JS file in the HTML page, I researched them using websites like Stack Overflow or 
Geeks for Geeks to learn more about the syntax and features available to me. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
* As I was making the game, many questions popped up for me, and some were answered in the process of doing this. However, I had some questions that were 
left unanswered after completing my submission. The questions I have are: 
  1) Aside from Javascript and CSS, what other languages, if any, are compatible with HTML? So far with what I've seen of HTML, I've only noticed that 
  Javascript and CSS being used to compliment HTML webpages, but I wonder if other languages can also be used in their place. It'd be nice to be able to 
  use other languages such as Java (a language I'm more familiar with) to make HTML pages.
  2) Is it possible to exclude a Javascript file from an HTML project? I know that HTML isn't like most other programming langauges, and Javascript allows 
  the use of functions in an HTML web page. However, I was wondering if it is possible to do most if not all of the things that Javascript does in just an 
  HTML page?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
* If I had a few more hours to work on this project, I would spend the time to add even more features so that the game isn't limited to one game mode, and I'd try to find other ways
to make the game more unique. The game itself is limited in that there's really only one game mode, so to make it more entertaining, I would try implementing a different game mode so
that the player has more options to choose from. One feature that I tried to implement but wasn't able to fully implement to my liking was the "Clue" button feature. I felt that it is a 
useful feature to have since players may not hear the clue sequence initially, but I wanted to implement it so that the player could only request to see the clue once each turn only. 
However, I wasn't able to figure out a way to hide the Clue button after it was clicked once, so that's a feature I could improve on. Another additional feature I might consider adding 
is more modularity or customization so that the player has more freedom with the game to choose how the game looked. To give the game more life, I think adding animations to the game would 
help make it more unique.



## License

    Copyright [Ricky Kuang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.