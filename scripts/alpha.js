function handleKeyboardButtonPress(event) {
   const playerPressed = event.key;

//    get expected press
   const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText;
   const expectedAlphabet =currentAlphabet.toLowerCase();

   if(playerPressed === expectedAlphabet){
    const currentScoreElement = getElementTextByID('current-score');
    const currentScore = currentScoreElement + 1;
    setElementTextByID('current-score', currentScore);
    

    //new round
    removeBackgroundColorByID(expectedAlphabet);
    continueGame();

    
   }

   else {
   
    const currentLifeElement = getElementTextByID('life');
    const currentLife = currentLifeElement - 1;
    setElementTextByID('life', currentLife);
    if (currentLife === 0) {
        hideElementByID('play-ground');
        showElementById('score-board');
        // finul score
        const finalScore = getElementTextByID('current-score');
        setElementTextByID('final-score', finalScore);

        // clear the last alphabet background;
        const currentAlphabet = getElementTextValueByID('current-alphabet');
        removeBackgroundColorByID(currentAlphabet);
    }

   }
}
document.addEventListener('keyup', handleKeyboardButtonPress);


// get alphabet
function continueGame(){
    const alphabet = getARandomAlphabet();
    // set randomly gererated alphabet to the sreen
    const currentAlphabetElement =  document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    addBackgroundColorByID(alphabet);
}






//  enter the game
function play (){
    //hide all section show only playground
    hideElementByID('home-screen');
    showElementById('play-ground');
    hideElementByID('score-board')

    //reset score and life
    setElementTextByID('life', 5);
    setElementTextByID('current-score', 0)
    continueGame()
}



