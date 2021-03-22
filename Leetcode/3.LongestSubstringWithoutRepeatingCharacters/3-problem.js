/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	// substring = consequent string without repeating
	// edge case1 : input = '' = output = 0
	let longestStr = '';
	let currentStr = '';

	for (let i = 0; i < s.length; i++) {
		let letter = s[i];
		let index = currentStr.indexOf(letter);

		if (index > -1) {
			if (currentStr.length > longestStr.length) longestStr = currentStr;
			currentStr = currentStr.slice(index + 1) + letter;
		} else {
			currentStr += letter;
		}
	}
	if (currentStr.length > longestStr.length) longestStr = currentStr;
	return longestStr.length;
};
