// A partire da un array di oggetti, creare una copia dell'array e aggiungere ai
// singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

const getRndLetter = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

// Creazione array di oggetti
var oldArray = [
    {
        nome: 'pippo',
        cognome: 'verdi'
    },
    {
        nome: 'pluto',
        cognome: 'gialli'
    },
    {
        nome: 'paperino',
        cognome: 'rossi'
    },
    {
        nome: 'topolino',
        cognome: 'arancioni'
    }
];

// let newArray = [];
//
// oldArray.forEach((thisObject) => {
//     let position = getRndLetter();
//     let newObject = {...thisObject, position};
//     newArray.push(newObject);
// });

let newArray = [];

newArray = oldArray.map((thisObject) => {
    let position = getRndLetter();
    let newObject = {...thisObject, position};
    return newObject;
});
console.log(oldArray, newArray);
