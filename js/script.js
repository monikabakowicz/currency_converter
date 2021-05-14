{
    const calculateResult = (currentCurrency, targetCurrency) => {
        const rateEUR = 4.54;
        const rateUSD = 3.77;
        const rateGBP = 5.24;

        switch (targetCurrency) {
            case "EUR":
                return currentCurrency / rateEUR;

            case "USD":
                return currentCurrency / rateUSD;

            case "GBP":
                return currentCurrency / rateGBP;
        }
    };
 

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const currentCurrencyElement = document.querySelector(".js-currentCurrency");
        const targetCurrencyElement = document.querySelector(".js-targetCurrency");
        const finalResultElement = document.querySelector(".js-finalResult");
    
        const currentCurrency = +currentCurrencyElement.value
        const targetCurrency = targetCurrencyElement.value

        const finalResult = calculateResult(currentCurrency, targetCurrency);

        finalResultElement.innerText = `${currentCurrency} PLN =  ${finalResult.toFixed(2)} ${targetCurrency}`;
    };


    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}