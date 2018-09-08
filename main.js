let cards = document.querySelectorAll('.card');
let navOptions = document.querySelectorAll('.option');
let contact = document.querySelector('.contact');

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
        contact.classList.remove('expand');
        card.scrollTop = 0;
        card.classList.toggle('expand');
        cards.forEach(currentCard => {
            toggleRemainingCardPositions(currentCard, card);
        })
    })
})

//Option router - expand when you click on the navigation option in the header
let options = {
    ABOUT: "first",
    PROJECTS: "second",
    SKILLS: "third"
}

navOptions.forEach((option) => {
    option.addEventListener('click', (event) => {
        if (option.textContent !== 'CONTACT') {
            contact.classList.remove('expand');
            let card = document.querySelector(`.${options[option.textContent]}`);
            card.scrollTop = 0;
            card.classList.toggle('expand');
            cards.forEach(currentCard => {
                toggleRemainingCardPositions(currentCard, card);
            })
        } else {
            contact.classList.toggle('expand');
            cards.forEach((card) => {
                card.classList.remove('expand');
            })
        }
    })
})
