console.log("Up and running!");

var cards = ["Queen", "Queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
  			console.log("You found a match!");
		} else {
  			console.log("Sorry, try again.");
		}	
}

function flipCard(cardId) {
	checkForMatch();
	
	if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	};
	
	console.log(`User flipped ${cards[cardId]}`);
	cardsInPlay.push(cards[cardId]);
}

flipCard(0);
flipCard(2);