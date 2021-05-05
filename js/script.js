let currentCurrencyElement = document.querySelector(".js-currentCurrency");
let targetCurrencyElement = document.querySelector(".js-targetCurrency");
let formElement = document.querySelector(".js-form");
let finalResultElement = document.querySelector(".js-finalResult");

let rateEUR = 4.54;
let rateUSD = 3.77;
let rateGBP = 5.24;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currentCurrency = +currentCurrencyElement.value;
    let targetCurrency = targetCurrencyElement.value;

    let finalResult;

    switch (targetCurrency) {
        case "EUR":
            finalResult = currentCurrency / rateEUR;
            break;

        case "USD":
            finalResult = currentCurrency / rateUSD;
            break;

        case "GBP":
            finalResult = currentCurrency / rateGBP;
            break;
    }

    finalResultElement.innerText = `${currentCurrency} PLN =  ${finalResult.toFixed(2)} ${targetCurrency}`;
});


