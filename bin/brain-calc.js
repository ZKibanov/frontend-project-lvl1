#!/usr/bin/env node
import greet, {
  askQuestion, compareResults, getRandomInt, rounds,
} from '../src/cli.js';

const name = greet();
console.log('What is the result of the expression?');
const operands = ['-', '+', '*'];

const calc = (op, num1, num2) => {
  switch (op) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

let answerCounter = 0;

while (answerCounter < rounds) {
  const number = getRandomInt(50);
  const number2 = getRandomInt(50);
  const operand = operands[getRandomInt(2)];

  console.log(`Question: ${number} ${operand} ${number2}`);
  const response = Number(askQuestion('Your answer:'));
  const correctResponse = calc(operand, number, number2);
  const isAnswerCorrect = compareResults(Number(response), correctResponse, 'Correct!', `'${response}' is wrong answer ;(. Correct answer was '${correctResponse}'.`);
  if (!isAnswerCorrect) {
    answerCounter += 3;
  }
  answerCounter += 1;
}

if (answerCounter === rounds) {
  console.log(`Congratulations, ${name}!`);
} else { console.log(`Let's try again, ${name}!`); }
