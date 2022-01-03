#!/usr/bin/env node
import greet, {
  askQuestion, compareResults, getRandomInt, rounds,
} from '../src/cli.js';

const name = greet();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const responses = ['yes', 'no'];

let answerCounter = 0;

while (answerCounter < rounds) {
  const number = getRandomInt(20);
  console.log(`Question: ${number}`);
  const response = askQuestion('Your answer:');
  const responseIndex = responses.indexOf(response);
  const correctResponseIndex = number % 2;
  const isAnswerCorrect = compareResults(responseIndex, correctResponseIndex, 'Correct!', `'${response}' is wrong answer ;(. Correct answer was '${responses[correctResponseIndex]}'.`);
  if (responseIndex === -1 || !isAnswerCorrect) {
    answerCounter += 3;
  }
  answerCounter += 1;
}

if (answerCounter === rounds) {
  console.log(`Congratulations, ${name}!`);
} else { console.log(`Let's try again, ${name}!`); }
