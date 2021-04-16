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
//     console.log(arrayDiff([3,4], [3]));
//     console.log(arrayDiff([1,8,2], []));
// console.log(arrayDiff([1, 2, 3], [1, 2]));

