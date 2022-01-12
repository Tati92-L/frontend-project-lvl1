import readlineSync from 'readline-sync';
import { greeting, runCheck } from '../src/index.js';

const arrayGenerator = () => {
  const progresArray = [];
  let num = Math.floor(Math.random() * 10);
  const diff = Math.floor(Math.random() * 10) + 1;
  const length = Math.floor(Math.random() * 6) + 5;
  const index = Math.abs(Math.floor(Math.random() * length));
  let rightAnswer = null;
  for (let i = 0; i <= length; i += 1) {
    num += diff;
    if (i === index) {
      rightAnswer = num;
      progresArray.push('..');
    } else if (i !== index) {
      progresArray.push(num);
    }
  }
  return [progresArray, rightAnswer];
};

const progresGame = (count = 2) => {
  const name = greeting();
  console.log('What number is missing in the progression?');

  for (let i = 0; i <= count; i += 1) {
    const [progresArray, rightAnswer] = arrayGenerator();
    console.log(`Question: ${progresArray}`);
    const answer = readlineSync.question('Your answer:');

    if (!runCheck(name, Number(answer), rightAnswer)) {
      return false;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default progresGame;
