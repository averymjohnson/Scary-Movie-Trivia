$("document").ready(function() {

	$('#start').show();
	$('#question').hide();
	$('#buttons').hide();
	$('#timer').hide();

		$('#start-button').on("click", function(){
			$('#timer').show();
			$('#question').show();
			$('#buttons').show();
			$('#start').hide();
	})
	
	var timeRemaining = 20;
	var number = 0;
	var askQuestion;
	var correct = 0;
	var incorrect = 0;
	var questions = [
		{
			q: "What was the name of the girl spirit in The Ring?",
			a1: "Renata",
			a2: "Samara",							//x
			a3: "Kelly",
			a4: "Tabatha",
			no: "<div class=\"click\">INCORRECT!<br>Samara is the name of the girl spirit.<br><img class=\"pic\" src=\"assets/images/samara1.gif\"></div>",
			yes: "<div class=\"click\">CORRECT!<br>Samara is the name of the girl spirit.<br><img class=\"pic\" src=\"assets/images/samara2.gif\"></div>"
		},
		{
			q: "Freddy Kruger first appeared in what movie",
			a1: "Halloween",
			a2: "Friday the 13th",
			a3: "Nightmare on Elm Street",		//x
			a4: "Freddy vs. Jason",
			no: "<div class=\"click\">INCORRECT!<br>Freddy Kruger first appeared in Nightmare on Elm Street.<br><img class=\"pic\" src=\"assets/images/freddy1.gif\"></div>",
			yes: "<div class=\"click\">CORRECT!<br>Freddy Kruger first appeared in Nightmare on Elm Street.<br><img class=\"pic\" src=\"assets/images/freddy2.gif\"></div>"
		},
		{
			q: "What scary movie features the true life stroy of the Enfield Poltergeist?",
			a1: "Poltergeist",
			a2: "Conjuring 2",
			a3: "Sinister",					//x
			a4: "The Grudge",
			no: "<div class=\"click\">INCORRECT!<br>The Conjuring 2 featured the story of the Enfield Poltergeist.<br><img class=\"pic\" src = \"assets/images/conjuring2.gif\"></div>",
			yes: "<div class=\"click\">CORRECT!<br>The Conjuring 2 featured the story of the Enfield Poltergeist.<br><img class=\"pic\" src = \"assets/images/conjuring1.gif\"></div>"
		},
		{
			q: "What was the name of the demon in the Paranormal Activity movies?",
			a1: "Kevin",
			a2: "Brad",
			a3: "Toby",
			a4: "Jay",							//x
			no: "<div class=\"click\">INCORRECT!<br>The name of the demon in Paranormal Activity is Toby.<br><img class=\"pic\" src = \"assets/images/paranormal1.gif\"></div>",
			yes: "<div class=\"click\">CORRECT!<br>The name of the demon in Paranormal Activity is Toby.<br><img class=\"pic\" src = \"assets/images/paranormal2.gif\"></div>"
		}
	];

	newQuestion();
	setInterval(countdown, 1000);

	function countdown() {
		if(timeRemaining >= 0) {
			$("#timer").text(timeRemaining);
			timeRemaining--;
		} else {
			timeUp();
			incorrect++;
			setTimeout(newQuestion, 3000);
			timeRemaining = 20;
		}
	}

	function timeUp() {
		hide();
		$("#question").text("TIMES UP!");
	}

	function newQuestion() {
		if(number === 4) {
			return gameOver();
		} else {
			number++;
		}

		$("#timeLeft").show();
		askQuestion = questions[number - 1];
		$("#question").text(askQuestion.q);
		$("#opt1").show();
		$("#opt2").show();
		$("#opt3").show();
		$("#opt4").show();
		$("#opt1").text(askQuestion.a1);
		$("#opt2").text(askQuestion.a2);
		$("#opt3").text(askQuestion.a3);
		$("#opt4").text(askQuestion.a4);
	}

	$(".answer").on("click", function() {
		if(number === 1 && $(this).attr("value") === "2") {
			correct++;
			right(number);
		} else if(number === 2 && $(this).attr("value") === "3") {
			correct++;
			right(number);
		} else if(number === 3 && $(this).attr("value") === "2") {
			correct++;
			right(number);
		} else if(number === 4 && $(this).attr("value") === "3") {
			correct++;
			right(number);
		} else {
			incorrect++;
			wrong(number);
		}
	})

	function gameOver() {
		number = 0;
		hide();
		$("#question").html("Correct: " + correct + "<br>Incorrect: " + incorrect + "<br>Score: " + (((correct / questions.length) * 100).toFixed(2) + "%"));
		correct = 0;
		incorrect = 0;
		timeRemaining = 20;
		setTimeout(newQuestion, 3000);
	}

	function wrong(num) {
		hide();
		$("#question").html(questions[num - 1].no);
		setTimeout(newQuestion, 3000);
		timeRemaining = 20;
	}
	
	function right(num) {
		hide();
		$("#question").html(questions[num - 1].yes);
		setTimeout(newQuestion, 3000);
		timeRemaining = 20;
	}
	

	function hide() {
		$("#timeLeft").hide();
		$("#opt1").hide();
		$("#opt2").hide();
		$("#opt3").hide();
		$("#opt4").hide();
	}
	
});