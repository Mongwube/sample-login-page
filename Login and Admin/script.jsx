const togglePassword = document.getElementById('toggle-password')
const passwordInput = document.getElementById('password')
togglePassword.addEventListener('click', togglePasswordVisibilty)
function togglePasswordVisibilty(){
    togglePassword.this
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text'
        togglePassword.textContent = 'visibility'
    }else{
        passwordInput.type = 'password'
        togglePassword.textContent = 'visibility_off'
    }
}