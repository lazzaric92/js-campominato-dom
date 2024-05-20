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
        articleEl.addEventListener('click', function(){
            articleEl.classList.add('active');
        })

        containerEl.appendChild(articleEl);
    }
}


// || MEMO
// <article class="cell flex-centered">