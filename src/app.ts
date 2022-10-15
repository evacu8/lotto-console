import inquirer from 'inquirer';
import { PromptResult } from './interfaces';

const chosenNumbers: number[] = [];
const randomNumbers: number[] = [];

const startApp = async (): Promise<void> => {
  do {
    const result: PromptResult = await inquirer.prompt([
      {
        name: 'number',
        type: 'input',
        message: 'Please enter a number...',
      },
    ]);

    if (validateInput(result.number)) {
      chosenNumbers.push(parseInt(result.number));
    }
  } while (chosenNumbers.length < 6);
  do {
    const number: number = Math.floor(Math.random() * 49 + 1);
    if (validateRandomNumber(number)) {
      randomNumbers.push(number);
    }
  } while (randomNumbers.length < 6);

  printResult();
};

const validateInput = (text: string): boolean => {
  const textConvert = parseInt(text);
  if (
    textConvert >= 1 &&
    textConvert <= 49 &&
    !chosenNumbers.includes(textConvert)
  ) {
    return true;
  } else return false;
};

const validateRandomNumber = (number: number): boolean => {
  if (number >= 1 && number <= 49 && !randomNumbers.includes(number)) {
    return true;
  } else return false;
};

const countSameNumbers = (): number => {
  let count = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    if (chosenNumbers.includes(randomNumbers[i])) {
      count++;
    }
  }
  return count;
};

const printResult = (): void => {
  console.log(`You have ${countSameNumbers()} correct numbers`);
};

startApp();