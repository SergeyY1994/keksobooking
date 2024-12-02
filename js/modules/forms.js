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

export {setInactivePage, setActivePage};
