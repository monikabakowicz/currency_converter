{
    const calculateResult = (currentCurrency, targetCurrency) => { //robię funkcję, która w zależności od waluty zwraca wynik (return). w parametrze jest current i target currency, bo ta funkcja, żeby policzyć wynik potrzebuje dostać kwotę w obecnej walucie i docelową walutę
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