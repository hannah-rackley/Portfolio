let cards = document.querySelectorAll('.card');
let backs = document.querySelectorAll('.back');
let fronts = document.querySelectorAll('.front');

console.log(cards);

let toggleRemainingCardPositions = (currentCard, card) => {
    if (currentCard !== card) {
        currentCard.classList.toggle('none')
    }
}

cards.forEach((card) => {
    card.addEventListener('click', function(event) {
        card.classList.toggle('expand');
        cards.forEach(currentCard => {
            toggleRemainingCardPositions(currentCard, card);
        })
    })
})
