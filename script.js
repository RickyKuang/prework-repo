// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 5, 4, 3, 6, 1, 2, 4, 5, 1, 6];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0;
var pauseTime = cluePauseTime;
var holdTime = clueHoldTime;
var chances = 3; // the amount of chances player has to guess right pattern

function startGame(){
  // shuffles the pattern around by swapping array elements randomly
  shufflePattern();
  
  //initialize game variables
  progress = 0;
  holdTime = clueHoldTime;
  pauseTime = cluePauseTime;
  chances = 3;
  gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  // ADDED BUTTON: if the user wants to hear clue again, there will be
  // a button to replay the clue
  document.getElementById("clueBtn").classList.remove("hidden");
  
  // Display number of chances user has
  document.getElementById("chanceString").innerHTML = "Chances Left: " + chances;
  
  playClueSequence();
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  document.getElementById("clueBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += holdTime;
    delay += pauseTime;
  }
  holdTime -= 20;
  pauseTime -= 10;
}
function shufflePattern(){
  for(let x=0;x<pattern.length;x++){
    var y = Math.floor(Math.random() * pattern.length-1) + 1;
    
    var temp = pattern[y];
    pattern[y] = pattern[x];
    pattern[x] = temp;
  }
}
function randomPattern(){
  for(let i=0;i<pattern.length;i++){
    var y = Math.floor(Math.random() * 6) + 1;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // game logic
  // correct guess
  if(btn == pattern[guessCounter])
  {
    // game in progress
    if(guessCounter == progress)
    {
      // player wins game
      if(progress == pattern.length-1){
        winGame();
      }
      // more clues left, keep playing
      else if(progress != pattern.length-1){
        progress += 1;
        chances = 3;
        document.getElementById("chanceString").innerHTML = "Chances Left: " + chances;
        playClueSequence();
      }
    }
    
    // game not in progress
    else if (guessCounter != progress){
      guessCounter += 1;
    }
  }
  // wrong guess    
  else if(btn != pattern[guessCounter] && chances > 1){
    guessCounter = 0;
    chances -= 1;
    document.getElementById("chanceString").innerHTML = "Chances Left: " + chances;
    playClueSequence();
  }
  
  // wrong guess, no more chances
  else{
    chances -= 1;
    document.getElementById("chanceString").innerHTML = "Chances Left: " + chances;
    holdTime = clueHoldTime;
    pauseTime = cluePauseTime;
    loseGame();
    chances = 3;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Congratulations! We have a winner.");
}

// Sound Synthesis Functions
const freqMap = {
  1: 500.5,
  2: 410.5,
  3: 352.5,
  4: 306.5,
  5: 257.5,
  6: 200.5
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)