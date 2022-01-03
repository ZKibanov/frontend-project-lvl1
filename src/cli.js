import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const rounds = 3;
export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const askQuestion = (questionText) => readlineSync.question(`${questionText} `);

export const compareResults = (response, result, successText, failText) => {
  if (response === result) {
    console.log(successText);
    return true;
  }
  console.log(failText);
  return false;
};
export default greet;
