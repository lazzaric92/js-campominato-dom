! PARTE 1
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

! Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;



Recupero dal DOM il bottone Play, il selettore di difficoltà e la sezione del main in cui andrà la griglia e li salvo.
Aggiungo al bottone un eventListener che al click:
    richiami la funzione 'generateNewGame' con argomenti il contenitore che fungerà da griglia e il valore del selettore di difficoltà


Creo la funzione 'generateNewGame' con parametri il contenitore-griglia e la difficoltà scelta: 
    svuoto il contenitore;
    con uno switch setto la difficoltà in base alla quale cambieranno il numero di celle e le loro dimensioni;
    scrivo un ciclo for (con indice che va da 0 al numero totale di celle della griglia) che:
        crei la cella .cell;
        crei uno span;
        appenda l'indice allo span; 
        appenda lo span alla cella;
        (la cella deve essere cliccabile)
        aggiunga un eventListener alla cella che al click:
            aggiunge la classe .active alla cella; 
        appenda la cella al contenitore.


! PARTE 2
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

! BONUS
- Quando termina la partita tutte le bombe diventano visibili;
- Le celle possono essere cliccate solo una volta;

Creo l'array delle bombe ('bombsArray').
Creo l'array delle celle attive ('activatedCells').

Richiamo la funzione 'genarateBombs' con argomenti il numero di bombe (16), il numero di celle (dato dalla difficoltà) e 'bombsArray'.
Alle celle con indice pari ai numeri presenti in 'bombsArray' viene assegnata la classe 'bomb' (che colora la cella di rosso).

L'utente clicca su una cella (alla quale al click è aggiunta classe .active):
    lo score aumenta di 1;
    (l'indice della cella cliccata viene pushato in 'activatedCells';
    se l'indice della cella è presente in 'activatedCells' lo score rimane uguale a se stesso);
L'utente può continuare a cliccare finchè la cella cliccata non ha classe .bomb oppure il numero di celle non cliccate è uguale alla lunghezza di 'bombsArray'.
Se una delle due condizioni sopraccitate si verifica, il gioco si interrompe. 

Creo una funzione 'generateBombs', con parametri la quantità di numeri da generare, il numero max  per la funzione 'getrandomInt' e un array, che 
    richiami la funzione 'getRandomInt' con argomenti 0 e il sopraccitato max, 
    pushi il numero randomico nell'array se questo non è già presente,
    finché i numeri presenti nell'array non sono tanti quanti i numeri da generare (il numero di bombe desiderato).


Creo la funzione 'getRandomInt' con parametri min e max che
    generi un numero intero casuale compreso tra min e max inclusi.