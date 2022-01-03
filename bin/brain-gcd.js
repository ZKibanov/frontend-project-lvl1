#!/usr/bin/env node
import greet, {
  askQuestion, compareResults, getRandomInt, rounds,
} from '../src/cli.js';

const name = greet();
console.log('Find the greatest common divisor of given numbers.');

let answerCounter = 0;
const findNOD = (num1, num2) => {
  const findNumsD = (num) => {
    const result = [num];
    for (let i = Math.round(num / 2); i > 1; i -= 1) {
      if (num % i === 0) {
        result.push(i);
      }
    }
    result.push(1);
    return result;
  };
  const num1Dels = findNumsD(num1);
  const num2Dels = findNumsD(num2);
  for (let i = 0; i < num1Dels.length; i += 1) {
    if (num2Dels.includes(num1Dels[i])) {
      return num1Dels[i];
    }
  }
  return 1;
};
while (answerCounter < rounds) {
  const number = getRandomInt(100);
  const number2 = getRandomInt(100);
  console.log(`Question: ${number} ${number2}`);
  const response = askQuestion('Your answer:');
  const correctResponse = findNOD(number, number2);
  const isAnswerCorrect = compareResults(response, correctResponse, 'Correct!', `'${response}' is wrong answer ;(. Correct answer was '${correctResponse}'.`);
  if (!isAnswerCorrect) {
    answerCounter += 3;
  }
  answerCounter += 1;
}

if (answerCounter === rounds) {
  console.log(`Congratulations, ${name}!`);
} else { console.log(`Let's try again, ${name}!`); }
