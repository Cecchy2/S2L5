/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstElement = pets[0];
/* console.log(firstElement); */
pets.shift();
/* console.log(pets); */
pets.push(firstElement);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const licensePlate = [3674762, 6362767, 7843426];
console.log(licensePlate);
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlate[i];
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const nuovaMacchina = {
  brand: "Jeep",
  model: "Renegade",
  color: "black",
  trims: ["2.0", "1.6", "sport"],
};
cars.push(nuovaMacchina);
console.log(cars);
for (let i = 0; i < cars.length; i++) {
  cars[i] - cars[i].trims.pop();
  console.log(cars);
}

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  const firstElement = cars[i].trims[0];
  justTrims.push(firstElement);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const macchinaAttuale = cars[i];
  console.log(macchinaAttuale);
  if (macchinaAttuale.color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
while (numericArray[i] !== 66) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "z",
];
const numeroPosizione = [];
let posizione = 0;
for (let i = 0; i < alfabeto.length; i++) {
  const letteraCorrente = alfabeto[i];
  /* console.log(letteraCorrente); */
  const letteraArrayCorrente = charactersArray[i];
  /* console.log(letteraArrayCorrente); */
  switch (letteraArrayCorrente) {
    case "a":
      posizione = alfabeto.indexOf("a");
      break;
    case "b":
      posizione = alfabeto.indexOf("b");
      break;
    case "c":
      posizione = alfabeto.indexOf("c");
      break;
    case "d":
      posizione = alfabeto.indexOf("d");
      break;
    case "e":
      posizione = alfabeto.indexOf("e");
      break;
    case "f":
      posizione = alfabeto.indexOf("f");
      break;
    case "g":
      posizione = alfabeto.indexOf("g");
      break;
    case "h":
      posizione = alfabeto.indexOf("h");
      break;
    case "i":
      posizione = alfabeto.indexOf("i");
      break;
    case "l":
      posizione = alfabeto.indexOf("l");
      break;
    case "m":
      posizione = alfabeto.indexOf("m");
      break;
    case "n":
      posizione = alfabeto.indexOf("n");
      break;
    case "o":
      posizione = alfabeto.indexOf("o");
      break;
    case "p":
      posizione = alfabeto.indexOf("p");
      break;
    case "q":
      posizione = alfabeto.indexOf("q");
      break;
    case "r":
      posizione = alfabeto.indexOf("r");
      break;
    case "s":
      posizione = alfabeto.indexOf("s");
      break;
    case "t":
      posizione = alfabeto.indexOf("t");
      break;
    case "u":
      posizione = alfabeto.indexOf("u");
      break;
    case "v":
      posizione = alfabeto.indexOf("v");
      break;
    case "z":
      posizione = alfabeto.indexOf("z");
      break;

    default:
      break;
  }
  numeroPosizione.push(posizione);
}
console.log(numeroPosizione);
