const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

//wow constants!!
const cardText = document.getElementById("card-content")
const prevButton = document.getElementById("prev-btn")
const nextButton = document.getElementById("next-btn")
const addButton = document.getElementById("add-card-btn")
const card = document.getElementById("flashcard")
//do i need to add smth for the fields of the enter text or nah


// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() 
{
    if(showingTerm)
    {
        cardText.innerText = flashcards[currentIndex].term;
    }
    else
    {
        cardText.innerText = flashcards[currentIndex].definition;
    }
    

}

// The rest of the code you will write is apart of event listeners
function flipCard()
{
    showingTerm = !showingTerm
    displayCard()
}

function nextCard()
{
    showingTerm = true;
    currentIndex = (currentIndex + 1) % flashcards.length
    displayCard()
}
function prevCard()
{
    showingTerm = true;
    currentIndex = (currentIndex - 1) % flashcards.length
    if(currentIndex < 0)
    {
        currentIndex = flashcards.length - 1
    }
    displayCard()
}

card.addEventListener('click', flipCard)
nextButton.addEventListener('click', nextCard)
prevButton.addEventListener('click', prevCard)

// This line will display the card when the page is refreshed
window.onload = displayCard;
