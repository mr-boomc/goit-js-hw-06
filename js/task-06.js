const symbolsInput = document.querySelector('#validation-input');

symbolsInput.addEventListener("blur", (event) => {
    const current = event.currentTarget.value.length;
    const trueVariant = Number(symbolsInput.dataset.length);

    if( current === trueVariant ) {
    symbolsInput.classList.add('valid');
    symbolsInput.classList.remove('invalid');
} else {
    symbolsInput.classList.remove('valid');
    symbolsInput.classList.add('invalid');
    }
});

