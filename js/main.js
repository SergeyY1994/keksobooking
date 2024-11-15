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

getRandomInteger(1, 10);

const getRandomFloat = (min, max, decimalCount) => {
  if (min >= max) {
    throw new Error('min должен быть меньше max');
  }

  const randomNum = Math.random() * (max - min + 1) + min;

  return Number(randomNum.toFixed(decimalCount));
};

getRandomFloat(1, 10, 5);
