function test() {
  const array = [1,2,3,4,5]
  return array[0]
}

// function test1(){
//   const array = [1,2,3,4,5]
//   return array[-1]
// }

function isOdd(n) {
  if (n % 2 == 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
// isOdd(2)

function test3(name) {
  const students = {
    tohir: 2
  }
  return students[`${name}`]
}

// console.log(test3('tohir'));

function everyElement(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}
// everyElement([1,2,3,4,5])

function theLargest(list) {
  let max = list[0]
  for (let i = 0; i < list.length; i++) {
    list[i] > max && (max = list[i])
  }

  return max
}

// console.log(theLargest([1,2,3,4,5]));


function countApples(list) {
  let count = 0

  for (let i = 0; i < list.length; i++) {
    list[i] == 'apple' && (count++)
  }

  return count
}

// console.log(countApples(['banana', 'apple', 'mango', 'orange']));

function  sumOfNumber(list) {
  let result = 0
  for (let i = 0; i < list.length; i++) {
    result += list[i]
  }

  return result
}

// console.log(sumOfNumber([1,2,3,4,5]));

function existNumber(number) {
  const numbers = [1,2,3,4,5]
  let exist = false

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] == number && (exist = true)
  }

  return exist
}

console.log(existNumber(3));
