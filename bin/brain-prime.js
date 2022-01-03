#!/usr/bin/env node
import greet, {
  askQuestion, compareResults, getRandomInt, rounds, getDividers,
} from '../src/cli.js';

const name = greet();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let answerCounter = 0;

while (answerCounter < rounds) {
  const number = getRandomInt(100);
  const dividersArr = getDividers(number);
  console.log(`Question: ${number}`);
  const response = askQuestion('Your answer:');
  const correctResponse = !dividersArr.length ? 'yes' : 'no';
  const isAnswerCorrect = compareResults(response, correctResponse, 'Correct!', `'${response}' is wrong answer ;(. Correct answer was '${correctResponse}'.`);
  if (!isAnswerCorrect) {
    answerCounter += 3;
  }
  answerCounter += 1;
}

if (answerCounter === rounds) {
  console.log(`Congratulations, ${name}!`);
} else { console.log(`Let's try again, ${name}!`); }
