function check() {

    const password = document.getElementById('password')
    const confPassword = document.getElementById('confirmPassword')
    const pwText = document.getElementById('pwText')
    const form = document.querySelector('form')
    const num = document.getElementById('num')

    if(password.value.match(/[0-9]/)) {
        num.style.color = 'green'
    } else {
        num.style.color = 'red'
    }

    if(password.value != confPassword.value) {
        pwText.style.color = 'red'
    } else {
        pwText.style.color = 'green'
    }
}

