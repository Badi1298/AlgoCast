// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// 1.
function vowels(str) {
	return str.replace(/[^aeiouAEIOU]/g, '').length;
}

// 2.
// function vowels(str) {
// 	const vowelsChecker = ['a', 'e', 'i', 'o', 'u'];

// 	let numberOfVowels = 0;

// 	for (let char of str.toLowerCase()) {
// 		if (!vowelsChecker.includes(char)) continue;

// 		numberOfVowels++;
// 	}

// 	return numberOfVowels;
// }

module.exports = vowels;
