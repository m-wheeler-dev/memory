// Array of cards
const cardArray = [
   {
      name: 'dog',
      img: 'images/dog.png'
   },
   {
      name: 'dog',
      img: 'images/dog.png'
   },
   {
      name: 'cat',
      img: 'images/cat.png'
   },
   {
      name: 'cat',
      img: 'images/cat.png'
   },
   {
      name: 'bird',
      img: 'images/bird.png'
   },
   {
      name: 'bird',
      img: 'images/bird.png'
   },
   {
      name: 'lizard',
      img: 'images/lizard.png'
   },
   {
      name: 'lizard',
      img: 'images/lizard.png'
   },
   {
      name: 'red-panda',
      img: 'images/red-panda.png'
   },
   {
      name: 'red-panda',
      img: 'images/red-panda.png'
   },
   {
      name: 'polar-bear',
      img: 'images/polar-bear.png'
   },
   {
      name: 'polar-bear',
      img: 'images/polar-bear.png'
   },
];

cardArray.sort(() => 0.5 - Math.random());

// Board container
const board = document.querySelector('#board');
let scoreDisplay = document.querySelector('#score');
let cardsPicked = [];
let cardsPickedIds = [];
const cardsMatched = [];

function initBoard () {
   for (let i = 0; i < cardArray.length; i ++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/corgi-logo.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      board.appendChild(card);
   }
};

initBoard();

// Flip card function
function flipCard() {
   const cardId = this.getAttribute('data-id');
   cardsPicked.push(cardArray[cardId].name);
   cardsPickedIds.push(cardId);
   this.setAttribute('src', cardArray[cardId].img);
   if (cardsPicked.length === 2) {
      setTimeout(checkMatch, 500)
   };
};

// Match-checking function
function checkMatch() {
   const cards = document.querySelectorAll('img');
   const firstPicked = cardsPickedIds[0];
   const secondPicked = cardsPickedIds[1];

   if (firstPicked == secondPicked) {
      alert('You chose the same card')
   };

   if (cardsPicked[0] == cardsPicked[1]) {
      alert('You found a match!')
      cards[firstPicked].removeEventListener('click', flipCard);
      cards[secondPicked].removeEventListener('click', flipCard);
      cardsMatched.push(cardsPicked);
      cards[firstPicked].classList.toggle('matched');
      cards[secondPicked].classList.toggle('matched');
   } else {
      cards[firstPicked].setAttribute('src', 'images/corgi-logo.png')
      cards[secondPicked].setAttribute('src', 'images/corgi-logo.png')
   };
   cardsPicked = [];
   cardsPickedIds = [];
   scoreDisplay.textContent = cardsMatched.length;

   if (cardsMatched.length == cardArray.length/2) {
      score.innerHTML = 'YOU WIN!';
   };

};
