// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// 1.
// function pyramid(n) {
// 	for (let row = 1; row <= n; row++) {
// 		let pyramid = '';

// 		for (let col = 1; col <= n; col++) {
// 			if (col <= row) {
// 				pyramid += '#';
// 				continue;
// 			}

// 			pyramid += ' ';
// 		}

// 		const reversedPyramid = pyramid.split('').reverse().join('');
// 		pyramid = reversedPyramid.slice(0, reversedPyramid.length - 1) + pyramid;

// 		console.log(pyramid);
// 	}
// }

// 2.
// function pyramid(n, row = 0, myPyramid = '') {
// 	if (row === n) return;

// 	if (myPyramid.length === n) {
// 		const reversedPyramid = myPyramid.split('').reverse().join('');
// 		myPyramid = reversedPyramid.slice(0, reversedPyramid.length - 1) + myPyramid;

// 		console.log(myPyramid);
// 		return pyramid(n, row + 1);
// 	}

// 	if (myPyramid.length <= row) {
// 		myPyramid += '#';
// 	} else {
// 		myPyramid += ' ';
// 	}

// 	pyramid(n, row, myPyramid);
// }

// 3.
// function pyramid(n) {
// 	const midPoint = Math.floor((n * 2 - 1) / 2);

// 	for (let row = 0; row < n; row++) {
// 		let pyramid = '';

// 		for (let col = 0; col < n * 2 - 1; col++) {
// 			if (midPoint - row <= col && midPoint + row >= col) {
// 				pyramid += '#';
// 			} else {
// 				pyramid += ' ';
// 			}
// 		}

// 		console.log(pyramid);
// 	}
// }

// 4.
function pyramid(n, row = 0, level = '') {
	if (row === n) return;

	if (level.length === n * 2 - 1) {
		console.log(level);
		return pyramid(n, row + 1);
	}

	const midPoint = Math.floor((n * 2 - 1) / 2);

	let add;

	if (midPoint - row <= level.length && midPoint + row >= level.length) {
		add = '#';
	} else {
		add = ' ';
	}

	pyramid(n, row, level + add);
}

module.exports = pyramid;
