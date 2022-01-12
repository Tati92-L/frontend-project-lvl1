import readlineSync from 'readline-sync';
import { greeting, runCheck } from '../src/index.js';

const result = (num1, num2) => {
  if (num2) {
    return result(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const gcdGame = (count = 2) => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i <= count; i += 1) {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer:');
    const rightAnswer = result(num1, num2);
    if (!runCheck(name, Number(answer), rightAnswer)) {
      return false;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default gcdGame;
