

const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
   
    const email = formElements.email.value;
    console.log('mail: ', email);

    const password = formElements.password.value;
    console.log('password: ', password);

    const formData = {
        email,
        password
    };
    console.log(formData);

    if (email === '' || password === '') {
        alert('All fields must be filled');
    } else {
        form.reset();
 }
})


