// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0 ){
    return true
  }else {
    return false 
  }
  }

  //Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

  function repeatStr (n, s) {
    let result= ''
    for(let i = 0; i <n ; i++){
      result +=s
    }
    return result
  }


  //Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

  function countSheeps (arrayOfSheep){
    return arrayOfSheep.filter(Boolean).length 
     
   }

   //Complete the square sum function so that it squares each number passed into it and then sums the results together.

   function squareSum(numbers){
    return numbers.reduce(function(sum, n){
        return (n*n) + sum;
      }, 0)
    }