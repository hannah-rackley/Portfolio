const cardModal = document.querySelector('.card-modal');
let cards = document.querySelectorAll('.front');

console.log(cards);

cards.forEach(function(card) {
    card.addEventListener('mouseover', function(event) {
        console.log(event.currentTarget);
    })
})