// || SELECTORS
const playButtonEl = document.querySelector('header button#play');
const difficultySelectorEl = document.querySelector('#difficulty-selector');
const gridEl = document.querySelector('#grid');

// || VARIABLES
let bombsArray = [];


playButtonEl.addEventListener('click', function(){
    bombsArray = [];
    generateNewGame(gridEl, difficultySelectorEl.value, bombsArray);
    console.log(bombsArray);
})


// || FUNCTIONS

// --> function to start a new game
/**
 *  Function to generate a new game
 * @param {*} containerEl  grid container
 * @param {*} difficultyValue value of the difficulty selector
 * @param {*} arrayOfRandomNumbers  array of random generated numbers
 */
function generateNewGame(containerEl, difficultyValue, arrayOfRandomNumbers){
    containerEl.innerHTML = '';

    let cellsNumber;
    let className;

    // > switch to set the difficulty
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

    getArrayOfRandomNumbers(16, cellsNumber, arrayOfRandomNumbers);
    
    // > for cycle to create cells and their content
    for(let index = 0; index < cellsNumber; index++){
        const articleEl = document.createElement('article');
        articleEl.classList.add('cell', 'flex-centered', className);
        const spanEl = document.createElement('span');
        spanEl.append(index + 1);
        articleEl.appendChild(spanEl);

        // > adding .bomb class to cells
        if (arrayOfRandomNumbers.includes(index)){
            articleEl.classList.add('bomb');
        }
        
        // > the cell is clickable
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
/**
 * Get an array of random int numbers
 * @param {*} numbersToGenerate how many elements the array must contain
 * @param {*} intervalMaxValue max value of the interval in which generate the numbers
 * @param {*} numbersArray the array in which the numbers are pushed
 */
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