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

function firstNonRepeatingLetter(s) {
    // if (!s) return ''
    const idx = s
    .toLowerCase()
    .split('')
    .findIndex((el, ind, s) => {
         return s.indexOf(el) === s.lastIndexOf(el)
    })
    return idx === -1 ? '' : s[idx]
  }

  console.log(firstNonRepeatingLetter('a'));
  console.log(firstNonRepeatingLetter('sTress'));
  console.log(firstNonRepeatingLetter('moonmen'));
  console.log(firstNonRepeatingLetter('nonononono'));
  console.log(firstNonRepeatingLetter(''));
    