// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		if (!this.head) return 0;

		let count = 0;
		let currentNode = this.head;

		while (currentNode) {
			count++;
			currentNode = currentNode.next;
		}

		return count;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) return null;

		let currentNode = this.head;

		while (currentNode.next) {
			currentNode = currentNode.next;
		}

		return currentNode;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) return;

		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) return;

		if (!this.head.next) {
			this.head = null;
			return;
		}

		let currentNode = this.head;
		let nextNode = this.head.next;

		while (nextNode.next) {
			currentNode = nextNode;
			nextNode = nextNode.next;
		}

		currentNode.next = null;
	}

	insertLast(data) {
		const lastNode = this.getLast();

		if (!lastNode) {
			this.head = new Node(data);
			return;
		}

		lastNode.next = new Node(data);
	}

	getAt(index) {
		if (index > this.size()) return null;

		let count = 0;
		let currentNode = this.head;

		while (currentNode) {
			if (count === index) {
				return currentNode;
			}

			count++;
			currentNode = currentNode.next;
		}

		return null;
	}

	removeAt(index) {
		if (!this.head) return;
		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		let prevNode = this.getAt(index - 1);
		if (!prevNode || !prevNode.next) return;

		prevNode.next = prevNode.next.next;
	}

	insertAt(data, index) {
		if (!this.head) {
			this.insertFirst(data);
			return;
		}

		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		let prevNode = this.getAt(index - 1) || this.getLast();

		prevNode.next = new Node(data, prevNode.next);
	}

	forEach(fn) {
		let index = 0;
		let currentNode = this.head;

		while (currentNode) {
			fn(currentNode, index);
			currentNode = currentNode.next;
			index++;
		}
	}

	*[Symbol.iterator]() {
		let currentNode = this.head;

		while (currentNode) {
			yield currentNode;
			currentNode = currentNode.next;
		}
	}
}

module.exports = { Node, LinkedList };
