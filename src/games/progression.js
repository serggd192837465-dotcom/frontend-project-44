import runGame from '../index.js';
import { getRandomInt } from '../utils.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';
const PROGRESSION_LENGTH = 10;
const HIDDEN_ELEMENT_MARKER = '..';
const MIN_START = 1;
const MAX_START = 30;
const MIN_STEP = 2;
const MAX_STEP = 9;

const buildProgression = (start, step, length) => (
  Array.from({ length }, (_, index) => start + step * index)
);

const getQuestionAndAnswer = () => {
  const start = getRandomInt(MIN_START, MAX_START);
  const step = getRandomInt(MIN_STEP, MAX_STEP);
  const progression = buildProgression(start, step, PROGRESSION_LENGTH);

  const hiddenIndex = getRandomInt(0, PROGRESSION_LENGTH);
  const correctAnswer = String(progression[hiddenIndex]);

  const questionItems = progression.map((item, index) => (
    index === hiddenIndex ? HIDDEN_ELEMENT_MARKER : item
  ));

  return [questionItems.join(' '), correctAnswer];
};

const playProgression = () => runGame(GAME_DESCRIPTION, getQuestionAndAnswer);

export default playProgression;
