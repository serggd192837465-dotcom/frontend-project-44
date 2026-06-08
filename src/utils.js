const MIN_RANGE = 0;
const MAX_RANGE = 100;

export const getRandomInt = (min = MIN_RANGE, max = MAX_RANGE) => (
  Math.floor(Math.random() * (max - min) + min)
);

export const isEven = (number) => number % 2 === 0;
