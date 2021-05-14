{
const calculateResult = (amount, currency) => {
    const rateEUR = 4.54;
    const rateGBP = 5.27;
    const rateUSD = 3.75;
switch (currency) {
    case "EUR":
    return  amount / rateEUR;
   
    case "GBP":
    return amount / rateGBP;
      
    case "USD":
    return amount / rateUSD;
}

};

const updateCurrencyValue = (result) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.value = result.toFixed(2);
    

};
const onFormSubmit = (event) => {
    event.preventDefault();
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
  
    
    const currency = currencyElement.value;
    const amount = +amountElement.value;

    const result = calculateResult(amount, currency);
    updateCurrencyValue(result);
   

   
};
const init = () => {
const formElement = document.querySelector(".js-calculator");

formElement.addEventListener("submit", onFormSubmit);
};  

init();

}