// wait for the DOM to finishg loading before running the game
// Get the button element and event listeners to them 

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame(){
    
}

function checkAnswer() {


}


function CalculateCorrectAnswer() {


}

function incrementScore() {


}

function incrementWrongAnswer() {


}

function displayAdditionQuestion() {

}

function displaySubstractQuestion() {


}

function displayMultiplyQuestion() {


}


