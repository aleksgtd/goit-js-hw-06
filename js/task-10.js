function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

const inputEl = document.querySelector('input[type="number"]');

const divsWrapper = document.querySelector('div#boxes');

let inDiv = divsWrapper.innerHTML;

function onBoxesCreate(event) {
    let amount = inputEl.value;

    function createBoxes(amount) {
        for (let i = 0; i <= amount; i += 1) {
            inDiv += `<div width=${30 + i * 10}px height=${30 + i * 10}></div>`;
        }

        return inDiv;
    }

    console.log(inDiv);
}

createBtn.addEventListener('click', onBoxesCreate);

// function onBoxesCreate(event) {
//     let amount = inputEl.value;

//     function createBoxes(amount) {
//         const newBoxes = [];

//         for (let i = 0; i <= amount; i += 1) {
//             newBoxes.push(document.createElement('.boxes__el'));
//             return newBoxes;
//         }

//         document.querySelector('#boxes').append(newBoxes);
//     }

//     console.log(document.querySelector('.boxes__el'));
// }
