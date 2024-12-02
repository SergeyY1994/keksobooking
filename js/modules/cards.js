import {createSimilarOrrers} from './data.js';
import { OFFER_TYPES_DICT } from '../const.js';

const cardTempleate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvasEl = document.querySelector('#map-canvas');

const similarOffers = createSimilarOrrers();

const createCards = () => {
  similarOffers.forEach((
    {
      author: {avatar},
      offer: {
        title,
        address,
        price,
        type,
        rooms,
        guests,
        checkin,
        checkout,
        features,
        description,
        photos
      }
    }
  ) => {
    const cardEl = cardTempleate.cloneNode(true);

    const avatarEl = cardEl.querySelector('.popup__avatar');
    if (avatar) {
      avatarEl.src = avatar;
    } else {
      avatarEl.remove();
    }

    const titleEl = cardEl.querySelector('.popup__title');
    if (title) {
      titleEl.textContent = title;
    } else {
      titleEl.remove();
    }

    const addressEl = cardEl.querySelector('.popup__text--address');
    if (address) {
      addressEl.textContent = address;
    } else {
      addressEl.remove();
    }

    const priceEl = cardEl.querySelector('.popup__text--price');
    if (price) {
      priceEl.textContent = price;
    } else {
      priceEl.remove();
    }

    const typeEl = cardEl.querySelector('.popup__type');
    if (type) {
      typeEl.textContent = OFFER_TYPES_DICT[type];
    } else {
      typeEl.remove();
    }

    const capacityEl = cardEl.querySelector('.popup__text--capacity');
    if (rooms && guests) {
      capacityEl.textContent = `${rooms} комнаты для ${guests} гостей`;
    } else {
      capacityEl.remove();
    }

    const timeEl = cardEl.querySelector('.popup__text--time');
    if (checkin && checkout) {
      timeEl.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
    } else {
      timeEl.remove();
    }

    const featuresEl = cardEl.querySelector('.popup__features');
    if (features.length) {
      featuresEl.innerHTML = '';

      features.forEach((feature) => (
        featuresEl.innerHTML += `<li class="popup__feature popup__feature--${feature}"></li>`
      ));
    } else {
      featuresEl.remove();
    }

    const descriptionEl = cardEl.querySelector('.popup__description');
    if (description) {
      descriptionEl.textContent = description;
    } else {
      descriptionEl.remove();
    }

    const photosEl = cardEl.querySelector('.popup__photos');
    if (photos.length) {
      photosEl.innerHTML = '';

      photos.forEach((photo) => (
        photosEl.innerHTML += `<img src=${photo} class="popup__photo" width="45" height="40" alt="Фотография жилья">`
      ));
    } else {
      photosEl.remove();
    }

    mapCanvasEl.append(cardEl);
  });
};

export {createCards};
