export default function app() {
  const form = document.createElement('form');
  form.id = 'registrationForm';

  const nameGroup = document.createElement('div');
  nameGroup.className = 'form-group';

  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'inputName';
  nameLabel.textContent = 'Name';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.classList.add('form-control');
  nameInput.id = 'inputName';
  nameInput.placeholder = 'Input name';
  nameInput.name = 'name';
  nameInput.required = true;

  const phoneGroup = document.createElement('div');
  phoneGroup.classList.add('form-group');

  const phoneLabel = document.createElement('label');
  phoneLabel.htmlFor = 'inputPhone';
  phoneLabel.textContent = 'Phone';

  const phoneInput = document.createElement('input');
  phoneInput.type = 'text';
  phoneInput.classList.add('form-control');
  phoneInput.id = 'inputPhone';
  phoneInput.placeholder = 'Input phone';
  phoneInput.name = 'phone';
  phoneInput.required = true;

  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Submit';
  submitButton.classList.add('btn', 'btn-primary');

  function updateSubmitButtonState() {
    submitButton.disabled = !(nameInput.classList.contains('is-valid') && phoneInput.classList.contains('is-valid'));
  }

  nameInput.addEventListener('input', (event) => {
    const name = event.target.value;

    if (name.trim() === '' || name.trim() === ' ') {
      nameInput.classList.remove('is-valid');
      nameInput.classList.add('is-invalid');
      nameInput.classList.remove('form-control');
    } else {
      nameInput.classList.remove('is-invalid');
      nameInput.classList.add('is-valid');
      nameInput.classList.add('form-control');
    }
    updateSubmitButtonState();
  });

  nameGroup.appendChild(nameLabel);
  nameGroup.appendChild(nameInput);

  phoneInput.addEventListener('input', (event) => {
    const phone = event.target.value;
    const phoneRegExp = /^\+\d{10}$/;

    if (phoneRegExp.test(phone)) {
      phoneInput.classList.remove('is-invalid');
      phoneInput.classList.add('is-valid');
      phoneInput.classList.add('form-control');
    } else {
      phoneInput.classList.remove('is-valid');
      phoneInput.classList.add('is-invalid');
      phoneInput.classList.remove('form-control');
    }
    updateSubmitButtonState();
  });

  phoneGroup.appendChild(phoneLabel);
  phoneGroup.appendChild(phoneInput);

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/people', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function onLoad() {
      if (xhr.status === 200) {
        const successMessage = document.createElement('h3');
        successMessage.textContent = 'User successfully registered';
        successMessage.classList.add('mb-4');

        document.body.appendChild(successMessage);
      } else {
        console.error('Failed to register user');
      }
    };

    xhr.onerror = function onError() {
      console.error('Error:', xhr.statusText);
    };

    xhr.send(JSON.stringify(Object.fromEntries(formData)));
  });

  form.appendChild(nameGroup);
  form.appendChild(phoneGroup);
  form.appendChild(submitButton);

  const formContainer = document.querySelector('.form-container');
  formContainer.appendChild(form);

  updateSubmitButtonState();
}
