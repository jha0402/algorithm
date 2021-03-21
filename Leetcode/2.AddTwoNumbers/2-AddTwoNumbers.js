/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
	let p1 = l1,
		p2 = l2,
		num1 = 0,
		num2 = 0,
		carry = 0,
		solution = new ListNode(0), // head of the linked list
		current = solution;

	while (p1 || p2) {
		num1 = p1 ? p1.val : 0; // if p1|p2 has no more node, set number to 0
		num2 = p2 ? p2.val : 0;

		// edge case: when sum is 10 or more
		if (num1 + num2 + carry > 9) {
			current.next = new ListNode(num1 + num2 + carry - 10); // create a next node
			current = current.next; // set the next node as current
			carry = 1; // set carry 1 as its 10 or more
		} else {
			current.next = new ListNode(num1 + num2 + carry);
			current = current.next;
			carry = 0;
		}
		// edge case : when length of one is shorter than the other
		if (p1) p1 = p1.next; // make the while loop go on
		if (p2) p2 = p2.next;
	}
	// edge case : when the last sum of nodes is 10 or more. Create next node with value of 1 (carry)
	if (carry) current.next = new ListNode(carry);
	return solution.next; // the answer is the chained list after the head starting with 0 val
};
