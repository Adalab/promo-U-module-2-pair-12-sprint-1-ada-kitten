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

//hacer gatito 2 y 3
if (raceKittenOne === '') {
  race = `Uy que despiste, no sabemos su raza`;
} else {
  race = raceKittenOne;
}

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${urlKittenOne}"
    alt="siames-cat"
  />
  <h3 class="card_title">${nameKittenOne.toUpperCase()}</h3>
  <h4 class="card_race">${race}</h4>
  <p class="card_description">
    ${descriptionKittenOne}
  </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
  <img
    class="card_img"
    src="${urlKittenTwo}"
    alt="sphynx-cat"
  />
  <h3 class="card_title">${nameKittenTwo.toUpperCase()}</h3>
  <h4 class="card_race">${raceKittenTwo}</h4>
  <p class="card_description">
    ${descriptionKittenTwo}
  </p>
</li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="${urlKittenThree}"
  alt="maine-coon-cat"
/>
<h3 class="card_title">${nameKittenThree.toUpperCase()}</h3>
<h4 class="card_race">${raceKittenThree}</h4>
<p class="card_description">
  ${descriptionKittenThree}
</p>
</li>`;

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
