// 1. 정렬되어 있지 않은 값을 가지는 LinkedList가 주어졌을 때 이 리스트에서 중복되는 원소를 제거하는 코드를 작성하라 단 버퍼는 사용할 수 없으며 LinkedList는 직접 구현하여야 한다. 구현된 LinkedList 에는 리스트의 사이즈를 확인 할수 있는 기능을 구현하라.
class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	// 중복 요소 제거 메소드
	deleteRepeatingValues(head) {
		let current = head;
		while (current) {
			let loop = current;
			while (loop.next) {
				if (loop.next.value === current.value) {
					loop.next = loop.next.next;
					this.size -= 1;
				} else {
					loop = loop.next;
				}
			}
			current = current.next;
		}
	}
	// 리스트에 값을 추가하는 메소드
	addToTail(val) {
		const newNode = new Node(val);

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.size += 1;
	}

	// 리스트의 사이즈를 확인 하는 메소드
	getSize() {
		return this.size;
	}
}

// linkedList = new LinkedList();
// linkedList.addToTail(4);
// linkedList.addToTail(2);
// linkedList.addToTail(1);
// linkedList.addToTail(5);
// linkedList.addToTail(5);
// linkedList.addToTail(3);
// linkedList.addToTail(6);
// linkedList.addToTail(6);
// linkedList.getSize();
// linkedList.deleteRepeatingValues(linkedList.head);
// console.log(linkedList);
