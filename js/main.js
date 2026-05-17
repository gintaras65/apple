const btnMeniu = document.querySelector('.btn__meniu');
const meniu = document.querySelector('.meniu__list');

btnMeniu.addEventListener('click', () => {
    meniu.classList.toggle('active');
    btnMeniu.classList.toggle('active');
})