
let formElement = document.querySelector(".js-calculator");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.54
let rateGBP = 5.27
let rateUSD = 3.75

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

let result;


switch (currency) {
case "EUR":
result = amount / rateEUR;
break;
case "GBP":
    result = amount / rateGBP;
    break;
case "USD":
    result = amount / rateUSD;
    break;

}
resultElement.value = result.toFixed(2);

});

