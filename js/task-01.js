// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в
// ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
//     и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

const itemElements = document.querySelector("ul#categories").children;
console.log(`Number of categories: ${itemElements.length}`);

for (const el of itemElements) {
    console.log(`Category: ${el.querySelector('h2').textContent}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`);
}