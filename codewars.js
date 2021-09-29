// function squareDigits(num){
//   //may the code be with you
//     let array = parseInt(num.toString().split('').map(el => el * el).join(''))
//     return array
// }
// // squareDigits(23);
// console.log(squareDigits(1551))


// function getSum(a,b){
//   let sum = 0;
//   if (a === b) return a;
//   if(a < b){
//     for (let i = a; i <= b; i++){
//       sum += i;
//     }
//   } else if (a > b){
//       for(let i = b; i <= a; i++){
//         sum += i;
//       }
//   }
//   return sum;
// }
// console.log(getSum(-2, -1));


// function arrayDiff(a, b) {
//     // let diff1 = b.filter(el => !a.includes(el));
//     let diff2 = a.filter(el => !b.includes(el));
//     // const unique = diff1.concat(diff2);
//     return diff2
//     }
// // arrayDiff([1, 7, 6], [])
//   console.log(arrayDiff([], [4,5]));


// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
// function disemvowel(str) {
// //     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
// //    return str.split('').filter(el => !vowels.includes(el)).join('')
//       return str.replace(/[aeiou]/gi, '');
// }
// console.log(disemvowel("This website is for losers LOL!"))



// function findOutlier(integers){
//     const even = integers.filter(el => el % 2 === 0);
//     const odd = integers.filter(el => el % 2 !== 0);
//     return even.length === 1 ? even[0] : odd[0]
// }
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))


//  INTERSECTION
// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];

// function intersection () {
//     // return a.filter(el => el === b.find(el1 => el1 === el))
//     return a.filter(el => b.includes(el))
// }
// console.log(intersection(a, b))



// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number. (123) 456-7890

// function createPhoneNumber(numbers){
//     // return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6, 10).join('')}`
//     // return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3')
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))



// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. 
// The words in the input String will only contain valid consecutive numbers.

// function order(words){

//     return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ')

//   }

//   console.log(order("is2 Thi1s T4est 3a"))
//   console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
//   console.log(order(""))


// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

// function findUniq(arr) {
//     // console.log(arr.filter((el, ind, arr) =>
//     //     arr.indexOf(el) === ind)
//     // )
//     // console.log(arr.filter((el, ind, arr) =>
//     //     arr.lastIndexOf(el) === ind)
//     // )

//     return arr.find((el) => 
//          arr.indexOf(el) === arr.lastIndexOf(el)
//     )
//   }
// console.log(findUniq([ 0, 1, 0 ]));
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
// console.log(findUniq([ 3, 10, 3, 3, 3 ]));
// console.log(findUniq([ 5, 3, 3, 3, 3 ]));
// console.log(findUniq([ 3, 3, 3, 3, 8 ]));



// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation marks untouched.

// function pigIt(str){
//         // const arrWords = str.split(' ').map(el => el.split('')).map(el => {
//         //     const firstLet = el.splice(0, 1)
//         //     const newWord = el.join('')+firstLet+'ay'
//         //     return newWord
//         // }).join(' ')
//         // console.log(arrWords)
//     // return str.split(' ').map(el => el.split('')).map(el => {
//     //     if (!/^[A-Za-z]+$/.test(el.join(''))) return el
//     //         const firstLet = el.splice(0, 1)
//     //         return el.join('')+firstLet+'ay'
//     //     }).join(' ')  // MY SOLUTION

//     //BEST Practice
//     // return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3") 

//     // return str.replace(/\w+/g, (w) => {
//     //     return w.slice(1) + w[0] + 'ay';
//     //   });
// }
// console.log(pigIt('Pig latin is cool')) //igPay atinlay siay oolcay
// console.log(pigIt('This is my string !')) //hisTay siay ymay tringsay


// Write a function named first_non_repeating_letter that takes a string input, 
// and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't',
// since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, 
// but the function should return the correct case for the initial letter. For example, 
// the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("") 
// or None -- see sample tests.

// function firstNonRepeatingLetter(s) {
//     // if (!s) return ''
//     const idx = s
//     .toLowerCase()
//     .split('')
//     .findIndex((el, ind, s) => {
//          return s.indexOf(el) === s.lastIndexOf(el)
//     })
//     return idx === -1 ? '' : s[idx]
//   }

//   console.log(firstNonRepeatingLetter('a'));
//   console.log(firstNonRepeatingLetter('sTress'));
//   console.log(firstNonRepeatingLetter('moonmen'));
//   console.log(firstNonRepeatingLetter('nonononono'));
//   console.log(firstNonRepeatingLetter(''));
    

// https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript
// function doneOrNot(board){
// const row = board.map(el => el.filter((el, ind, arr) => arr.indexOf(el) === ind));
// const isValidRow = row.some(el =>  el.length !== 9);
// let verticalBoard =[]
// for (let i=0; i<board.length; i++){
//      let col = [];
//      board.map((item) => {
//        col.push(item[i])
//      })
//      verticalBoard.push(col)
// }
// const col = verticalBoard.map(el => el.filter((el, ind, arr) => arr.indexOf(el) === ind));
// const isValidCol = col.some(el =>  el.length !== 9);

