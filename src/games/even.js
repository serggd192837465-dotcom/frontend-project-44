import runGame from '../index.js';
import { getRandomInt, isEven } from '../utils.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const MIN_NUMBER = 1;
const MAX_NUMBER = 99;

const getQuestionAndAnswer = () => {
  const number = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const playEven = () => runGame(GAME_DESCRIPTION, getQuestionAndAnswer);

export default playEven;
