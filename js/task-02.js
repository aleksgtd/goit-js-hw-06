const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

// for (const ingredient of ingredients) {
//   const newElement = document.createElement('li');
//   newElement.classList.add('item');
//   newElement.textContent = ingredient;
//   document.querySelector('ul#ingredients').append(newElement);
// }

function makeArr() {
    const newArr = [];

    ingredients.forEach(ingredient => {
        const newElement = document.createElement('li');
        newElement.classList.add('item');
        newElement.textContent = ingredient;
        newArr.push(newElement);
    });
    return newArr;
}

document.querySelector('ul#ingredients').append(...makeArr());
