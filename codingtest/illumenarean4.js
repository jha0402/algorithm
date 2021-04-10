//4. 오름 차순으로 정렬된 배열이 있다. 이 배열 안에 들어 있는 원소는 정수이며 중복된 값이 없다고 했을때 가장 높이가 최소가 되는 이진 탐색 트리를 만드는 알고리즘을 작성하라.
class BST {
	constructor(val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}

	addToTree(val) {
		if (val < this.value) {
			if (this.left === null) {
				this.left = new BST(val);
			} else {
				this.left.addToTree(val);
			}
		} else if (val > this.value) {
			if (this.right === null) {
				this.right = new BST(val);
			} else {
				this.right.addToTree(val);
			}
		}
	}

	createTree(arr) {
		let middleIndex;
		if (arr.length === 0) {
			return 0;
		} else {
			middleIndex = Math.floor(arr.length / 2);
		}

		this.addToTree(arr[middleIndex]);

		let left = arr.slice(0, middleIndex);
		let right = arr.slice(middleIndex + 1, arr.length);
		this.createTree(left);
		this.createTree(right);
	}
}

const bst = (arr) => {
	let rootNode = new BST(arr[Math.floor(arr.length / 2)]);
	rootNode.createTree(arr);
	return rootNode;
};

let arr = [];
bst(arr);
