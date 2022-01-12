import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};

const runCheck = (name, answer, rightAnswer) => {
  if (rightAnswer !== answer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${name}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};

export { greeting, runCheck };
