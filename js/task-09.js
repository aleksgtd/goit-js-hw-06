function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanForColorName = document.querySelector('span.color');
const changeColorBtn = document.querySelector('button.change-color');

changeColorBtn.addEventListener('click', onChangeBgColor);

const bodyEl = document.querySelector('body');

function onChangeBgColor(event) {
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    spanForColorName.textContent = getRandomHexColor();

    bodyEl.style.backgroundColor = getRandomHexColor();
}
