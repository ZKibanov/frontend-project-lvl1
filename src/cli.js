import readlineSync from 'readline-sync';

const greet = () => {
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello ${name}`);
};
export default greet;
