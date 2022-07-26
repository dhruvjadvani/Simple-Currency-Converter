//Write your code here
const input = require('sync-input');

const currencies = {
    USD: 1.0, 
    JPY: 113.5, 
    EUR: 0.89, 
    RUB: 74.36, 
    GBP: 0.75
};

console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

let frm;
let to;
let amount;
let conv;


while(true) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    let oneOrTwo = Number(input());

    if(isNaN(oneOrTwo) == true) {
    console.log("Unknown input");
    continue;
    }

    if(oneOrTwo === 1) {
        
        frm = input('From:');
        frm = frm.toUpperCase();

        if (currencies[frm] === undefined) {
            console.log("Unknown currency");
            continue;
        }

        to = input('To:')
        to = to.toUpperCase();

        if (currencies[to] === undefined) {
            console.log("Unknown currency");
            continue;
        }

        amount = Number(input('Amount:')); 

        if(amount < 1) {
            console.log("The amount cannot be less than 1");
            continue;
        } 

        if(isNaN(amount) == true) {
            console.log("The amount has to be a number");
            continue;
        }

        conv = (currencies[to] / currencies[frm]) * amount;

        let convert = function con(to, frm, amount) {
            console.log(`Result: ${amount} ${frm} equals ${conv.toFixed(4)} ${to}`);
        }

        convert(to, frm, amount);
        
    }

    if(oneOrTwo === 2) {
        return console.log("Have a nice day!");
    }

}



