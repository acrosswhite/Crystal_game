var numberToGuess = 0;
var userCount = 0;
var winScore = 0;
var lossScore = 0;

function resetGame (){
	numberToGuess = 0;
	userCount = 0;

	$("#crystal-blue").attr("data-crystalvalue", Math.floor(Math.random()*12)+1);
	$("#crystal-red").attr("data-crystalvalue", Math.floor(Math.random()*12)+1);
	$("#crystal-green").attr("data-crystalvalue", Math.floor(Math.random()*12)+1);
	$("#crystal-pink").attr("data-crystalvalue", Math.floor(Math.random()*12)+1);


	numberToGuess = Math.floor(Math.random()*101)+19;

	$("#number-to-guess").text(function(){
		return "Number to Guess: " + numberToGuess;
	});
};


function playGame () {

	$(".crystal").on("click", function(){
		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		userCount += crystalValue;
		alert("New Score: " + userCount);

		if (userCount === numberToGuess){
			alert("you won!");
			winScore ++;
			$("#wins").html("Wins:" + winScore);
			resetGame ();
		};

		if (userCount > numberToGuess){
			console.log("you lose");
			var playAgain = confirm("Oh no! You lost! Try again");
			lossScore ++;
			$("#losses").html("Losses: " + lossScore);
			if (playAgain === true){
				resetGame ();
			};
		};

	});

};


$(document).ready(function(){

	function runGame (){

	resetGame ();
	playGame ();

	};

runGame ();

});

//create a reset instead of calling runGame inside the runGame function

