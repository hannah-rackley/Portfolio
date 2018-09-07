let cards = document.querySelectorAll('.card');
let navOptions = document.querySelectorAll('.option');

let toggleRemainingCardPositions = (currentCard, card) => {
    if (currentCard !== card) {
        if (currentCard.classList.contains('expand')) {
            currentCard.classList.remove('expand')
        }
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

let options = {
    ABOUT: "one",
    PROJECTS: "two",
    SKILLS: "three"
}

navOptions.forEach((option) => {
    option.addEventListener('click', (event) => {
        let card = document.querySelector(`.${options[option.textContent]}`);
        card.classList.toggle('expand');
    })
})
