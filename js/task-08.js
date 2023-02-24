

const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
   
    const email = formElements.email.value;
    console.log('mail: ', email);

    const password = formElements.password.value;
    console.log('password: ', password);

    if (email === '' || password === '') {
        alert('All fields must be filled');
    }

    const formData = {
    email,
    password
    };
    console.log(formData);

    form.reset();

})

