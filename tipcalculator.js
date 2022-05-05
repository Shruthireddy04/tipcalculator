let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");
let calculateButton = document.getElementById("calculateButton");

function calulate() {
    b = parseInt(billAmount.value);
    p = parseInt(percentageTip.value);

    if (billAmount.value === "") {

        errorMessage.textContent = "Please Enter a Valid Input.";

    } else if (percentageTip.value === "") {

        errorMessage.textContent = "Please Enter a Valid Input.";

    } else {

        tipAmount.value = ((p / 100) * b);
        totalAmount.value = ((p / 100) * b) + b;
        errorMessage.textContent = ""
    }
}