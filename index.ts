/**
 * The program gets the max run
 *
 * By:      Emmanuel FN
 * Version: 1.0
 * Since:   2022-05-03
 */

import { createPrompt } from 'bun-promptx';

/**
 * Function to find the longest consecutive run of identical characters in a given string.
 *
 * @param userWord The string to examine.
 * @returns The length of the longest run.
 */
function maxRunFunction(userWord: string): number {
  let maxRun = 1; // Initialize maximum run
  let currentRun = 1; // Initialize current run count
  
  // Loop through the string to find consecutive runs
  for (let counter = 0; counter < userWord.length - 1; counter++) {
    if (userWord.charAt(counter) === userWord.charAt(counter + 1)) {
      currentRun++; // Increment the current run if the characters are the same
    } else {
      if (currentRun > maxRun) {
        maxRun = currentRun; // Update the maximum run if the current run is longer
      }
      currentRun = 1; // Reset the current run count
    }
  }
  
  // Check the final run to ensure it is included in the maximum
  if (currentRun > maxRun) {
    maxRun = currentRun;
  }
  
  return maxRun;
}

// Ask the user to enter a string
const userString = prompt('Enter a string: ');

// Calculate the maximum run of identical characters
const maxRunValue = maxRunFunction(userString);

// Output the result
console.log(`The max run is ${maxRunValue}`);

console.log('\nDone.');
