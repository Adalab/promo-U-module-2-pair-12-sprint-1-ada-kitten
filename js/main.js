'use strict';
//QUERYSELECTORS
const listElement = document.querySelector('.js-list');

const inputSearch = document.querySelector('.js_in_search_desc');

const btnSearch = document.querySelector('.js-btn-search');

let race = '';

const btnAdd = document.querySelector('.js-btn-add');

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');

const btnCancel = document.querySelector('.js-btn-cancel');
const newForm = document.querySelector('.js-new-form');
const plusCircle = document.querySelector('.js-plus-circle');

const msjError = document.querySelector('.js-msj');

//OBJETOS
/* function kittenData(objectKitten) {
  objectKitten.name;
  objectKitten.desc;
  objectKitten.race;
  objectKitten.url;
} */

const kittenData_1 = {
  name: 'Anastacio',
  desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: '',
  url: 'https://dev.adalab.es/gato-siames.webp',
};

const kittenData_2 = {
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
  url: 'https://dev.adalab.es/sphynx-gato.webp',
};
const kittenData_3 = {
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
  url: 'https://dev.adalab.es/maine-coon-cat.webp',
};

const kittenOne = renderKitten(
  kittenData_1.url,
  kittenData_1.desc,
  kittenData_1.name,
  kittenData_1.race
);
console.log(kittenOne);
const kittenTwo = renderKitten(
  kittenData_2.url,
  kittenData_2.desc,
  kittenData_2.name,
  kittenData_2.race
);

const kittenThree = renderKitten(
  kittenData_3.url,
  kittenData_3.desc,
  kittenData_3.name,
  kittenData_3.race
);

//FUNCIONES

function renderRace(race) {
  if (race === '') {
    return `Uy que despiste, no sabemos su raza`;
  } else {
    return race;
  }
}
function renderKitten(kittenData) {
  const kitten = `<li class="card">
  <article>
    <img
      class="card_img" 
      src="${kittenData.url}"
      alt="siames-cat"
    />
    <h3 class="card_title">${kittenData.toUpperCase()}</h3>
    <h4 class="card_race">${renderRace(kittenData.race)}</h4>
    <p class="card_description">
      ${kittenData.desc}
    </p>
  </article>
  </li>`;

  return kitten;
}

function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
    labelMessageError.classList.add('error-form');
  } else {
  }
}

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

const filterKitten = (event) => {
  event.preventDefault();
  deleteList();
  addKittens();
};

function addKittens() {
  const descrSearch = inputSearch.value;
  if (descrSearch) {
    msjError.innerHTML = '';
    if (kittenData_1.desc.includes(descrSearch)) {
      listElement.innerHTML += kittenOne;
    }
    if (kittenData_2.desc.includes(descrSearch)) {
      listElement.innerHTML += kittenTwo;
    }
    if (kittenData_3.desc.includes(descrSearch)) {
      listElement.innerHTML += kittenThree;
    }
  } else {
    msjError.innerHTML = 'Tienes que escribir algo en el buscador';
    //pintar msj error
  }
}

function deleteList() {
  listElement.innerHTML = '';
}

function cancelNewKitten(event) {
  event.preventDefault();
  inputDesc.value = '';
  inputName.value = '';
  inputPhoto.value = '';
  labelMessageError.innerHTML = '';
  hideNewCatForm();
}

//EVENTOS

btnAdd.addEventListener('click', addNewKitten);

btnCancel.addEventListener('click', cancelNewKitten);

plusCircle.addEventListener('click', handleClickNewCatForm);

btnSearch.addEventListener('click', filterKitten);

//const descrSearch = inputSearch.value;
