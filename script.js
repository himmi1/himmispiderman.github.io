function calculateFuelConsumption() {
    var averageConsumption = parseFloat(document.getElementById("average-consumption").value);
    var distance = parseFloat(document.getElementById("distance").value);
    var pricePerLiter = parseFloat(document.getElementById("price-per-liter").value);
    var resultElement = document.getElementById("result");

    // Check if the input values are valid
    if (isNaN(averageConsumption) || isNaN(distance) || isNaN(pricePerLiter)) {
        resultElement.innerHTML = "<span class='error'>Vinsamlegast skrifaðu númer.</span>";
        return;
    }

    // Calculate fuel consumption
    var fuelConsumption = (averageConsumption * distance) / 100;

    // Calculate total cost of fuel
    var totalCost = fuelConsumption * pricePerLiter;

    resultElement.innerHTML = "Eldsneytis eyðsla: " + fuelConsumption.toFixed(2) + " Lítrar<br>"
        + "Samtals Verð: ISK " + totalCost.toFixed(2) + "kr";
}