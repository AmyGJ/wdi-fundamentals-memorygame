console.log("Up and running!");

var cards = [{
rank: 'Queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'Queen',
suit: 'Diamonds',
cardImage: "images/queen-of-diamonds.png",
},
{
rank: 'King',
suit: 'Hearts',
cardImage: "images/king-of-hearts.png",
},
{
rank: 'King',
suit: 'Diamonds',
cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay = [];

var myScore = 0;


function createBoard() {
   		//console.log('create board was called')
	for (var i = 0; i < cards.length; i++) {
    	var cardElement = document.createElement('img');
    	cardElement.setAttribute('src', 'images/back.png');
   		cardElement.setAttribute('data-id', i);
   		//console.log("hello world")
   		//console.log(flipCard)
   		cardElement.addEventListener('click', flipCard);
   		document.getElementById('game-board').appendChild(cardElement);
  	}
};



function checkForMatch() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
  			alert("You found a match!");
  			myScore+=1;
  			document.getElementById('score-box').innerHTML=myScore;
		} else {
  			alert("Sorry, try again.");
		}	
}

function flipCard() {
	//console.log('flipcard called')
	if(cardsInPlay.length >= 2) {
		return;
	}
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log(`User flipped ${cards[cardId].rank}`);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay.length === 2) { 
		setTimeout(checkForMatch, 250);
	}
}

function resetFunction () {
	var gameBoard = document.getElementById('game-board')
	gameBoard.innerHTML = "";
	cardsInPlay = [];
	createBoard();
}

document.getElementById('reset').addEventListener('click', resetFunction);

createBoard();


