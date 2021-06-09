// 0 for earth, 1 for mars, 2 for moon, 3 for jupiter
const GRAVITYS = [9.8, 3.7, 1.62, 24.7];

function getData() {
    let weight = document.getElementById("weightInput").value;
    let planet = document.getElementById("planetsSelection").value;

    let planetGravity;

    switch (planet) {
        case "mars":
            planetGravity = GRAVITYS[1];
            break;
        case "moon":
            planetGravity = GRAVITYS[2];
            break;
        case "jupiter":
            planetGravity = GRAVITYS[3];
            break;
    }

    let result = (planetGravity * weight) / GRAVITYS[0];
    printData(result);
}

function printData(value) {
    let outputTextElement = document.getElementById("resultOutput");
    outputTextElement.innerText = value;
}