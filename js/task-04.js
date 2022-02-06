// Создай переменную counterValue в которой
// будет храниться текущее значение
// счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки,
//     внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const onDecrementCounterValue = function () {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
};

const onIncrementCounterValue = function () {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
};

decrementBtn.addEventListener('click', onDecrementCounterValue);
incrementBtn.addEventListener('click', onIncrementCounterValue);
