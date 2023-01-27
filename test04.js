// 자연수 n => 이진법 변환 string
// string 1의 갯수 k
// n 보다 작은 자연수 중 이진법으로 변환하여 1의 갯수가 k인 수가 몇 개 있는지 return

const input = 9;

const getOneCount = (binary) => {
  let count = 0;
  for (let val of binary) {
    if (val === "1") {
      count++;
    }
  }
  return count;
};

function solution(n) {
  var answer = 0;
  let number = n;
  const isEven = n % 2 === 0;
  const inputBinary = n.toString(2);
  const inputOneCount = getOneCount(inputBinary);

  while (number > 0) {
    const toBinary = number.toString(2);
    const oneCount = getOneCount(toBinary);
    if (oneCount === inputOneCount) {
      answer++;
    }
    number = number - 2;
  }

  return answer;
}

console.log(solution(input));
