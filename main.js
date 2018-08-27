let cards = document.querySelectorAll('.card');
let backs = document.querySelectorAll('.back');
let fronts = document.querySelectorAll('.front');

console.log(cards);

cards.forEach(function(card) {
    card.addEventListener('click', function(event) {
        // console.log(event.currentTarget.parentElement.parentElement);
        card.classList.toggle('flip');
        card.parentElement.classList.toggle('expand');
        // card.remove()
    })
})
