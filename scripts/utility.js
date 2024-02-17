
// hide element........
function hideElementByID(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
// show element.............
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// add bg color
function addBackgroundColorByID (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}

// remove bg color
function removeBackgroundColorByID (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]')
}

function getElementTextValueByID(elementID) {
    const elementText = document.getElementById(elementID);
    const text = elementText.innerText;
    return text;
}


function getElementTextByID (elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const valueText = parseInt(elementValueText);
    return valueText;
}

function setElementTextByID (elementID, value){
    const element = document.getElementById(elementID);
    element.innerText = value;
}


// random Alphabet
function getARandomAlphabet (){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz/';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 26;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}