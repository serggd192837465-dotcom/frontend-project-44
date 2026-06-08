import runGame from '../index.js';
import { getRandomInt } from '../utils.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';
const OPERATORS = ['+', '-', '*'];
const MIN_OPERAND = 1;
const MAX_OPERAND = 20;

const calculate = (operator, a, b) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const getQuestionAndAnswer = () => {
  const operator = OPERATORS[getRandomInt(0, OPERATORS.length)];
  const firstNumber = getRandomInt(MIN_OPERAND, MAX_OPERAND);
  const secondNumber = getRandomInt(MIN_OPERAND, MAX_OPERAND);

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = String(calculate(operator, firstNumber, secondNumber));

  return [question, correctAnswer];
};

const playCalc = () => runGame(GAME_DESCRIPTION, getQuestionAndAnswer);

export default playCalc;
