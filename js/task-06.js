
const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    if (input.value.length === Number(input.dataset.length)
        || input.value.length > Number(input.dataset.length)) { 
    return input.classList.add('valid');
 }
 return input.classList.add('invalid');
    
})



