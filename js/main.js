const OFFER_TITLES = [
  'Красивная студия в центре города',
  'Уютные однокомнатные апартаменты',
  'Просторная двухкомнатная квартира',
  'Легкий вариант для путешественников',
  'Комфортное жилье для деловых людей',
  'Абсолютно чистая и опрятная квартирка',
  'Новостройка с отличным видом на город',
  'Бюджетное жилье для начинающих',
  'Жилье для тех, кто ценит покой и тишину',
  'Возможность долгосрочной аренды'
];

const OFFER_DESCRIPTIONS = [
  'Приветствую вас! Я рад приветствовать вас в моей уютной студии. Здесь вы найдете все необходимое для комфортного проживания.',
  'В моих однокомнатных апартаментах вы сможете почувствовать себя как дома. Здесь есть всё для отдыха и работы.',
  'Моя двухкомнатная квартира идеально подходит для тех, кто ценит простор и комфорт. Здесь вы найдете всё необходимое для приятного отдыха.',
  'Если вы ищете легкий вариант для краткосрочной аренды, то мои апартаменты идеально подойдут. Здесь вы сможете отдохнуть и восстановиться.',
  'Мои апартаменты предназначен для деловых людей, которым нужен комфортный вариант для проживания в городе. Здесь есть всё необходимое для продуктивной работы.',
  'Я горжусь своей чистотой и опрятностью! В моей квартире вы найдете идеальное место для отдыха и размышлений.',
  'Если вы любите новости и современные технологии, то мой новостройка идеально подойдет. Здесь вы сможете насладиться видом города и комфортным проживанием.',
  'Я предлагаю бюджетное жилье для начинающих. Здесь вы сможете найти свой первый дом и начать новую жизнь.',
  'В моих апартаментах ценят покой и тишину. Если вам нужен уютный уголок для отдыха от шума города, то вы попали в нужное место.',
  'Я предлагаю долгосрочную аренду для тех, кто ищет стабильный вариант проживания. Здесь вы сможете починить дом и создать семью.'
];

const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const CHECKIN_TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT_TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const SIMILAR_OFFERS_AMOUNT = 10;

const USERS_IDS_AMOUNT = SIMILAR_OFFERS_AMOUNT ;

const userIds = Array.from({ length: USERS_IDS_AMOUNT }, (_, i) => i + 1);

const getRandomInteger = (min, max) => {
  if (min >= max) {
    throw new Error('min должен быть меньше max');
  }

  const nums = [];

  for (let i = min; i <= max; i++) {
    nums.push(i);
  }

  return nums[Math.floor(Math.random() * nums.length)];
};

const getRandomFloat = (min, max, decimalCount) => {
  if (min >= max) {
    throw new Error('min должен быть меньше max');
  }

  const randomNum = Math.random() * (max - min + 1) + min;

  return Number(randomNum.toFixed(decimalCount));
};

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

console.log(createSimilarOrrers());
