var numberToGuess = 0;
var userCount = 0;
var crystalOptions = [10, 3, 5, 7];

$(document).ready(function(){

numberToGuess = Math.floor(Math.random()*20);

$("#number-to-guess").text(function(){
	"Number to Guess" + numberToGuess;
	console.log(numberToGuess)
});

for (var i = 0; i < crystalOptions.length; i++) {
	$("#crystal").attr("data-crystalvalue", crystalOptions[i]);
};

$(".crystal").on("click", function(){
	var crystalValue = $(this).attr("data-crystalvalue");
	crystalValue = parseInt(crystalValue);
	userCount += crystalValue;

	console.log(crystalOptions);

	alert("New Score: " + userCount);

	if (userCount === numberToGuess){
		alert("you won!");
	}

	else if (userCount >= numberToGuess){
		confirm("Oh no! You lost! Try again");
		if (confirm === true){
			//reset game
		}
	};
	
});

});