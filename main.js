import inqurire from 'inquirer';
const currency = {
    USD: 1, //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.79,
    IND: 78,
    PAK: 280,
    DIN: 41,
};
let user_answer = await inqurire.prompt([
    {
        name: 'from',
        message: "enter from Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'IND', 'PAK', 'DIN']
    },
    {
        name: 'to',
        message: "enter to Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'IND', 'PAK']
    },
    {
        name: 'amount',
        message: "enter your amount",
        type: 'number'
    }
]);
let userFromCurreny = user_answer.from;
let userToCurrency = user_answer.to;
let fromAmoumt = currency[userFromCurreny]; //exchange rate
let toAmount = currency[userToCurrency]; //exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmoumt; //USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
