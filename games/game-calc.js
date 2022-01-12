import readlineSync from 'readline-sync';
import { greeting, runCheck } from '../src/index.js';

const calcGame = (count = 2) => {
  const name = greeting();
  console.log('What is the result of the expression?');
  for (let i = 0; i <= count; i += 1) {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const ops = ['+', '-', '*'];
    const opindex = Math.floor(Math.random() * ops.length);
    const operator = ops[opindex];
    let rightAnswer;
    switch (operator) {
      case '+':
        rightAnswer = num1 + num2;
        break;
      case '-':
        rightAnswer = num1 - num2;
        break;
      case '*':
        rightAnswer = num1 * num2;
        break;
      default:
        console.log(`Sorry, ${operator} wrong.`);
    }
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const answer = readlineSync.question('Your answer:');
    if (!runCheck(name, Number(answer), rightAnswer)) {
      return false;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default calcGame;
