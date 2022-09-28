const searchBar = document.querySelector('#search');
const infoField = document.querySelector('.matches-info');
const searchButton = document.querySelector('.search-button');
const defaultInfo = 'Ничего не найдено';

searchBar.addEventListener('keyup', matchesSearch);
searchButton.addEventListener('click', highlightRows);

function matchesSearch() {
    let currentSearchValue = searchBar.value.toLowerCase();
    if (currentSearchValue.length === 0) {
        unmatchRows();
        updateInfoField();
        return;
    }

    let currentDefaultOption = document.querySelector(".default-option").dataset.column;
    let cellsOfCurrentColumn = getColumn(currentDefaultOption);

    cellsOfCurrentColumn.forEach(cell => {
        if (cell.innerText.toLowerCase().indexOf(currentSearchValue) === 0) {
            cell.parentElement.classList.add('chosen');
        } else {
            cell.parentElement.classList.remove('chosen');
        }
    });

    updateInfoField();
}

function getMatchedRows() {
    return document.querySelectorAll(".table__row.chosen");
}

function getColumn(columnName) {
    return document.querySelectorAll(`.table__cell-content[data-column="${columnName}"]`);
}

function unmatchRows() {
    let matchedRows = getMatchedRows();
    matchedRows.forEach(row => {
        row.classList.remove('chosen');
    })
}

function updateInfoField() {
    let matchedRows = getMatchedRows();
    if (matchedRows.length === 0) {
        infoField.innerText = defaultInfo;
    } else {
        infoField.innerText = `Количество совпадений: ${matchedRows.length}`;
    }
}

function highlightRows() {
    let matchedRows = getMatchedRows();
    matchedRows.forEach(row => {
        row.classList.add('highlighted');
        row.addEventListener('animationend', () => {
            row.classList.remove('highlighted')
        })
    })
}
