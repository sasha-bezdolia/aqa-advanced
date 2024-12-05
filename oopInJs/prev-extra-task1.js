// given a string of words, return the length of the shortest word(s)
// string will never be empty and you do not need to account for different data types

function shortestWordFromString(string) {
	const array = string.split(' ');
	const res = array.sort((a, b) => a.length - b.length);

	return res[0].length;
}

console.log(shortestWordFromString('dtsdfsdf ssdfsdfffffff lsjdf dlskjflskdj'));
