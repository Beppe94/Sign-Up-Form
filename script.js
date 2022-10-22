const form = document.getElementById('form');
const password = document.getElementById('password');
const confPassword = document.getElementById('confirmPassword');
const pwText = document.getElementById('pwText');
const upperCase = document.getElementById('upperCase');
const num = document.getElementById('num');
const pwLenght = document.getElementById('pwLength')
const submitBtn = document.getElementById('submit')






form.addEventListener('submit', (e) => {
    
    
    if(valid() && check()) {
        form.submit();
    } else {
        e.preventDefault()
    }
    
});

function check() {

    let hasErrors = false 

    if(password.value.match(/[0-9]/)) {
        num.textContent = 'At least one number ✓'
        num.style.color = 'green'
        hasErrors = true
    } else {
        num.textContent = 'At least one number 🗴'
        num.style.color = 'red'
        hasErrors = false
    }

    if(password.value.match(/[A-Z]/)) {
        upperCase.textContent = 'At least one upper case ✓'
        upperCase.style.color = 'green'
        hasErrors = true
    } else {
        upperCase.textContent = 'At least one upper case 🗴' 
        upperCase.style.color = 'red'
        hasErrors = false;
    }

    if(password.value.length < 5) {
        pwLenght.textContent = 'At least 5 characters 🗴'
        pwLenght.style.color = 'red'
        hasErrors = false;
    } else {
        pwLenght.textContent = 'At least 5 characters ✓'
        pwLenght.style.color = 'green'
        hasErrors = true;
    }
    
    return hasErrors;
}


function valid() {
    if(password.value != confPassword.value) {
        pwText.style.color = 'red'
        return false
    } else {
        pwText.style.color = 'green'
        return true
    }
}