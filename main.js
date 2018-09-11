let navOptions = document.querySelectorAll('.option');

//Option router - expand when you click on the navigation option in the header
let options = {
    ABOUT: "first",
    PROJECTS: "second",
    SKILLS: "third"
}

navOptions.forEach((option) => {
    option.addEventListener('click', (event) => {
        let card = document.querySelector(`.${options[option.textContent]}`);
        card.scrollTop = 0;
    })
})
