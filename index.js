const formData = document.querySelector('#form');
const emailInput = document.querySelector('#emailInput');
const countryInput = document.querySelector('#countryInput');
const zipcodeInput = document.querySelector('#zipcodeInput');
const passwordInput = document.querySelector('#passwordInput');
const submitButton = document.querySelector('#submitButton');
let countryPattern = /[a-z]/;

submitButton.addEventListener('click', (event) => {
    formData.checkValidity();
    if(!formData.checkValidity()) { 
        formData.reportValidity();
    } else if(formData.checkValidity()) {
        window.location.reload();
    }
    event.preventDefault();
})

emailInput.addEventListener('keydown', () => {
    emailValidity();
})

countryInput.addEventListener('keydown', () => {
    countryValidity();
})

zipcodeInput.addEventListener('keydown', () => {
    zipcodeValidity()
})

passwordInput.addEventListener('keydown', () => {
    passwordValidity();
})

function emailValidity() {
    if(emailInput.checkValidity()) {
        emailInput.style.borderColor = 'green'
    } else {
        emailInput.style.borderColor = 'red';
    }
}

function countryValidity() {
    if(countryInput.checkValidity()) {
        countryInput.style.borderColor = 'green'
    } else {
        countryInput.style.borderColor = 'red';
    }
}

function zipcodeValidity() {
    if(zipcodeInput.checkValidity()) {
        zipcodeInput.style.borderColor = 'green'
    } else {
        zipcodeInput.style.borderColor = 'red';
    }
}

function passwordValidity() {
    if(passwordInput.checkValidity()) {
        passwordInput.style.borderColor = 'green'
    } else {
        passwordInput.style.borderColor = 'red';
    }
}
