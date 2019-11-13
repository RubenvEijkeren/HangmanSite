
var woord = ["MATRIX VII", "BITACADEMY", "HACKATON", "SCIENCE PARK", "HELLO WORLD"];
var choice = woord[Math.floor((Math.random() * woord.length))]
console.log(choice.length);
console.log(choice);

initWord(choice.length);
/*click();
function click(){
	var button = document.getElementById('button');
	for (var i = 0; i < 2; i++)
		button.setAttribute("onclick", "checkGuess(this);");
}*/
var lives = 8;
var woord = document.getElementById('woord');
var l = document.getElementById("lives");
		l.innerHTML = "Lives left: " + lives;

function initWord(choicelength){
	var woord = document.getElementById('woord');
	for (var i = 0; i < choicelength; i++) {
		if (!(choice[i] == " ")){
			var div = document.createElement("DIV");
			div.id = "letter" + (i+1);
			div.className = "letter";
			woord.appendChild(div);
		}
	}
}
function checkGuess(guess, el){
if (lives > 0){
	console.log(guess);
	console.log(el);
	var a = 0;
	for (var i = 0; i < choice.length; i++){
		var c = 0;
		if (guess == choice[i]){
			console.log("correct guess");
			var letter = document.getElementById("letter" + (i+1));
			letter.innerHTML = guess;
			a = 1;
		}
		else{
			console.log("incorrect guess");
		}
	}
	if (a == 0){
		lives--;
/*		if (lives == 0)
		{
			var complete = document.getElementById("complete");
			complete.innerHTML = "You died!";

		}*/
		var l = document.getElementById("lives");
		l.innerHTML = "Lives left: " + lives;
	}
	isComplete();
	el.style.opacity = 0;
}
}

function isComplete(){
	console.log("child nodes:" + woord.childNodes[1].innerHTML)
	var o = 1;
	var p = 0;	
	for (var i = 0; i < woord.childNodes.length; i++){
		if (o == 1){
			if (!(woord.childNodes[i].innerHTML)){
				//console.log("woord incompleet");
				p = 1;
				o = 0;
			}
			else{
//				console.log("woord compleet");
				p = 0;
			}
		}
	}
	if (p == 1){
		console.log("woord incompleet");
		return;
	}
	else if(p == 0){
		console.log("woord compleet");
		var complete = document.getElementById("complete");
		complete.innerHTML = "Woord compleet";
		return;
	}

}