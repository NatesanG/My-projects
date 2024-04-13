let player = {
    name : "Natesan" ,
    chips : 145
}
let cards = []
let sum = 0
let blackJack = false
let isAlive = false
let message = "" 
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")
let playerEl= document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)+1
    if(randomCard > 10){
        return 10
    } else if(randomCard === 1){
        return 11
    } else{
        return randomCard
    }
}
function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum=firstCard+secondCard
    cards=[firstCard,secondCard]   
    isAlive=true
    renderGame()
}
function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent +=  cards[i] + " "
    }
if(sum<=20){
    message="Do you wish to draw another card?"
} else if(sum===21){
    message="Congrats! You've got Blackjack"
    blackJack = true
} else{
    message="You are out of the game"
    isAlive = false
}
messageEl.textContent = message
}
function newCard(){
    if(isAlive === true && blackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
}


