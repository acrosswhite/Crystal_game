var numberToGuess = 0;


$(document).ready(function(){

numberToGuess = Math.floor(Math.random()*88)+19;

$("#number-to-guess").text(function(){
	return "Number to Guess: " + numberToGuess;
});

$("#crystal-blue").attr("data-crystalvalue", Math.floor(Math.random()*12)+1);
$("#crystal-red").attr("data-crystalvalue", Math.floor(Math.random()*12)+1);
$("#crystal-green").attr("data-crystalvalue", Math.floor(Math.random()*12)+1);
$("#crystal-pink").attr("data-crystalvalue", Math.floor(Math.random()*12)+1);

$(".crystal").on("click", function(){
	var crystalValue = $(this).attr("data-crystalvalue");
	crystalValue = parseInt(crystalValue);
	userCount += crystalValue;

	alert("New Score: " + userCount);

	if (userCount === numberToGuess){
		alert("you won!");
		//score ++
	}

	else if (userCount >= numberToGuess){
		confirm("Oh no! You lost! Try again");
		if (confirm === true){
			//reset game
			//loss ++
		};
	};
	
});

});