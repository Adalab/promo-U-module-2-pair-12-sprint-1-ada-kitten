'use strict';

const listElement = document.querySelector('.js-list');

const inputSearch = document.querySelector('.js_in_search_desc');

const descrSearch = inputSearch.value;

const urlKittenOne = 'https://dev.adalab.es/gato-siames.webp';

const nameKittenOne = 'Anastacio';

const descriptionKittenOne =
  'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';

const raceKittenOne = '';

const urlKittenTwo = 'https://dev.adalab.es/sphynx-gato.webp';

const nameKittenTwo = 'Fiona';

const descriptionKittenTwo =
  'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';

const raceKittenTwo = 'Sphynx';

const urlKittenThree = 'https://dev.adalab.es/maine-coon-cat.webp';

const nameKittenThree = 'Cielo';

const descriptionKittenThree =
  'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';

const raceKittenThree = 'Maine Coon';

let race = '';

const btnAdd = document.querySelector('.js-btn-add');

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');

const btnCancel = document.querySelector('.js-btn-cancel');
const newForm = document.querySelector('.js-new-form');
const plusCircle = document.querySelector('.js-plus-circle');

if (raceKittenOne === '') {
  race = `Uy que despiste, no sabemos su raza`;
} else {
  race = raceKittenOne;
}

if (raceKittenTwo === '') {
  race = `Uy que despiste, no sabemos su raza`;
} else {
  race = raceKittenTwo;
}

if (raceKittenThree === '') {
  race = `Uy que despiste, no sabemos su raza`;
} else {
  race = raceKittenThree;
}

function renderKitten(url, desc, name, race) {
  const kitten = `<li class="card">
  <article>
    <img
      class="card_img"
      src="${url}"
      alt="siames-cat"
    />
    <h3 class="card_title">${name.toUpperCase()}</h3>
    <h4 class="card_race">${race}</h4>
    <p class="card_description">
      ${desc}
    </p>
  </article>
  </li>`;
  return kitten;
}

const kittenOne = renderKitten(
  urlKittenOne,
  descriptionKittenOne,
  nameKittenOne,
  race
);

const kittenTwo = renderKitten(
  urlKittenTwo,
  descriptionKittenTwo,
  nameKittenTwo,
  raceKittenTwo
);

const kittenThree = renderKitten(
  urlKittenThree,
  descriptionKittenThree,
  nameKittenThree,
  raceKittenThree
);

/* listElement.innerHTML = kittenOne + kittenTwo + kittenThree; */

if (descriptionKittenOne.includes(descrSearch)) {
  listElement.innerHTML = kittenOne;
}

if (descriptionKittenTwo.includes(descrSearch)) {
  /*   listElement.innerHTML = listElement.innerHTML + kittenTwo; */
  listElement.innerHTML += kittenTwo;
}
if (descriptionKittenThree.includes(descrSearch)) {
  listElement.innerHTML += kittenThree;
}

function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    //completa el código
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
    labelMessageError.classList.add('error-form');
  } else {
    //completa el código
  }
}

btnAdd.addEventListener('click', addNewKitten);

btnCancel.addEventListener('click', (event) => {
  event.preventDefault();
  inputDesc.value = '';
  inputName.value = '';
  inputPhoto.value = '';
  labelMessageError.innerHTML = '';
  hideNewCatForm();
});

function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

plusCircle.addEventListener('click', handleClickNewCatForm);
