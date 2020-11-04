// Creare un array di nomi e chiedere all'utente due numeri.
// Creare un nuovo array con i valori che si trovano in una posizione compresa (compresi i numeri inseriti)
// tra i due numeri inseriti dall'utente.

// Creazione array conenente una lista di nomi
const nameArray = ['Pippo', 'Pluto', 'Paperino', 'Mario', 'Francesco', 'Luigi', 'Topolino'];

const min = parseInt(prompt('Inserire posizione iniziale array')) - 1;

const max = parseInt(prompt('Inserire posizione finale array'));

// Utilizzando nella callback function una variabile globale
// const newNameArray = nameArray.filter((name, index) => (index >= min && index < max));

// Non utilizzando variabili globali nella callback function
const filterFunction = (indexMin, indexMax) => {
    console.log(indexMin, indexMax);
    return (name, index) => (index >= indexMin && index < indexMax)
}

const newNameArray = nameArray.filter(filterFunction(min, max));

console.log(nameArray, newNameArray);
