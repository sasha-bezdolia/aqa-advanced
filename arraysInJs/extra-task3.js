// Between Extremes

// Given an array of numbers, return the difference between the largest and the smallest values.

function largestMinusSmallestNumsOfArray(array) {
  array.sort((a, b) => a - b);

  return array[array.length - 1] - array[0];
}

console.log(largestMinusSmallestNumsOfArray([23, 3, 19, 21, 16]));
