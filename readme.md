L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Recupero dal DOM gli elementi button e main e li salvo.
Aggiungo al bottone un eventListener che al click:
    generi all'interno del main la sezione #grid in cui verrà posizionata la griglia (ogni volta che il bottone viene premuto, la griglia viene sovrascritta);
    Scrivo un ciclo for (con indice che va da 0 al numero totale di celle della griglia) che:
        crei la cella .cell;
        crei uno span;
        appenda l'indice allo span; 
        appenda lo span alla cella;
        (la cella deve essere cliccabile)
        aggiunga un eventListener alla cella che al click:
            aggiunge o toglie la classe .active alla cella; 
        appenda la cella alla sezione #grid.



! Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Dichiaro una variabile per il numero delle celle
Dichiaro una variabile per la difficoltà

Richiamo la funzione 'setDifficulty' con option.value come argomento (deve essere la prima cosa che avviene in pagina)

Nel ciclo per creare le celle aggiungo una classe alla cella (per il calcolo della grandezza) a seconda della difficoltà scelta

Creo una funzione 'setDifficulty' con parametro 'a' che setti la difficoltà al valore 'a' e
    - se 'a' è uguale a 'medium', allora le celle sono 81;
    - se 'a' è uguale a 'hard', allora le celle sono 49 ;
    - in tutti gli altri casi sono 100;