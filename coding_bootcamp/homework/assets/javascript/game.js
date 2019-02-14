

// Create an array of words
const word = ['Gretel', 'Hansel', 'Cinderella', 'Rumpelstiltskin'];


// Choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let chosenWord = word[randNum];
let rightWord =[];
letwrongWord = [];
let underScore = [];


let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');



console.log(chosenWord);
// Create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

// Get user's guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
// Check if guess is right
// If right push to right array
// If wrong push to wrong array
    if(chosenWord.indexOf(keyword) > -1) {
        rightWord.push(keyword);
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;
        if (underScore.join('') == chosenWord) {
            alert ('You Win');
        }
    }
    
    else {
        wrongWord.push(keyword);
            alert ('You Lose');
        }
});

generateUnderscore();
