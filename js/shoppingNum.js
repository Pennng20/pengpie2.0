document.addEventListener('DOMContentLoaded', function() {
var decreaseButton = document.querySelector('.decrease');
var increaseButton = document.querySelector('.increase');
var quantityInput = document.getElementById('quantity');

decreaseButton.addEventListener('click', function() {
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > quantityInput.min) {
        quantityInput.value = currentValue - 1;
    }
});

increaseButton.addEventListener('click', function() {
    var currentValue = parseInt(quantityInput.value);
    if (currentValue < quantityInput.max) {
        quantityInput.value = currentValue + 1;
    }
});
});