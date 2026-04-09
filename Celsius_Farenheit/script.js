const input = document.getElementById("inputTemp");
const unit = document.getElementById("unit");
const button = document.getElementById("convertBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    let value = parseFloat(input.value);

    if (isNaN(value)) {
        result.textContent = "Entre une valeur valide";
        return;
    }

    let converted;

    if (unit.value === "cToF") {
        converted = (value * 9/5) + 32;
        result.textContent = `${value}°C = ${converted.toFixed(2)}°F`;
    } else {
        converted = (value - 32) * 5/9;
        result.textContent = `${value}°F = ${converted.toFixed(2)}°C`;
    }
});