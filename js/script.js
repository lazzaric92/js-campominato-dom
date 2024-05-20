// || SELECTORS
const playButtonEl = document.querySelector('header button#play');
const difficultySelectorEl = document.querySelector('#difficulty-selector');
const gridEl = document.querySelector('#grid');




playButtonEl.addEventListener('click', function(){
    generateNewGame(gridEl, difficultySelectorEl.value);
})


// || FUNCTIONS

// --> function to start a new game
/**
 *  Funzione che genera una nuova partita
 * @param {*} containerEl  container che farà da griglia 
 * @param {*} difficultyValue  valore del selettore della difficoltà
 */
function generateNewGame(containerEl, difficultyValue){
    containerEl.innerHTML = '';
    let cellsNumber;
    let className;

    // > switch per settare la difficoltà
    switch(difficultyValue) {
        case 'easy':
            cellsNumber = 100;
            className = 'easy';
            break;
        case 'medium':
            cellsNumber = 81;
            className = 'medium';
            break;
        case 'hard':
            cellsNumber = 49;
            className = 'hard';
            break;
        default:
            cellsNumber = 100;
            className = 'easy';
    }
    
    // > ciclo for per creare le celle e il loro contenuto
    for(let index = 0; index < cellsNumber; index++){
        const articleEl = document.createElement('article');
        articleEl.classList.add('cell', 'flex-centered', className);
        const spanEl = document.createElement('span');
        spanEl.append(index + 1);
        articleEl.appendChild(spanEl);
        
        // > la cella deve essere cliccabile
        toClick(articleEl);

        containerEl.appendChild(articleEl);
    }
}

// --> function to make an element clickable
function toClick(element){
    element.addEventListener('click', function(){
        element.classList.add('active');
    })
}

// --> function to generate a random integer number
/**
 * Function to generate a random integer number in a set interval
 * @param {*} min interval min value, included
 * @param {*} max interval max value, included
 * @returns a random int number
 */
function getRandomInt(min, max){
    return Math.floor((Math.random() * (max - min) + 1) + min);
}

// --> function to generate bombs
function getArrayOfRandomNumbers(numbersToGenerate, intervalMaxValue, numbersArray){
    let index = 0;
    while (index < numbersToGenerate){
        const randomNumber = getRandomInt(0, intervalMaxValue);
        if (!numbersArray.includes(randomNumber)){
            numbersArray.push(randomNumber);
    }
        index++;
    }
}


// || MEMO
// <article class="cell flex-centered">