const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryEl = document.querySelector('.gallery');

// for (const image of images) {
//   galleryEl.insertAdjacentHTML('beforeend', `<li> <img class='gallery__item' src=${image.url} alt=${image.alt}/> </li>`);
// };

const makeArr = function () {
    const newArr = [];

    images.forEach(image => {
        const liEl = document.createElement('li');
        liEl.insertAdjacentHTML(
            'beforeend',
            `<img class='gallery__item' src=${image.url} alt=${image.alt}/>`,
        );
        newArr.push(liEl);
    });

    return newArr;
};

galleryEl.append(...makeArr());
