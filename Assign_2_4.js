function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        var bmi = (weight / (height * height))* 10000;
        var resultElement = document.getElementById('result');
        resultElement.innerHTML =bmi.toFixed(2);
    } else {
        alert('Please enter valid values for weight and height.');
    }
}