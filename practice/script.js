//This code is for a simple registration form with validation.
let inputElements = document.querySelectorAll('.js-input');
inputElements.forEach(function(inputElement) {
    inputElement.addEventListener('focus', function() {
        inputElement.style.backgroundColor = 'lightgreen';
        inputElement.style.color = 'black';
    });
});
// This code adds an event listener to the checkbox that shows an alert when checked.
let checkElement = document.querySelector('#check');
checkElement.addEventListener('change', function() {
    if ( checkElement.checked) {
        alert('you have agreed to the terms and conditions')
    }
    else {
        alert('you have not agreed to the terms and conditions')
    }
    });
    let logoImage = document.querySelector('.js-logo');
    logoImage.addEventListener('click', function(){
        alert('logo clicked')
    });
    let topButtonElement = document.querySelector('.js-top-button');
    topButtonElement.addEventListener('click', function() {
        window.location.href = "../index.html";

    });
// This code adds an event listener to the button that validates the form inputs.
let buttonElement = document.querySelector('.js-register');
buttonElement.addEventListener('click', function() {
    let inputElements = document.querySelectorAll('.js-input');
    let isValid = true;
    let userData = {};
    inputElements.forEach(function(input) {
        if (input.value === '') {
            isValid = false;
            input.style.backgroundColor = 'red';
            input.style.color = 'white';
        } else {
            input.style.backgroundColor = 'lightyellow';
            input.style.color = 'black';
            userData[input.id] = input.value;// collecting user data
        }
    });
        if (!checkElement.checked) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        if (isValid) {
            // Save data to localStorage
            localStorage.setItem('registrationData', JSON.stringify(userData));
            alert('Form submitted successfully!');
        } else {
            alert('Please fill in all required fields.');
        }
    });
// This code adds an event listener to the forgot password link
let forgetButton = document.querySelector('.js-forget');
forgetButton.addEventListener('click', function() {
    alert('Forgot password clicked');
    // here you can add the code to handle the forgot password functionality
    let email = prompt('Please enter your email address:');
    if (email) {
        alert('Password reset link sent to ' + email);
    }
    else {
        alert ('Email address is required to reset password');
    }
});
const smallButtonElement = document.querySelector('.js-button-small');
smallButtonElement.addEventListener('change', function() {
    alert('Cancel button clicked');
    // here you can add the code to handle the cancel functionality
    window.location.href = '..//index.html'; // Redirect to the main page
});
