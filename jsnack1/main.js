// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const nomi = ['Paul', 'John', 'Paula', 'Johnatan'];
let inserisci = prompt('Inserisci il tuo nome');

let bool = false;

for (let i=0; i < nomi.length; i++) {

    if(inserisci === nomi[i]){
     
    bool = true;
    }

}
if(bool){
    alert('Ti stavamo aspettando benvenuto');
}
else{
    alert('Non sei nella lista')
} 

   