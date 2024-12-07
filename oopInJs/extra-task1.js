// Write a function that given, an array arr, returns an array containing at each index i
// the amount of numbers that are smaller than arr[i] to the right.

function countOfSmallerElements(array) {
	let resultArray = [];

	for (let i = 0; i < array.length; i++) {
		const updatedArray = array.slice(i);
		const countNums = updatedArray.filter((num) => array[i] > num);
		resultArray.push(countNums.length);
	}

	return resultArray;
}

console.log(countOfSmallerElements([5, 4, 3, 2, 1]));
