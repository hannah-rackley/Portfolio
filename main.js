let cards = document.querySelectorAll('.card');
let backs = document.querySelectorAll('.back');
let fronts = document.querySelectorAll('.front');

console.log(cards);

let toggleRemainingCardPositions = (currentCard, card) => {
    if (currentCard !== card) {
        currentCard.parentElement.classList.toggle('none')
    }
}

cards.forEach((card) => {
    card.addEventListener('click', function(event) {
        card.parentElement.classList.toggle('expand');
        card.classList.toggle('flip');
        card.parentElement.classList.toggle('flex');
        cards.forEach(currentCard => {
            toggleRemainingCardPositions(currentCard, card);
        })
    })
})
