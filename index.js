let winningColor;
let randomColor1;
let randomColor2;

//creates a function that generates a random rgb
function generateRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

//creates a function for any time the screen is loaded
function onLoad(){
    //sets colors
    winningColor = generateRandomColor();
    randomColor1 = generateRandomColor();
    randomColor2 = generateRandomColor();

    //changes the color of the block to the winning color
    document.getElementById("colorBlock").style.backgroundColor = winningColor;

    let winningColorRGBA = winningColor.replace('rgb', 'rgba').replace(')', ', 0.2)');

    document.getElementById("body").style.backgroundColor = winningColorRGBA;

    //shows winning color in colsole log for testing
    console.log("Winning color: " + winningColor);

   //creates the option variable to pick a random value between 0 and 2, so the winning number will be in a random position each game
    let option = Math.floor(Math.random() * 3);
    if(option === 0){
        document.getElementById("option1").textContent = winningColor;
        document.getElementById("option2").textContent = randomColor1;
        document.getElementById("option3").textContent = randomColor2;
    } else if(option === 1){
        document.getElementById("option1").textContent = randomColor1;
        document.getElementById("option2").textContent = winningColor;
        document.getElementById("option3").textContent = randomColor2;
    } else{
        document.getElementById("option1").textContent = randomColor1;
        document.getElementById("option2").textContent = randomColor2;
        document.getElementById("option3").textContent = winningColor;
    }
        console.log(option);

        document.getElementById("message").textContent = "";
}
//calls the function to use when screen loads
onLoad();

function handleColorClick(event) {
    let selectedColor = event.target.textContent;

    if (selectedColor === winningColor) {
        document.getElementById("message").textContent = "Correct! 🎉";
        console.log("Correct! The winning color was clicked.");
    } else {
        document.getElementById("message").textContent = "Try Again!";
        console.log("Wrong color. Try again!");
    }
}

document.getElementById('option1').addEventListener("click", handleColorClick);
document.getElementById('option2').addEventListener("click", handleColorClick);
document.getElementById('option3').addEventListener("click", handleColorClick);





document.getElementById("newGame").addEventListener("click", onLoad);

/*
subjects researched:
Math.random()
.addEventLister
if statements

chat GPT:
=== in if statements instead of =
adding extra document.getElementById's for other buttons
.replace
*/