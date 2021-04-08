// 2. 배열에서 모든 중복된 숫자와 횟수를 출력하는 프로그램을 작성하시오.

// 조건: 1 부터 N 까지의 숫자로 이루어진 배열이 있다. 배열엔 중복된 숫자가 나타날 수 있고, N이 무엇인지는 알 수 없다. (루프 사용은 최소로 한다.)  (0<N<50000)

// 예: [3:5,4:10,5:1,6:10]

const repeatingNumbers = (arr) => {
	const values = {};
	const result = [];
	arr.forEach((el) => {
		values[el] = (values[el] || 0) + 1;
	});
	for (let [key, value] of Object.entries(values)) {
		result.push(`${key}:${value}`);
	}
	console.log(result);
	return result;
};

repeatingNumbers();

//참고 :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

//개인 블로그 참고 :
// https://velog.io/@jha0402/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%93%9C-%ED%85%8C%ED%81%AC%EB%8B%89-%EB%AA%A8%EC%9D%8C%EC%A7%91
