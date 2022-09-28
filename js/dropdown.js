const defaultOption = document.querySelector('.default-option');
const dropdownMenu = document.querySelector('.dropdown ul');
const arrowDrop = document.querySelector('.dropdown i')

defaultOption.addEventListener('click', () => {
    dropdownMenu.parentElement.classList.toggle('active');
})

arrowDrop.addEventListener('click', () => {
    dropdownMenu.parentElement.classList.toggle('active');
})

dropdownMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        let chosenOption = e.target;
        defaultOption.innerText = chosenOption.innerText;
        defaultOption.dataset.column = chosenOption.dataset.column;
        matchesSearch();
    }
})
