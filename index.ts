/*
 * this is the Palindrome program
 *
 * @author  Emmanuel FN
 * @version 1.0
 * @since   2024-05-03
 */

import { createPrompt } from 'bun-promptx'

/**
 * The function finds the max run
 *
 * @param {string} userWord  - String variable
 * @returns {number} Return value
 */
function maxRunFunction(userWord: string): number {
  let maxRun = 1
  let tempValue = 1
  for (let counter = 0; counter < userWord.length; counter++) {
    if (userWord.charAt(counter) === userWord.charAt(counter + 1)) {
      tempValue += 1
    } else {
      if (tempValue > maxRun) {
        maxRun = tempValue
        tempValue = 1
      }
    }
  }
  if (tempValue > maxRun) {
    maxRun = tempValue
    tempValue = 1
  }
  return maxRun
}

const prompt = promptSync()
const userString = prompt('Enter a string: ')
const maxRunValue = maxRunFunction(userString)
console.log(`The max run is ${maxRunValue}`)

console.log('\nDone.')
