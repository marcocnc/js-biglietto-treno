// Dichiarazione variabili
const chilometri = parseInt(prompt('Quanti chilometri vorresti percorrere?', 100));
const age        = parseInt(prompt('Quanti anni hai?', 10));
const price      = 0.21;

console.log(chilometri, age);

let discount = 0;

// Prezzo ticket
let priceTicket = chilometri * price;
console.log(priceTicket);

// Sconti
if(age < 18) {
    discount = priceTicket * 20 / 100;
}

if(age > 65) {
    discount = priceTicket * 40 / 100;
}

// Output

const message = `
Salve viaggiatore/viaggiatrice, il tuo biglietto costa ${priceTicket - discount}€!
`
console.log(message);

document.getElementById('messageElement').innerHTML = message;