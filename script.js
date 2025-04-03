document.addEventListener("DOMContentLoaded", function () {
    let onLoad = document.getElementById("onload");

    onLoad.innerHTML = "<h1>This is some loaded content</h1>";
})

const directionEl = document.getElementById("direction");

document.addEventListener("keydown", function (event) {
    console.log(event);

    directionEl.innerText = `The key that was pressed was ${event.key}`;
})

let clickMeButton = document.getElementById("clickMe");

clickMeButton.addEventListener("click", function (event) {
    console.log(event);

    clickMeButton.innerText = "You clicked me!";
})

let colorBtn = document.getElementById("randomColorBtn");

function Random() {
    let redValue = Math.floor(Math.random() * 255);
    let greenValue = Math.floor(Math.random() * 255);
    let blueValue = Math.floor(Math.random() * 255);

    colorBtn.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';

    console.log(redValue);
    console.log(greenValue);
    console.log(blueValue);
    console.log(colorBtn.style.backgroundColor);
    // simpler version vvv

    // switch (colorValue) {
    //     case 1:
    //         colorBtn.style.backgroundColor = "red";
    //         break;
    //     case 2:
    //         colorBtn.style.backgroundColor = "orange";
    //         break;
    //     case 3:
    //         colorBtn.style.backgroundColor = "yellow";
    //         break;
    //     case 4:
    //         colorBtn.style.backgroundColor = "green";
    //         break;
    //     case 5:
    //         colorBtn.style.backgroundColor = "blue";
    //         break;
    //     case 6:
    //         colorBtn.style.backgroundColor = "purple";
    //         break;
    //     default:
    //         colorBtn.style.backgroundColor = "gray";

    // }
}

// if it were to be document.addEventListener({...})
// then clicking on the document itself would change the text,
// not the button specifically (which is what we really want).