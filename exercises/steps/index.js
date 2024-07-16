// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// 1.
// function steps(n) {
// 	for (let i = 1; i <= n; i++) {
// 		let stair = '';

// 		for (j = 1; j <= n; j++) {
// 			if (j <= i) {
// 				stair += '#';
// 				continue;
// 			}

// 			stair += ' ';
// 		}

// 		console.log(stair);
// 	}
// }

// 2.
function steps(n, row = 0, stair = '') {
	if (row === n) return;

	if (stair.length === n) {
		console.log(stair);
		return steps(n, row + 1);
	}

	const add = stair.length <= row ? '#' : ' ';
	steps(n, row, stair + add);
}

module.exports = steps;
