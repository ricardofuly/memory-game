const cardArray = [
    {
        name: "fries",
        img: "img/fries.png"
    },
    {
        name: "cheeseburger",
        img: 'img/cheeseburger.png'
    },
    {
        name: "pizza",
        img: 'img/pizza.png'
    },
    {
        name: "milkshake",
        img: 'img/milkshake.png'
    },
    {
        name: "hotdog",
        img: 'img/hotdog.png'
    },
    {
        name: "ice-cream",
        img: 'img/ice-cream.png'
    },
    {
        name: "fries",
        img: "img/fries.png"
    },
    {
        name: "cheeseburger",
        img: 'img/cheeseburger.png'
    },
    {
        name: "pizza",
        img: 'img/pizza.png'
    },
    {
        name: "milkshake",
        img: 'img/milkshake.png'
    },
    {
        name: "hotdog",
        img: 'img/hotdog.png'
    },
    {
        name: "ice-cream",
        img: 'img/ice-cream.png'
    }
    
];

cardArray.sort(() => 0.5 - Math.random())



const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result")
let message = document.querySelector("#msg")
let cardChosen = [];
let cardChosenIds = [];
let cardsWon = [];

function creatBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement("img")
        card.setAttribute("src", "img/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)
    }
}

creatBoard()

function checkMatch(){
    const cards = document.querySelectorAll("#grid img")
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute("src", "img/blank.png")
        cards[optionTwoId].setAttribute("src", "img/blank.png")
        alert("You have clicked the same image")
    }
    else if(cardChosen[0] == cardChosen[1]){
        message.textContent = "Boa!, Encontrou uma combinação."
        cards[optionOneId].setAttribute("src", "img/white.png")
        cards[optionTwoId].setAttribute("src", "img/white.png")
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardChosen)
    }else{
        cards[optionOneId].setAttribute("src", "img/blank.png")
        cards[optionTwoId].setAttribute("src", "img/blank.png")
        message.textContent = "F, tente novamente!"
    }

    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardChosenIds = []

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = "Parabéns, vocês encontrou todas as combinações!"
    }
}


function flipCard(){
    const cardId = this.getAttribute("data-id")
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)

    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
    
}