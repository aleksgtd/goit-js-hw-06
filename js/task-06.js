// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
//     Сколько символов должно быть в инпуте,
//         указывается в его атрибуте data - length.
// Если введено подходящее количество символов,
//     то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
//     которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputSymbolsQuantityCheck);

inputEl.addEventListener('focus', onInputFocusClassRemove);

// function onInputSymbolsQuantityCheck(event) {
//     if (inputEl.value.length === Number(inputEl.dataset.length)) {
//         inputEl.classList.add('valid');
//     } else {
//         inputEl.classList.add('invalid');
//     }

//     console.log(event);
//     console.log(inputEl.value.length);
//     console.log(Number(inputEl.dataset.length));
// }

function onInputFocusClassRemove(event) {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
}

function onInputSymbolsQuantityCheck(event) {
    if (Number(event.target.value.length) === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
    }
}
