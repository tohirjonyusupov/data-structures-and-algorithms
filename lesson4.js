// function test(s) {
//   let left = 0
//   let right = s.length -1 // s = 10 right = 9

//   for (let i = 0; i < s.length; i++) {
//     if(right < left) {
//       break;
//     }
//     [s[left], s[right]] = [s[right], s[left]]
//     left++
//     right--
//   }

//   return s
// }

// console.log(test(['h','e','l','l','o','q']));


function twoSum(numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (right != left) {
    if ((numbers[left] + numbers[right]) == target) {
      return [left+1, right+1]
    }
    else if((numbers[left] + numbers[right]) < target) {
      left += 1
    }
    else {
      right -= 1
    }
  }
}

console.log(twoSum([2,7,11,15], 9));