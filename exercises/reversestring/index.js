// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 1.
// function reverse(str) {
//     return str.split("").reverse().join("");
// }

// 2.
// function reverse(str) {
//     let newString = ''

//     for (let char of str) {
//         newString = char + newString
//     }

//     return newString

// }

// 3.
function reverse(str) {
	debugger;
	return str.split('').reduce((acc, char) => char + acc, '');
}

reverse('abcde');

module.exports = reverse;
