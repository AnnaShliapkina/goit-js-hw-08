import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let email = form.email;
let message = form.message;
const formData = {};

form.addEventListener('submit', onFormSubmit);
email.addEventListener('input', throttle(onFormInput, 500));
message.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
  console.log(formData);
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  const dataToStorage = JSON.stringify(formData);
  localStorage.setItem(FORM_KEY, dataToStorage);
}

function getDataFromStorage() {
  const savedData = localStorage.getItem(FORM_KEY);
  const parsedData = JSON.parse(savedData);

  if (savedData) {
    email.value = parsedData.email;
    message.value = parsedData.message;
  }
}

getDataFromStorage();
