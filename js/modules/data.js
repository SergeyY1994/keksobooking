import {
  OFFER_TITLES,
  OFFER_DESCRIPTIONS,
  OFFER_PHOTOS,
  OFFER_TYPES,
  OFFER_FEATURES,
  CHECKIN_TIME,
  CHECKOUT_TIME,
  SIMILAR_OFFERS_AMOUNT
} from '../const.js';
import {getRandomInteger, getRandomFloat} from '../util.js';

const userIds = Array.from({ length: SIMILAR_OFFERS_AMOUNT }, (_, i) => i + 1);

const createSimilarOrrer = () => {
  const lat = getRandomFloat(35.65, 35.7, 5);
  const lng = getRandomFloat(139.7, 139.8, 5);

  const photos = Array.from({length: getRandomInteger(1, 10)}, (el) => {
    el = OFFER_PHOTOS[getRandomInteger(0, OFFER_PHOTOS.length - 1)];
    return el;
  });

  const features = Array.from(new Set(Array.from({length: getRandomInteger(1, 10)}, (el) => {
    el = OFFER_FEATURES[getRandomInteger(0, OFFER_FEATURES.length - 1)];
    return el;
  })));

  const currentUserIdIndex = userIds.length > 1 ? getRandomInteger(0, userIds.length - 1) : 0;
  const userId = String(userIds[currentUserIdIndex]).padStart(2, '0');
  userIds.splice(currentUserIdIndex, 1);


  return {
    author: {
      avatar: `img/avatars/user${userId}.png`
    },
    offer: {
      title: `${OFFER_TITLES[getRandomInteger(0, OFFER_TITLES.length - 1)]}`,
      address: `${lat}, ${lng}`,
      price: getRandomInteger(1, 10000),
      type: `${OFFER_TYPES[getRandomInteger(0, OFFER_TYPES.length - 1)]}`,
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 10),
      checkin: `${CHECKIN_TIME[getRandomInteger(0, CHECKIN_TIME.length - 1)]}`,
      checkout: `${CHECKOUT_TIME[getRandomInteger(0, CHECKOUT_TIME.length - 1)]}`,
      features,
      description: `${OFFER_DESCRIPTIONS[getRandomInteger(0, OFFER_DESCRIPTIONS.length - 1)]}`,
      photos

    },
    location: {
      lat,
      lng,
    }
  };
};

const createSimilarOrrers = () => Array.from({length: SIMILAR_OFFERS_AMOUNT}, createSimilarOrrer);

export {createSimilarOrrers};
