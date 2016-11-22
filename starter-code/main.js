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
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');
function makeBoard(){
	for(var i=0; i<cards.length; i++){
var makeCard = document.createElement('div'); 
makeCard.className = 'card';
makeCard.setAttribute('data-card', cards[i]);
makeCard.addEventListener('click', isTwoCards);
gameBoard.appendChild(makeCard);
gameBoard.appendChild(makeCard);
}
}

function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card')=='queen'){
		this.innerHTML = '<img src="playing-card-161484_640.png" alt="Queen of Clubs" />';
	}

	else {
		this.innerHTML = '<img src="playing-card-161492_640.png" alt="King of Diamonds" />';
	}

		if (cardsInPlay.length == 2){
		isMatch(cardsInPlay);
	}
}


function isMatch(cards){
	if (cards[0]==cards[1]){
	alert("you found a match!")
}else{ alert("Sorry, no match.")
}
	cardsInPlay = [];

}