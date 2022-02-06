const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

// const onInput = function (event) {
//     if (event.currentTarget.value !== '') {
//         outputEl.textContent = event.currentTarget.value;
//     } else {
//         outputEl.textContent = 'Anonymous';
//     }
// };

const onInput = function (event) {
    outputEl.textContent =
        event.currentTarget.value !== ''
            ? event.currentTarget.value
            : 'Anonymous';
};

inputEl.addEventListener('input', onInput);
