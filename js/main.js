document.querySelector('#current-year').innerHTML = new Date().getFullYear();
document.querySelector('#menu-icon').addEventListener('click', function () {
    document.querySelector('nav.mobile').classList.toggle('active');
});
document.querySelector('#menu-icon-close').addEventListener('click', function () {
    document.querySelector('nav.mobile').classList.toggle('active');
});