// || SELECTORS
const playButtonEl = document.querySelector('button#play');
const difficultySelectorEl = document.querySelector('#difficulty-selector');
const gridEl = document.querySelector('#grid');
const pScoreEl = document.querySelector('main > section > p#score');
const alertDivEl = document.querySelector('div.alert');
const restartButtonEl = document.querySelector('button#restart');
const alertMessageEl = document.querySelector('p#gameover-message');
const gameOverScoreEl = document.querySelector('p#gameover-score');

// || VARIABLES
const bombsNumber = 16;
let bombsArray = [];
let score = 0;
const triggerClassName = 'bomb';
const clickedClassName = 'active';


playButtonEl.addEventListener('click', function(){
    bombsArray = [];
    generateNewGame(gridEl, difficultySelectorEl.value, bombsArray);
    showScore(pScoreEl, score);
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
    let score = 0;
    let activeCells = [];

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

    getArrayOfRandomNumbers(bombsNumber, cellsNumber, arrayOfRandomNumbers);
    
    // > for cycle to create cells and their content
    for(let index = 0; index < cellsNumber; index++){
        const articleEl = document.createElement('article');
        articleEl.classList.add('cell', 'flex-centered', className);
        const spanEl = document.createElement('span');
        spanEl.append(index + 1);
        articleEl.appendChild(spanEl);

        // > adding .bomb class to cells
        if (arrayOfRandomNumbers.includes(index)){
            articleEl.classList.add(triggerClassName);
        }
        
        // > the cell is clickable
        articleEl.addEventListener('click', function(){
            if(!articleEl.classList.contains(clickedClassName) && !articleEl.classList.contains(triggerClassName)) {
                articleEl.classList.add(clickedClassName);
                score++;
                activeCells.push(index);
            } else if (!articleEl.classList.contains(clickedClassName) && articleEl.classList.contains(triggerClassName)){
                articleEl.classList.add(clickedClassName);
                score = score;
                showAlert('Game Over!', score, containerEl);
            } else {
                score = score;
            }

            showScore(pScoreEl, score);
            checkForWin(cellsNumber, activeCells, arrayOfRandomNumbers, score, containerEl);
        })
        
        containerEl.appendChild(articleEl);
    }
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
    while (numbersArray.length < numbersToGenerate){
        const randomNumber = getRandomInt(0, intervalMaxValue);
        if (!numbersArray.includes(randomNumber)){
            numbersArray.push(randomNumber);
    }
        index++;
    }
    return;
}

// --> function to show score
/**
 * Function to show score on page
 * @param {*} containerEl the element that show the score
 * @param {*} scoreToShow
 */
function showScore(containerEl, scoreToShow){
    containerEl.innerHTML = 'Score: ';
    const scoreSpanEl = document.createElement('span');
    scoreSpanEl.innerHTML = scoreToShow;
    containerEl.append(scoreSpanEl);
    return;
}

function checkForWin(numberOfCells, clickedElements, blackList, score, containerEl){
    if (numberOfCells - clickedElements.length === blackList.length){
        console.log('Victory!');
        return showAlert('Victory!', score, containerEl);
    }
}

function showAlert(alertMessage, score, containerEl){
    alertDivEl.classList.remove('hidden');
    alertMessageEl.innerHTML = alertMessage;
    gameOverScoreEl.innerHTML = 'Score: ' + score;
    restartButtonEl.addEventListener('click', function(){
        containerEl.innerHTML = '';
        alertDivEl.classList.add('hidden');
        pScoreEl.innerHTML = 'Select difficulty and start a new game!'
    })
}


// || MEMO
// <article class="cell flex-centered">