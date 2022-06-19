import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let data = {
  email: '',
  message: '',
};

if (localStorage.getItem(FORM_KEY)) {
  data = JSON.parse(localStorage.getItem(FORM_KEY));
}

form.querySelector('[name="email"]').value = data.email;
form.querySelector('[name="message"]').value = data.message;

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);

function onInputForm(evt) {
  data[evt.target.name] = evt.target.value;
  const dataToStorage = JSON.stringify(data);
  localStorage.setItem(FORM_KEY, dataToStorage);
}

function onSubmitForm(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem(FORM_KEY)));

  localStorage.clear();
  evt.target.reset();
  data.email = '';
  data.message = '';
}

// import throttle from 'lodash.throttle';

// const FORM_KEY = 'feedback-form-state';
// const form = document.querySelector('.feedback-form');
// let email = form.email;
// let message = form.message;
// let formData = {};

// form.addEventListener('submit', onSubmitForm);
// email.addEventListener('input', throttle(onInputForm, 500));
// message.addEventListener('input', throttle(onInputForm, 500));

// function onSubmitForm(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();
//   localStorage.removeItem(FORM_KEY);
//   console.log(formData);
// }

// function onInputForm(evt) {
//   formData[evt.target.name] = evt.target.value;
//   const dataToStorage = JSON.stringify(formData);
//   localStorage.setItem(FORM_KEY, dataToStorage);
// }

// function getDataFromStorage() {
//   const savedData = localStorage.getItem(FORM_KEY);
//   const parsedData = JSON.parse(savedData);

//   if (savedData) {
//     email.value = parsedData.email;
//     message.value = parsedData.message;
//   }
// }

// getDataFromStorage();