// let SqrArr = []
// const square1 = board.map(el => el.slice(0,3)).slice(0,3).join(',').split(',')
// SqrArr.push(square1)
// const square2 = board.map(el => el.slice(3,6)).slice(0,3).join(',').split(',')
// SqrArr.push(square2)
// const square3 = board.map(el => el.slice(6,9)).slice(0,3).join(',').split(',')
// SqrArr.push(square3)
// const square4 = board.map(el => el.slice(0,3)).slice(3,6).join(',').split(',')
// SqrArr.push(square4)
// const square5 = board.map(el => el.slice(3,6)).slice(3,6).join(',').split(',')
// SqrArr.push(square5)
// const square6 = board.map(el => el.slice(6,9)).slice(3,6).join(',').split(',')
// SqrArr.push(square6)
// const square7 = board.map(el => el.slice(0,3)).slice(6,9).join(',').split(',')
// SqrArr.push(square7)
// const square8 = board.map(el => el.slice(3,6)).slice(6,9).join(',').split(',')
// SqrArr.push(square8)
// const square9 = board.map(el => el.slice(6,9)).slice(6,9).join(',').split(',')
// SqrArr.push(square9)

// const sqr = SqrArr.map(el => el.filter((el, ind, arr) => arr.indexOf(el) === ind));
// const isValidSqr = sqr.some(el =>  el.length !== 9);

// if (isValidRow || isValidCol || isValidSqr) {
//      return "Try again!"
// }
// return "Finished!"
// }


// console.log(doneOrNot([
//      [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//      [6, 7, 2, 1, 9, 5, 3, 4, 8],
//      [1, 9, 8, 3, 4, 2, 5, 6, 7],
//      [8, 5, 9, 7, 6, 1, 4, 2, 3],
//      [4, 2, 6, 8, 5, 3, 7, 9, 1],
//      [7, 1, 3, 9, 2, 4, 8, 5, 6],
//      [9, 6, 1, 5, 3, 7, 2, 8, 4],
//      [2, 8, 7, 4, 1, 9, 6, 3, 5],
//      [3, 4, 5, 2, 8, 6, 1, 7, 9]])); //"Finished!")
            
// console.log(doneOrNot([
//      [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//      [6, 7, 2, 1, 9, 0, 3, 4, 9],
//      [1, 0, 0, 3, 4, 2, 5, 6, 0],
//      [8, 5, 9, 7, 6, 1, 0, 2, 0],
//      [4, 2, 6, 8, 5, 3, 7, 9, 1],
//      [7, 1, 3, 9, 2, 4, 8, 5, 6],
//      [9, 0, 1, 5, 3, 7, 2, 1, 4],
//      [2, 8, 7, 4, 1, 9, 6, 3, 5],
//      [3, 0, 0, 4, 8, 1, 1, 7, 9]])); //"Try again!")


// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

// function distinct(a) {
//      return Array.from(new Set(a))
// }

// console.log(distinct([1]));
// console.log(distinct([1,2]));
// console.log(distinct([1,1,2]));



// ⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. 
// Each continent is isolated from each other but infected people have spread before the warning. ⚠️
// 🗺️ You would be given a map of the world in a type of string:
// string s = "01000000X000X011X0X"
// '0' : uninfected
// '1' : infected
// 'X' : ocean
// ⚫ The virus can't spread in the other side of the ocean.
// ⚫ If one person is infected every person in this continent gets infected too.
// ⚫ Your task is to find the percentage of human population that got infected in the end.
// ☑️ Return the percentage % of the total population that got infected.
// ❗❗ The first and the last continent are not connected!
// 💡 Example:
//  start: map1 = "01000000X000X011X0X"
//  end:   map1 = "11111111X000X111X0X"
//  total = 15
//  infected = 11
//  percentage = 100*11/15 = 73.33333333333333
// ➕ For maps without oceans "X" the whole world is connected.
// ➕ For maps without "0" and "1" return 0 as there is no population.

// function infected(s) {
//    const splitMap = s.split('X');
//    const total = splitMap.join('').length;
//    let infected = 0;

//      splitMap.map(el => {el.split('')
//      if (el.includes('1')) infected += el.length
//      });
// if (infected === 0) return 0
//      return 100*infected/total

// //    console.log(total)
// //    console.log(infected)
// //    console.log(percentage)
//    }


// console.log( infected("01000000X000X011X0X")) //, 73.33333333333333, EPSILON );
// console.log( infected("01X000X010X011XX")) //, 72.72727272727273, EPSILON );
// console.log( infected("XXXXX")) //, 0, EPSILON );
// console.log( infected("0000000010")) //, 100, EPSILON );
// console.log( infected("X00X000000X10X0100")) //, 42.857142857142854, EPSILON );
// console.log( infected("000000000")) //, 42.857142857142854, EPSILON );