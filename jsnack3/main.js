// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

const addNumber = parseInt(prompt('Inserisci numero'))

// let x = addNumber.split('')

// console.log(x)
let total = 0;


let arr = [];
arr.push(addNumber);
let x = arr.split('')
console.log(x)
for (let i = 0; i < arr.length; i++)
{
  let pippo =  total += arr[i];
  console.log(pippo)
}