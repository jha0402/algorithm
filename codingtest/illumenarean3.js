// 3. 100억 개의 문장이 있다 중복된 문장를 찾으려면 어떻게 해야 할까? (각 문자는 유니코드 이며 문장은 평균 100개의 문자로 구성되어 있다.)

const findRepeatedSentence = (sentences) => {
	const map = new Map();
	const result = [];

	for (let sentence of sentences) {
		if (!map.get(sentence)) {
			map.set(sentence, 1);
		} else {
			if (map.get(sentence) === 1) {
				result.push(sentence);
				let count = map.get(sentence);
				count++;
				map.set(sentence, count);
			}
		}
	}
	return result;
};

findRepeatedSentence();
