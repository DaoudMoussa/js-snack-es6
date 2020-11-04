// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa
// con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// Creazione arrow function che genera un numero random
const getRndNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Creazione array di bici (oggetti) con peso casuale da 10 a 100
const bikeList = [
    {
        name: 'pippoBike',
        weightInKg: getRndNumber(10, 100)
    },
    {
        name: 'plutoBike',
        weightInKg: getRndNumber(10, 100)
    },
    {
        name: 'paperinoBike',
        weightInKg: getRndNumber(10, 100)
    },
    {
        name: 'topolinoBike',
        weightInKg: getRndNumber(10, 100)
    }
];

// Dichiarazione variabile e inizializzazione come il primo elemento
let lightestBike = bikeList[0];

// Ciclo che confronta il peso di tut
bikeList.forEach((thisBike) => {
    let {name, weightInKg} = thisBike;
    console.log(`Il peso della bici ${name} è ${weightInKg} Kg`);
    if(weightInKg < lightestBike.weightInKg) {
        lightestBike = thisBike;
    }
});

let {name, weightInKg} = lightestBike;
console.log(`
    La bici più leggera è ${name}.
    con un peso di ${weightInKg} Kg

`);
