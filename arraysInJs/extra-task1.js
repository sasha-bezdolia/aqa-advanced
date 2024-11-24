// Calculate average

// Write a function which calculates the average of the numbers in a given list
// NOTE: Empty arrays should return 0

function averageOfNumsInArray(array) {
  if (array.length === 0) return 0;
  let sum = 0;

  array.map((el) => {
    sum += el;
  })

  return sum / array.length;
}

console.log(averageOfNumsInArray([1, 2, 3]));
