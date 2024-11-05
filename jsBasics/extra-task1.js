// Extra task 

// Sum all the of a given array (cq.list), except highest and the lowest element (by value, not by index!).
// The highest and lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation
// If an empty value ( null, None, Nothing, etc. ) is given instead of an array, 
// or the given array is an empty list or the list with only 1 element, return 0



const arrayWithNums = [6, 2, 8, 1, 1, 10];    // 6+2+8+1+1+10=28   6+2+8+1=17
// const arrayWithNums = [1];
// const arrayWithNums = [];
// const arrayWithNums = null;

function sumNumsOfArrayExceptHighestAndLowest (array) {
  if (array === null || array.length === 0 || array.length === 1) {
    return 0;
  }

  let sumAllArrayNums = 0;
  let lowestNum = array[0];
  let highestNum = array[0];

  for (let i = 0; i < array.length; i++) {
    sumAllArrayNums += array[i];
  
    if (lowestNum > array[i]) {
      lowestNum = array[i];
    }
  
    if (highestNum < array[i]) {
      highestNum = array[i];
    }
  }

  return sumAllArrayNums - highestNum - lowestNum;
}

console.log( sumNumsOfArrayExceptHighestAndLowest (arrayWithNums) );
