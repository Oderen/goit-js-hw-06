
const input = document.querySelector('#name-input');

input.addEventListener('input', () => {
    console.log(input.value);
    const span = document.querySelector('#name-output');
    
    if (input.value === '') {
        span.textContent = 'Anonymous';
    } else {
        span.textContent = input.value;
    }
})