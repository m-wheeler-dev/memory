// CARDS ARRAY
const cardArray = [
	{
		name: "html",
		img: "images/html.png",
	},
	{
		name: "html",
		img: "images/html.png",
	},
	{
		name: "css",
		img: "images/css.png",
	},
	{
		name: "css",
		img: "images/css.png",
	},
	{
		name: "javascript",
		img: "images/javascript.png",
	},
	{
		name: "javascript",
		img: "images/javascript.png",
	},
	{
		name: "reactjs",
		img: "images/reactjs.png",
	},
	{
		name: "reactjs",
		img: "images/reactjs.png",
	},
	{
		name: "github",
		img: "images/github.png",
	},
	{
		name: "github",
		img: "images/github.png",
	},
	{
		name: "nodejs",
		img: "images/nodejs.png",
	},
	{
		name: "nodejs",
		img: "images/nodejs.png",
	},
];

cardArray.sort(() => 0.5 - Math.random());

// BOARD CONTAINER
const board = document.querySelector("#board");
let scoreDisplay = document.querySelector("#score");
let cardsPicked = [];
let cardsPickedIds = [];
const cardsMatched = [];

function initBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement("img");
		card.setAttribute("src", "images/logo2.png");
		card.setAttribute("data-id", i);
		card.addEventListener("click", flipCard);
		board.appendChild(card);
	}
}

initBoard();

// FLIP CARD
function flipCard() {
	const cardId = this.getAttribute("data-id");
	cardsPicked.push(cardArray[cardId].name);
	cardsPickedIds.push(cardId);
	this.setAttribute("src", cardArray[cardId].img);
	if (cardsPicked.length === 2) {
		setTimeout(checkMatch, 500);
	}
}

// CHECK FOR MATCH
function checkMatch() {
	const cards = document.querySelectorAll("img");
	const firstPicked = cardsPickedIds[0];
	const secondPicked = cardsPickedIds[1];

	if (firstPicked == secondPicked) {
		alert("You chose the same card");
	}

	if (cardsPicked[0] == cardsPicked[1]) {
		cards[firstPicked].removeEventListener("click", flipCard);
		cards[secondPicked].removeEventListener("click", flipCard);
		cardsMatched.push(cardsPicked);
		cards[firstPicked].classList.toggle("matched");
		cards[secondPicked].classList.toggle("matched");
	} else {
		cards[firstPicked].setAttribute("src", "images/logo2.png");
		cards[secondPicked].setAttribute("src", "images/logo2.png");
	}
	cardsPicked = [];
	cardsPickedIds = [];
	scoreDisplay.textContent = cardsMatched.length;

	if (cardsMatched.length == cardArray.length / 2) {
		score.innerHTML = "YOU WIN!";
	}
}
