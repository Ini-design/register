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
 // This code adds an event listener to the button that validates the form inputs.
let buttonElement = document.querySelector('.js-register');
buttonElement.addEventListener('click', function() {
    let inputElements = document.querySelectorAll('.js-input');
    let isValid = true;
    inputElements.forEach(function(input) {
        if (input.value === '') {
            isValid = false;
            input.style.backgroundColor = 'red';
            input.style.color = 'white';
        } else {
            input.style.backgroundColor = 'lightyellow';
            input.style.color = 'black';
        }
    });
       // if all inputs are valid, show a success message
    // if any input is invalid, show an error message
    if (isValid) {
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
