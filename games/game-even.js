import readlineSync from 'readline-sync';
import { greeting, runCheck } from '../src/index.js';

const startGame = (count = 2) => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i <= count; i += 1) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer:');
    const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
    if (!runCheck(name, answer, rightAnswer)) {
      return false;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default startGame;
