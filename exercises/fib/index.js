// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// 1.
// function fib(n) {
// 	const fibonacci = [0, 1];

// 	for (i = 2; i <= n; i++) {
// 		fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
// 	}

// 	return fibonacci[n];
// }

// 2.
// function fib(n, index = 2, fibonacci = [0, 1]) {
// 	if (fibonacci.length === n + 1) return fibonacci[n];

// 	fibonacci.push(fibonacci[index - 2] + fibonacci[index - 1]);
// 	return fib(n, index + 1, fibonacci);
// }

// 3.
function memoize(fn) {
	const cache = {};

	return function (...args) {
		if (cache[args]) {
			return cache[args];
		}

		const result = fn.apply(this, args);
		cache[args] = result;

		return result;
	};
}

function fib(n) {
	if (n < 2) return n;

	return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
