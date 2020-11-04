// Creare un array di nomi e chiedere all'utente due numeri.
// Creare un nuovo array con i valori che si trovano in una posizione compresa (compresi i numeri inseriti)
// tra i due numeri inseriti dall'utente.

// Creazione array conenente una lista di nomi
const nameArray = ['Pippo', 'Pluto', 'Paperino', 'Mario', 'Francesco', 'Luigi', 'Topolino'];

const min = prompt('Inserire posizione iniziale array') - 1;

const max = prompt('Inserire posizione finale array');

const newNameArray = nameArray.filter((name, index) => (index >= min && index < max));

console.log(nameArray, newNameArray);
