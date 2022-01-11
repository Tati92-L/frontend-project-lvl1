#!/usr/bin/env node
import readlineSync from 'readline-sync';

const loop = (count, name) => {
  for (let i = 0; i <= count; i += 1) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer:');
    const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
    if (rightAnswer !== answer) {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

const evenOrnot = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const count = 2;
  return loop(count, name);
};

evenOrnot();
export default evenOrnot;
