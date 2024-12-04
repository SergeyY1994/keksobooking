const adFormEl = document.querySelector('.ad-form');
const adFormChildren = adFormEl.querySelectorAll('fieldset');
const mapFiltersEl = document.querySelector('.map__filters');
const mapFiltersChildren = mapFiltersEl.querySelectorAll('fieldset, select');

const setInactivePage = () => {
  adFormEl.classList.add('ad-form--disabled');
  adFormChildren.forEach((el) => (el.disabled = true));

  mapFiltersEl.classList.add('map__filters--disabled');
  mapFiltersChildren.forEach((el) => (el.disabled = true));
};

const setActivePage = () => {
  adFormEl.classList.remove('ad-form--disabled');
  adFormChildren.forEach((el) => (el.disabled = false));

  mapFiltersEl.classList.remove('map__filters--disabled');
  mapFiltersChildren.forEach((el) => (el.disabled = false));
};


const pristine = new Pristine(adFormEl, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
});

const validateTitle = (value) => value.length >= 30 && value.length <= 100;

const roomsOption = {
  1: [1],
  2: [2, 1],
  3: [3, 2, 1],
  100: [0]
};

const validateRooms = (value) => {
  const capacityValue = adFormEl.querySelector('#capacity').value;

  return roomsOption[value].includes(capacityValue);
};

const getRoomsErrorMessage = () => {
  let result;

  switch (adFormEl.querySelector('#room_number').value) {
    case '1':
      result = 'Для 1 гостя';
      break;
    case '2':
      result = 'Для 2 гостей или для 1 гостя';
      break;
    case '3':
      result = 'Для 3 гостей, для 2 гостей или для 1 гостя';
      break;
    case '100':
      result = 'Не для гостей';
      break;
    default:
      break;
  }

  return result;
};

pristine.addValidator(
  adFormEl.querySelector('#title'),
  validateTitle,
);

pristine.addValidator(
  adFormEl.querySelector('#room_number'),
  validateRooms,
  getRoomsErrorMessage
);

adFormEl.addEventListener('submit', (e) => {
  e.preventDefault();
  pristine.validate();
});

export {setInactivePage, setActivePage};
