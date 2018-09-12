let flashcards = []
let flashcardContainer = document.querySelector('#flashcard-container')
let nextCardBtn = document.querySelector('#next-card-btn')
let previousCardBtn = document.querySelector('#previous-card-btn')
let flipCardbtn = document.querySelector('#flip-card-btn')

let currentCard = 0
let isTerm = true

fetch('http://localhost:8000/flashcards/')
	.then(response => {
		console.log(response)
		return response.json()
	})
	.catch(errors => {
		console.log(errors)
	})
	.then(responseJson => {
		flashcards = JSON.parse(responseJson)
		frontBuild(flashcards[currentCard])
		nextCardBtn.addEventListener('click', nextCard)
		previousCardBtn.addEventListener('click', previousCard)
		flipCardbtn.addEventListener('click', flipCard)
	})	


function frontBuild(flashcard) {
	console.log(flashcard)
	let termElement = document.createElement('p')
	termElement.innerText = flashcard.fields.term 
	flashcardContainer.appendChild(termElement)
}

function backBuild(flashcard) {
	let definitionElement = document.createElement('p')
	definitionElement.innerText = flashcard.fields.definition 
	flashcardContainer.appendChild(definitionElement)	
}

function flipCard() {
	let flashcard = flashcards[currentCard]
	flashcardContainer.innerHTML = ''
	if (isTerm) {
		backBuild(flashcard)
	} else {
		frontBuild(flashcard)

	}
	isTerm = !isTerm
}

function nextCard() {
	if (currentCard + 1 < flashcards.length) {
		isTerm = true
		currentCard++
		flashcardContainer.innerHTML = ''
		frontBuild(flashcards[currentCard])
	}
}

function previousCard() {
	if (currentCard - 1 >= 0) {
		isTerm = true
		currentCard--
		flashcardContainer.innerHTML = ''
		frontBuild(flashcards[currentCard])
	}
}














