document.querySelector('#current-year').innerHTML = new Date().getFullYear();
document.querySelector('#menu-icon').addEventListener('click', function () {
    document.querySelector('nav.mobile').classList.toggle('active');
});
document.querySelector('#menu-icon-close').addEventListener('click', function () {
    document.querySelector('nav.mobile').classList.toggle('active');
});

const images = [
    '/images/amptha/galery-1.png',
    '/images/amptha/galery-2.png',
    '/images/amptha/galery-3.png'
]
const galery = document.querySelector('#gallery');
const buttonPrev = document.querySelector('#gallery-prev');
const buttonNext = document.querySelector('#gallery-next');
let index = 0

galery?.setAttribute('src', images[index])

setInterval(() => {
    if (index === images.length) {
        index = 0
    }
    galery.setAttribute('src', images[index])
    index++
}, 3000)

buttonPrev.addEventListener('click', () => {
    if (index === 0) {
        index = images.length
    }
    galery.setAttribute('src', images[index - 1])
    index--
})

buttonNext.addEventListener('click', () => {
    if (index === images.length) {
        index = 0
    }
    galery.setAttribute('src', images[index])
    index++
})