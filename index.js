let winningColor;
let randomColor1;
let randomColor2;
let score = 0;

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

    //changes the color of the color block to the winning color
    document.getElementById("colorBlock").style.backgroundColor = winningColor;
    
    //changes the border of the container to the winning color
    document.getElementById("container").style.borderColor = winningColor;

    //changes the border of the new game button to the winning color
    document.getElementById("newGame").style.borderColor = winningColor;

    //creates an rgba version of the winning color and uses it for the body background
    let winningColorRGBA = winningColor.replace('rgb', 'rgba').replace(')', ', 0.3)');
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

//creates event to decide what happens when player clicks option buttons
function handleColorClick(event) {
    let selectedColor = event.target.textContent;

    //displays a message telling the player whether their guess is right or wrong, and changes score
    if (selectedColor === winningColor) {
        score++;
        document.getElementById('score').textContent = "Score: " + score;
        onLoad();
        document.getElementById("message").textContent = "Correct! 🎉";
        console.log("Correct! The winning color was clicked.");
    } else {
        score--;
        document.getElementById('score').textContent = "Score: " + score;
        document.getElementById("message").textContent = "Try Again!";
        console.log("Wrong color. Try again!");
    }
}

//declares that when an option button is pressed, the handleColorClick function is used
document.getElementById('option1').addEventListener("click", handleColorClick);
document.getElementById('option2').addEventListener("click", handleColorClick);
document.getElementById('option3').addEventListener("click", handleColorClick);

//creates a new function to set score to 0 to use specifically on the new game button, so we can do this without adding it to onload, which would set score to 0 every time game is won
function newGame(){
    onLoad();
    score = 0;
    document.getElementById("score").textContent = "Score: " + score;
}

//calls on new game function when new game button is clicked
document.getElementById("newGame").addEventListener("click", newGame);