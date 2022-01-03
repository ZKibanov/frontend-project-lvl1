#!/usr/bin/env node
import greet, {
  askQuestion, compareResults, getRandomInt, rounds,
} from '../src/cli.js';

const name = greet();
console.log('What number is missing in the progression?');

let answerCounter = 0;
const makeArr = (len) => {
  const result = [getRandomInt(10)];
  const iter = getRandomInt(10);
  for (let i = 1; i < len; i += 1) {
    result.push(result[i - 1] + iter);
  }
  return result;
};
while (answerCounter < rounds) {
  const arr = makeArr(10);
  const hiddenElementIndex = getRandomInt(10) - 1;
  const correctResponse = arr[hiddenElementIndex];
  arr[hiddenElementIndex] = '..';
  console.log(`Question: ${arr.join(' ')}`);
  const response = Number(askQuestion('Your answer:'));
  const isAnswerCorrect = compareResults(response, correctResponse, 'Correct!', `'${response}' is wrong answer ;(. Correct answer was '${correctResponse}'.`);
  if (!isAnswerCorrect) {
    answerCounter += 3;
  }
  answerCounter += 1;
}

if (answerCounter === rounds) {
  console.log(`Congratulations, ${name}!`);
} else { console.log(`Let's try again, ${name}!`); }
