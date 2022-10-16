const password = document.querySelector('#password')
const confPassword = document.querySelector('#confirmPassword')
const pwText = document.querySelector('#pwText')

function checkPass(pw1, pw2) {
    if(pw1 !== pw2) {
        pwText.classList.add('active')
    }
}
