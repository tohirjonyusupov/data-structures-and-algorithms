// function first(){
//   second()
//   console.log('first');
// }

// function second(){
//   third()
//   console.log('second');
// }
// function third(){
//   fourth()
//   console.log('third');
// }

// function fourth(){
//   console.log('fourth');
// }

// function factorial(n){
//   if(n < 1){
//     console.log('End of recursion');
//   }else{
//     factorial(n - 1);
//     console.log(n);
//   }
// }

// factorial(5);

function f(n){
  if (n==0) {
    return 0
  }
  return (n-1) + f(n-1)
}

const result = f(3)
console.log(result);