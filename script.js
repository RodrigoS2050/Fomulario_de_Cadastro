const nameInput = document.querySelector(".firstNameBox")
const lastNameInput = document.querySelector(".lastNameBox")
const emailInput = document.querySelector(".emailBox")
const passwordInput = document.querySelector(".passwordBox")
const maleInput = document.querySelector(".maleBox")
const femaleInput = document.querySelector(".femaleBox")
const otherInput = document.querySelector(".otherBox")
const termsInput = document.querySelector(".termsBox")
const signInButton = document.querySelector(".signInButton")
const errorMessage = document.querySelector(".errorMessage")
const cadastroConcluido = document.querySelector(".cadastroConcluido") 


signInButton.addEventListener("click", function(event){
    event.preventDefault()

    const nameValue = nameInput.value
    const lastValue = lastNameInput.value
    const emailValue = emailInput.value
    const passwordValue = passwordInput.value
    const maleValue = maleInput.checked
    const femaleValue = femaleInput.checked
    const otherValue = otherInput.checked
    const termsValue = termsInput.checked

    if(nameValue == "" || lastValue == "" || emailValue == "" || passwordValue == "" || maleValue == false && femaleValue == false && otherValue == false || termsValue == false){
        errorMessage.textContent = "Por favor preencha todos os campos"
    } else {
        cadastroConcluido.textContent = "Cadastro Concluido"
    }
    setTimeout(() => {
        errorMessage.textContent = ""
        cadastroConcluido.textContent = ""
    }, 3000)
    return
})