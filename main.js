let navOptions = document.querySelectorAll('.option');

//Option router - Make sure scrollTop is set to zero when you navigate to a section
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
