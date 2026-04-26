const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

async function loadCurrencies() {
  const res = await fetch("https://api.exchangerate-api.com/v4/latest/EUR");
  const data = await res.json();

  const currencies = Object.keys(data.rates);

  currencies.forEach(currency => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");

    option1.value = option2.value = currency;
    option1.textContent = option2.textContent = currency;

    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
  });

  fromCurrency.value = "EUR";
  toCurrency.value = "USD";
}

loadCurrencies();

async function convertCurrency() {
  const amountValue = amount.value;

  if (amountValue === "" || amountValue <= 0) {
    result.textContent = "Entre un montant valide";
    return;
  }

  const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`);
  const data = await res.json();

  const rate = data.rates[toCurrency.value];
  const converted = (amountValue * rate).toFixed(2);

  result.textContent = `${amountValue} ${fromCurrency.value} = ${converted} ${toCurrency.value}`;
}

convertBtn.addEventListener("click", convertCurrency);