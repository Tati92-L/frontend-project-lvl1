import readlineSync from 'readline-sync';
import { greeting, runCheck } from '../src/index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const makePrime = () => {
  const num = Math.floor(Math.random() * 10);
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return [rightAnswer, num];
};

const primeGame = (count = 2) => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i <= count; i += 1) {
    const [rightAnswer, num] = makePrime();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer:');
    if (!runCheck(name, answer, rightAnswer)) {
      return false;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default primeGame;
