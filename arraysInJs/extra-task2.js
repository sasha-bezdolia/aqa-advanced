// Sum of two lowest positive integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed

function twoLowestInt(array) {
	array.sort((a, b) => a - b);

	return array[0] + array[1];
}

console.log(twoLowestInt([19, 5, 42, 2, 77]));
