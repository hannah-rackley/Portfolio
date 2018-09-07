let cards = document.querySelectorAll('.card');
let navOptions = document.querySelectorAll('.option');

let toggleRemainingCardPositions = (currentCard, card) => {
    if (currentCard !== card) {
        if (currentCard.classList.contains('expand')) {
            currentCard.classList.remove('expand')
            currentCard.scrollTop = 0;
        }
    }
}

cards.forEach((card) => {
    card.addEventListener('click', function(event) {
        card.scrollTop = 0;
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
        card.scrollTop = 0;
        card.classList.toggle('expand');
        cards.forEach(currentCard => {
            toggleRemainingCardPositions(currentCard, card);
        })
    })
})
