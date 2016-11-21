console.log("JS file is connected to HTML! Woo!")
window.onload = makeBoard;
/*var CardOne = "queen";
var CardTwo = "queen";
var CardThree = "king";
var CardFour = "king";
if (CardOne === CardTwo){
	alert("You found a match")
}else alert("Sorry try again.")
if (CardOne === CardThree){
	alert("You found a match")
}else alert("Sorry try again.")
if (CardOne === CardFour){
	alert("You found a match")
}else alert("Sorry try again.")
if (CardTwo === CardThree){
	alert("You found a match")
}else alert("Sorry try again.")
if (CardTwo === CardFour){
	alert("You found a match")
}else alert("Sorry try again.")
if (CardThree === CardFour){
	alert("You found a match")
}else alert("Sorry try again.")*/

var gameBoard = document.getElementById('game-board');
function makeBoard(){
	for(var i=1; i<=4; i++){
var makeCard = document.createElement('div'); 
makeCard.className = 'card';
gameBoard.appendChild(makeCard);
}
}

