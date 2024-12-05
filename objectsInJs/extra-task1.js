// Check for isogram (word that has no repeating letters)
// Ignore letter case

function isIsogram(string) {
	string = string.toLowerCase();

	for (let i = 0; i < string.length; i++) {
		if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
			return false;
		}
	}

	return true;
}

console.log(isIsogram('abs'));
