let POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate",
     "obsequious", "dissonant", "toady", "impedempotent" ];

let guesses = "";
let word = "";
let MAX_GUESSES = 6;
let guessCount = MAX_GUESSES;
let gameOver = false;

function newGame(){
    guesses = "";
    guessCount = MAX_GUESSES;
    gameOver = false;

    let randomIndex = parseInt(
        Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];

    updateScreen();
}
function guess(){
    let input = document.getElementById("guess");
    let letter = input.value.toLowerCase();
    input.value = "";
    if(word =="");
    alert("Start a new game");
    return;
}
if(word == ""){
    alert (Start new game");
        return;
}
if(gameOver){
    alert("Game over, start a new game");
    return;
}
if(letter == ""{
    return;
}
input.value = "";
if (guesses.indexOf(letter) >=0){
    alert("that letter has  been guessed already");
    return;
}
    if(word.indexOf(letter) <0){
        guessCount--;
    }

    guesses += letter;

    updateScreen();
let wordGuessed = true; 
for (let i=0; i<word.length; i++){
    let letter = word.charAt(i);
    if (guesses.indexOf(letter) <0){
        wordGuessed = false;
    } 
}
if (wordGuessed){
    gameOver = true;
    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "You guessed the word!:"+word;
    alert("You've Won!);
}
else if (guessCount <=0){
    gameOver = true;
    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "You lost. The word was: "+word;
    alert("The word was:"+word);
   }
} 
function updateScreen(){ 
    let clueString = "";

     for (let i=0; i<word.length; i++){
        let letter = word.charAt(i);

    if(guesses.indexOf(letter)>=0){
        clueString += letter + " ";
    }
     else{ 
       cluestring += "_ ";
    }
}
    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guessed Letters: " + guesses;

    let image = document.getElementById("hangmanpic");
    image.src='images/${guessCount}.gif';
}
newGame();