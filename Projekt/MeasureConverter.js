
function lengthConversion(){
    const inputValue = document.getElementById("length-input").value;
    const input = parseFloat(inputValue);

    if(isNaN(input)){
        document.getElementById("length-output").textContent = "Please enter a valid number";
    }
    else{
        const length = input / 100
        document.getElementById("length-output").textContent = `Result: ${length} meters`;
    }   
}

function massConversion(){
    const inputValue = document.getElementById("mass-input").value;
    const input = parseFloat(inputValue);
    if(isNaN(input)){
        document.getElementById("mass-output").textContent = "Please enter a valid number";
    }
    else{
        const mass = input / 1000;
        document.getElementById("mass-output").textContent = `Result: ${mass} kilogramms`
    }
}

function timeConversion(){
    const inputValue = document.getElementById("time-input").value;
    const input = parseFloat(inputValue);
    if(isNaN(input)){
        document.getElementById("time-output").textContent = "Please enter a valid number";
    }
    else{
        const time = input / 60;
        document.getElementById("time-output").textContent = `Result ${time} minutes`;
    }
}