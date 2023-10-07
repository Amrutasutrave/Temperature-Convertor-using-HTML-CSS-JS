function convertTemperature() {
    const celsiusInput = document.getElementById("celsiusInput");
    const resultText = document.getElementById("resultText");

    if (celsiusInput.value === "") {
        resultText.textContent = "Please enter a temperature in Celsius.";
        return;
    }

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;

    resultText.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
}
