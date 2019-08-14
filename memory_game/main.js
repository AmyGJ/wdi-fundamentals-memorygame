console.log("Up and running!");

var cards = [{
rank: 'Queen 1',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'Queen 2',
suit: 'Diamonds',
cardImage: "images/queen-of-diamonds.png",
},
{
rank: 'King 1',
suit: 'Hearts',
cardImage: "images/king-of-hearts.png",
},
{
rank: 'King 2',
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
		if (cardsInPlay[0] === 'Queen 1' && cardsInPlay[1] === 'Queen 2') {
  			alert("You found a match!");
  			myScore+=1;
  			document.getElementById('score-box').innerHTML=myScore;
		} else if (cardsInPlay[0] === 'Queen 1' && cardsInPlay[1] === 'Queen 1' || cardsInPlay[0] === 'Queen 2' && cardsInPlay[1] === 'Queen 2' ) {
			alert("Cannot flip same card twice!")
		} else if (cardsInPlay[0] === 'King 1' && cardsInPlay[1] === 'King 2') {
  			alert("You found a match!");
  			myScore+=1;
  			document.getElementById('score-box').innerHTML=myScore;
		} else if (cardsInPlay[0] === 'King 1' && cardsInPlay[1] === 'King 1' || cardsInPlay[0] === 'King 2' && cardsInPlay[1] === 'King 2') {
			alert("Cannot flip same card twice!")
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


