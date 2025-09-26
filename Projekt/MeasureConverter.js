let mass_value = document.getElementById("mass-value").value;
const mass_result = document.getElementById("mass-result");
let time_value = document.getElementById("time-value").value;
const time_result = document.getElementById("time-result");

function lengthConversion(){
    const length = parseFloat(document.getElementById("length-value").value) / 100;
    document.getElementById("length-result").textContent = `Result: ${length} meters`;
}

function massConversion(){
    const mass = parseFloat(document.getElementById("mass-value").value) / 1000;
    document.getElementById("mass-result").textContent = `Result: ${mass} kilogramms`;
}

function timeConversion(){
    const time = parseFloat(document.getElementById("time-value").value) / 60;
    document.getElementById("time-result").textContent = `Result ${time} minutes`;
}