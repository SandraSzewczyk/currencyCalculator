let formElement = document.querySelector(".js-calculator");
let exchangeElement = document.querySelector(".js-exchange");
let eurElement = document.querySelector(".js-eur");
let amountElement = document.querySelector(".js-amount");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let exchange = exchangeElement.value;
    let amount = amountElement.value;
    eurElement.value = (exchange * amount).toFixed(2);



});