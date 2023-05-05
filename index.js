function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/;
    return emailRegex.test(email);
}

const form = document.querySelector('#form');
const emailInputs = document.querySelectorAll('.email');
const errorDivs = document.querySelectorAll('.message-error');

emailInputs.forEach((emailInput, index) => {
    emailInput.addEventListener('input', function () {
        if (emailInput.value === '') {
            errorDivs[index].textContent = 'The email field is empty';
            errorDivs[index].classList.add('message-error--show');
        } else if (!validarEmail(emailInput.value)) {
            errorDivs[index].classList.add('message-error--show');
        } else {
            errorDivs[index].textContent = '';
            errorDivs[index].classList.remove('message-error--show');
        }
    });
});

form.addEventListener('submit', function (event) {
    let formValid = true;

    emailInputs.forEach((emailInput, index) => {
        if (emailInput.value === '') {
            errorDivs[index].textContent = 'The email field is empty';
            errorDivs[index].classList.add('message-error--show');
            formValid = false;
        } else if (!validarEmail(emailInput.value)) {
            errorDivs[index].classList.add('message-error--show');
            formValid = false;
        }
    });

    if (!formValid) {
        event.preventDefault();
    }
});