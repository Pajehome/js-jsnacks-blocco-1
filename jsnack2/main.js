// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const empty = [];



for (let i=0; i < 6; i++){
    let InserisciNumero = parseInt(prompt('inserisci numero'));
    if(InserisciNumero % 2 === 1){
        
        empty.push(InserisciNumero);
        console.log(empty)
    }
}