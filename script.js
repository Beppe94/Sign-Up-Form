function check() {

    const password = document.getElementById('password')
    const confPassword = document.getElementById('confirmPassword')
    const pwText = document.getElementById('pwText')
    const upperCase = document.getElementById('upperCase')
    const num = document.getElementById('num')

    if(password.value.match(/[0-9]/)) {
        num.textContent = 'At least one number ✓'
        num.style.color = 'green'
    } else {
        num.textContent = 'At least one number 🗴'
        num.style.color = 'red'
    }

    if(password.value.match(/[A-Z]/)) {
        upperCase.textContent = 'At least one upper case ✓'
        upperCase.style.color = 'green'
    } else  {
        upperCase.textContent = 'At least one upper case 🗴' 
        upperCase.style.color = 'red'
    }

    valid(password, confPassword, pwText)
}


function valid(pw1, pw2, text) {
    if(pw1.value != pw2.value) {
        text.style.color = 'red'
    } else {
        text.style.color = 'green'
    }
}
