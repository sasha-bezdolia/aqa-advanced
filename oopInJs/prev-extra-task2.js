// You are given an array (which will have length at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.

// Write a method that takes the array as an argument and returns this 'outlier' N

function isEven (num) {
  return num % 2 === 0;
}

function isOdd (num) {
  return num % 2 !== 0;
}

function findOutlierInt (array) {
  let countOdd = 0;
  let countEven = 0;
  let resultArray;

  for (let i = 0; i < array.length; i++) {
      if (isEven(array[i])) {
          countEven++;
      } else {
          countOdd++;
      }
  }

  if (countEven > countOdd) {
      resultArray = array.filter((num) => isOdd(num))
  } else {
      resultArray = array.filter((num) => isEven(num));
  }

  return resultArray[0];
}

// console.log(findOutlierInt([3, 1, 2, 5, 15]));
console.log(findOutlierInt([8, 2, 4, 6, 21, 32, 66]));
