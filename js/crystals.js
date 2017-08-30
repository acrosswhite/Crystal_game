var numberToGuess = 0;
var userCount = 0;
var winScore = 0;
var lossScore = 0;


$(document).ready(function(){

var function runGame (){
numberToGuess = Math.floor(Math.random()*101)+19;

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
};

	if (userCount === numberToGuess){
		alert("you won!");
		winScore ++;
		$("#wins").text("Wins:" + winScore);
		numberToGuess = 0;
		userCount = 0;
		runGame ();
	}

	else if (userCount >= numberToGuess){
		confirm("Oh no! You lost! Try again");
		lossScore ++;
		$("#losses").text("Losses: " + lossScore);
		if (confirm === true){
			numberToGuess = 0;
			userCount = 0;
			runGame ();
		};
	};
runGame ();
});
