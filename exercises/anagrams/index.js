// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// 1.
// function anagrams(stringA, stringB) {
// 	const stringAMap = createMap(stringA);
// 	const stringBMap = createMap(stringB);

// 	if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) return false;

// 	for (let key in stringAMap) {
// 		if (stringAMap[key] !== stringBMap[key]) return false;
// 	}

// 	return true;
// }

// function createMap(string) {
// 	const map = {};

// 	for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
// 		map[char] = map[char] + 1 || 1;
// 	}

// 	return map;
// }

// 2.
function anagrams(stringA, stringB) {
	const parsedStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
	const parsedStringB = stringB.replace(/[^\w]/g, '').toLowerCase();

	const aArray = parsedStringA.split('').sort();
	const bArray = parsedStringB.split('').sort();

	return arraysAreIdentical(aArray, bArray);
}

function arraysAreIdentical(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}

module.exports = anagrams;
