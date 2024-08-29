import { emailAPI } from "./apikey.mjs"

document.addEventListener('DOMContentLoaded', () => {
    const isValidEmail = (email) => {
        return emailAPI.test(email)
    }

    const checkValidityBtn = document.getElementById('checkValidityBtn')
    const emailInput = document.getElementById('email')
    const validationResult = document.getElementById('validationResult')
    const loadingSpinner = document.getElementById('loadingSpinner')

    checkValidityBtn.addEventListener('click', function () {
        const userEmail = emailInput.value
        const result = isValidEmail(userEmail)

            if (result) {
                validationResult.classList.remove('bg-red-100', 'border-l-4', 'border-red-500')
                validationResult.classList.add('bg-green-100', 'border-l-4', 'border-green-500', 'alert-green')
                validationResult.innerHTML = 'Email is valid.'
                loadingSpinner.style.display = 'block'
                validationResult.style.display = 'none'
                setTimeout(() => {
                    loadingSpinner.style.display = 'none'
                    validationResult.style.display = 'block'
                }, 1000)
            } else if (emailInput.value === '') {
                validationResult.classList.remove('bg-green-100', 'border-l-4', 'border-green-500')
                validationResult.classList.add('bg-red-100', 'border-l-4', 'border-red-500', 'alert-red')
                validationResult.innerHTML = 'Please fill Email.'
                setTimeout(() => {
                    validationResult.innerHTML = ''
                    validationResult.classList.remove('bg-red-100', 'border-l-4', 'border-red-500', 'bg-green-100', 'border-l-4', 'border-green-500', 'alert-green', 'bg-green-100', 'border-l-4', 'border-green-500', 'bg-red-100', 'border-l-4', 'border-red-500', 'alert-red')
                }, 2000);
            } else {
                validationResult.classList.remove('bg-green-100', 'border-l-4', 'border-green-500')
                validationResult.classList.add('bg-red-100', 'border-l-4', 'border-red-500', 'alert-red')
                validationResult.innerHTML = 'Email is not valid.'
                loadingSpinner.style.display = 'block'
                validationResult.style.display = 'none'
                setTimeout(() => {
                    loadingSpinner.style.display = 'none'
                    validationResult.style.display = 'block'
                }, 1000)
            }
    })

    emailInput.addEventListener('input', () => {
        // If the user modifies the email, hide the validation result
        validationResult.innerHTML = ''
        validationResult.classList.remove('bg-red-100', 'border-l-4', 'border-red-500', 'bg-green-100', 'border-l-4', 'border-green-500', 'alert-green', 'bg-green-100', 'border-l-4', 'border-green-500', 'bg-red-100', 'border-l-4', 'border-red-500', 'alert-red')
    })
})






