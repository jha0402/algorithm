var twoSum = function (nums, target) {
	let storage = {};
	for (let [index, num] of nums.entries()) {
		// nums의 반복문, index, num 구조 분해
		if (storage[num] !== undefined) {
			// storage에 'num' 키가 undefined가 아니라면
			return [storage[num], index]; // 있으면 storage에 있는 'num'키의 값(index), index를 배열 안에 리턴
		}
		storage[target - num] = index; // 키가 없으면 storage에 'target - num'의 값으로 index 값을 저장
	}
};

// input [2,7,11,15]
// 첫번째 loop :
// index = 0   num = 2
// storage[2] === undefined
// storage[9 - 2] = 0
// storage{ '7': 0 }

// 두번쨰 loop :
// index = 1  num = 7
// storage[7] !== undefined
// return [storage[7], 1]
// return [0, 1]
