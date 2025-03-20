/* eslint-disable */
import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';
import testingLibrary from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import nock from 'nock';
import run from '../src/index.js';

const { screen, waitFor } = testingLibrary;
nock.disableNetConnect();

let elements;

beforeEach(() => {
  const pathToFixture = path.join('__tests__', '__fixtures__', 'index.html');
  const initHtml = fs.readFileSync(pathToFixture).toString();
  document.body.innerHTML = initHtml;
  run();

  elements = {
    submit: screen.getByText(/Submit/),
    nameInput: screen.getByRole('textbox', { name: /Name/ }),
    phoneInput: screen.getByRole('textbox', { name: /Phone/ }),
  };
});

test('step1', async () => {
  const formContainer = document.querySelector('.form-container');
  expect(formContainer.querySelector('form')
    .querySelector('.form-group')
    .querySelector('input[class="form-control"]')).not.toEqual(null);
});

test('step2', async () => {
  let scope = nock('http://localhost')
    .post('/people')
    .reply(200, {
      message: 'user has been created sucessfully'
    });

  await userEvent.clear(elements.nameInput);
  await userEvent.clear(elements.phoneInput);
  await userEvent.type(elements.nameInput, 'Petya');
  await userEvent.type(elements.phoneInput, '+1234567891');

  await userEvent.click(elements.submit);
  await waitFor(() => {
    expect(document.body).not.toHaveClass('container')
    const h3 = document.querySelector('h3');
    expect(h3).toHaveTextContent('User successfully registered')
  });
  scope.done();
});

test('step3', async () => {
  await userEvent.type(elements.nameInput, 'Petya');
  await userEvent.type(elements.phoneInput, 'wrong-phone');
  expect(elements.submit).toBeDisabled();

  await userEvent.clear(elements.nameInput);
  await userEvent.clear(elements.phoneInput);
  await userEvent.type(elements.nameInput, ' ');
  await userEvent.type(elements.phoneInput, '+1234567891');
  expect(elements.submit).toBeDisabled();

  await userEvent.clear(elements.nameInput);
  await userEvent.clear(elements.phoneInput);
  await userEvent.type(elements.nameInput, 'Petya');
  await userEvent.type(elements.phoneInput, '+1234567891');
  expect(elements.submit).not.toBeDisabled();
});

test('step4', async () => {
  await userEvent.clear(elements.nameInput);
  await userEvent.clear(elements.phoneInput);
  await userEvent.type(elements.nameInput, 'Petya');
  await userEvent.type(elements.phoneInput, 'wrong-phone');
  expect(elements.nameInput).toHaveClass('is-valid');
  expect(elements.phoneInput).toHaveClass('is-invalid');
  expect(elements.nameInput).not.toHaveClass('is-invalid');
  expect(elements.phoneInput).not.toHaveClass('is-valid');

  await userEvent.clear(elements.nameInput);
  await userEvent.clear(elements.phoneInput);
  await userEvent.type(elements.nameInput, '  ');
  await userEvent.type(elements.phoneInput, '+1234567891');
  expect(elements.nameInput).toHaveClass('is-invalid');
  expect(elements.phoneInput).toHaveClass('is-valid');

  await userEvent.clear(elements.nameInput);
  await userEvent.type(elements.nameInput, 's  ');
  expect(elements.nameInput).toHaveClass('is-valid');
});
