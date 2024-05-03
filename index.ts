/*
 * this is the Palindrome program
 *
 * @author  Emmanuel FN
 * @version 1.0
 * @since   2024-04-18
 */

import { createPrompt } from 'bun-promptx'

// Utility function to convert a whole number to its English word representation
function numberToWords(num: number): string {
  if (num === 0) return "zero";
  
  const belowTwenty = [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
    "eighteen", "nineteen"
  ];
  
  const tens = [
    "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];
  
  const hundreds = (num: number): string => {
    if (num < 20) {
      return belowTwenty[num - 1];
    } else if (num < 100) {
      const tenIndex = Math.floor(num / 10);
      const unitIndex = num % 10;
      return tens[tenIndex - 1] + (unitIndex ? ` ${belowTwenty[unitIndex - 1]}` : "");
    } else {
      const hundredIndex = Math.floor(num / 100);
      const remainder = num % 100;
      return (
        belowTwenty[hundredIndex - 1] +
        " hundred" +
        (remainder ? ` ${hundreds(remainder)}` : "")
      );
    }
  };

  return hundreds(num);
}

// Main function to get words in alphabetical order for whole numbers up to input
function numbersToWordsInAlphabeticalOrder(input: number): string[] {
  if (input < 0) {
    throw new Error("Input must be a non-negative whole number.");
  }
  
  const wordsArray: string[] = [];
  
  // Generate numbers from 0 to input and convert to words
  for (let i = 0; i <= input; i++) {
    wordsArray.push(numberToWords(i));
  }
  
  // Sort the words array alphabetically
  wordsArray.sort((a, b) => a.localeCompare(b));
  
  return wordsArray;
}

// Example usage
const sortedWords = numbersToWordsInAlphabeticalOrder(10);
console.log(sortedWords);
