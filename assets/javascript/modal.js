let modalButton = document.querySelector('.modal-trigger1');
let modalBg = document.querySelector('.modal-bg-1');
let modalClose = document.querySelector('.modal-close');

modalButton.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
});
