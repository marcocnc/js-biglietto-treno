// Dichiarazione variabili
const chilometri = prompt('Quanti chilometri vorresti percorrere?');
const age = prompt('Quanti anni hai?');
const price = 0.21;

console.log(chilometri, age);

const discount20 = "";
const discount40 = "";

// Prezzo ticket
const priceTicket = chilometri * price;
console.log(priceTicket);

// Sconti
if(age < 18){
    const discount20 = priceTicket * 20 / 100;
    const priceDiscounted20 = priceTicket - discount20;
    console.log(priceDiscounted20);
}

if(age > 65){
    const discount40 = priceTicket * 40 / 100;
    const priceDiscounted40 = priceTicket - discount40;
    console.log(priceDiscounted40);
}

// Output

const message = `
Salve viaggiatore/viaggiatrice, il tuo biglietto costa ${priceTicket}€!
`
console.log(message);

// document.getElementById('messageElement').innerHTML = message;