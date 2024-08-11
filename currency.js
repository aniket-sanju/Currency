// Function to fetch currencies from API and populate dropdowns
async function populateCurrencies() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    const currencies = Object.keys(data.rates);

    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');

    const result =document.getElementsByClassName('date');

    currencies.forEach(currency => {
        const option1 = document.createElement('option');
        option1.value = currency;
        option1.textContent = currency;
        fromSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = currency;
        option2.textContent = currency;
        toSelect.appendChild(option2);
    });
}

// Function to convert currencies
async function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    const exchangeRate = data.rates[toCurrency];
    const convertedAmount = amount * exchangeRate;

    document.getElementById('convertedAmount').textContent = convertedAmount.toFixed(2);
    document.querySelector('.date').innerHTML="Last Updated :" + data.date;
    
    console.log(data);
}

// Populate currencies dropdowns when page loads
populateCurrencies();
