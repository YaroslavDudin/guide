export default function app() {
    const form = document.createElement('form');
    form.id = 'registrationForm';

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const labelName = document.createElement('label');
    labelName.htmlFor = 'inputName';
    labelName.textContent = 'Name:';

    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.classList.add('form-control');
    inputName.id = 'inputName';
    inputName.placeholder = 'Введите ваше имя';
    inputName.name = 'name';
    inputName.required = true;

    const emailGroup = document.createElement('div');
    emailGroup.className = 'form-group';

    const labelEmail = document.createElement('label');
    labelEmail.htmlFor = 'inputEmail';
    labelEmail.textContent = 'Email:';

    const inputEmail = document.createElement('input');
    inputEmail.type = 'email'; 
    inputEmail.className = 'form-control';
    inputEmail.id = 'inputEmail';
    inputEmail.placeholder = 'Введите email';
    inputEmail.name = 'email';
    inputEmail.required = true;

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.classList.add('btn', 'btn-primary');
    submitButton.value = 'Submit';
    submitButton.disabled = true; 

    formGroup.appendChild(labelName);
    formGroup.appendChild(inputName);

    emailGroup.appendChild(labelEmail);
    emailGroup.appendChild(inputEmail);

    form.appendChild(formGroup);
    form.appendChild(emailGroup);
    form.appendChild(submitButton);

    document.querySelector('.form-container').appendChild(form);

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
    
        const formData = new FormData(form);
    
        const xhr = new XMLHttpRequest();
    
        xhr.open('POST', '/users', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
    
        xhr.onload = function onLoad() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.body.innerHTML = `<p>${response.message}</p>`;
            } else {
                console.error('Failed to register user');
            }
        };
    
        xhr.send(JSON.stringify(Object.fromEntries(formData)));
    });

    function updateSubmitButtonState() {
        if (inputName.classList.contains("is-valid") && inputEmail.classList.contains("is-valid")) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true; 
        }
    }

    inputName.addEventListener('input', (event) => {
        const name = event.target.value;
    
        if (name.trim() === '') {
            inputName.classList.remove('is-valid');
            inputName.classList.add('is-invalid');
        } else {
            inputName.classList.remove('is-invalid');
            inputName.classList.add('is-valid');
        }
        updateSubmitButtonState();
    });

    inputEmail.addEventListener('input', (event) => {
        const email = event.target.value;
        const emailRegex = /^\S+@\S+/;
        if (emailRegex.test(email)) {
            inputEmail.classList.remove('is-invalid');
            inputEmail.classList.add('is-valid');
        } else {
            inputEmail.classList.remove('is-valid');
            inputEmail.classList.add('is-invalid');
        }
        
        updateSubmitButtonState();
    });
}