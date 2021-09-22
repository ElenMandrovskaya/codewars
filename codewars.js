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

function order(words){

    return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ')

  }

  console.log(order("is2 Thi1s T4est 3a"))
  console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
  console.log(order(""))