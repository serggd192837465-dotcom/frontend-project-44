import runGame from '../index.js';
import { getRandomInt } from '../utils.js';

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MIN_NUMBER = 2;
const MAX_NUMBER = 100;

const isPrime = (number) => {
  if (number < 2) return false;
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const playPrime = () => runGame(GAME_DESCRIPTION, getQuestionAndAnswer);

export default playPrime;
