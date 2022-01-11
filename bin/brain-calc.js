#!/usr/bin/env node
import readlineSync from 'readline-sync';

const vCount = (count, name) => {
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
    if (rightAnswer !== Number(answer)) {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

const correctOrnot = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');
  const count = 2;
  return vCount(count, name);
};

correctOrnot();
export default correctOrnot;
