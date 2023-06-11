const valueEL = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let value = 0

incrementBtn.addEventListener('click', () => {
    value += 1
    valueEL.textContent = value;
    valueEL.style.color = 'green';
});
decrementBtn.addEventListener('click', () => {
    valueEL.textContent -= 1;
    valueEL.style.color = 'red';

});