import runGame from '../index.js';
import { getRandomInt } from '../utils.js';

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

// Euclidean algorithm (division-based)
const computeGcd = (a, b) => (b === 0 ? a : computeGcd(b, a % b));

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(computeGcd(firstNumber, secondNumber));

  return [question, correctAnswer];
};

const playGcd = () => runGame(GAME_DESCRIPTION, getQuestionAndAnswer);

export default playGcd;
