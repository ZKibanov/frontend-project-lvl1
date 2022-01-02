#!/usr/bin/env node
import greet, { askQuestion } from '../src/cli.js';

const name = greet();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const responses = ['yes', 'no'];

let answerCounter = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

while (answerCounter < 3) {
  const number = getRandomInt(20);
  console.log(`Question: ${number}`);
  const response = askQuestion('Your answer:');
  const responseIndex = responses.indexOf(response);
  const correctResponseIndex = number % 2;
  if (!responses.includes(response)) {
    answerCounter += 3;
  }
  if (responseIndex === correctResponseIndex) {
    console.log('Correct!');
  } else {
    console.log(`'${response}' is wrong answer ;(. Correct answer was '${responses[correctResponseIndex]}'.`);
    answerCounter += 3;
  }
  answerCounter += 1;
}

if (answerCounter === 3) {
  console.log(`Congratulations, ${name}!`);
} else { console.log(`Let's try again, ${name}!`); }
