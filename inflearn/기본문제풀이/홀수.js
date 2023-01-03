//7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

let arr = [12, 77, 38, 41, 53, 92, 85];

//me
function solution(arr) {
  let answer = [];

  let odds = [];

  for (let val of arr) {
    if (val % 2 !== 0) {
      odds.push(val);
    }
  }

  const sum = odds.reduce((acc, current) => {
    return acc + current;
  }, 0);
  const min = Math.min(...odds);

  answer.push(sum);
  answer.push(min);

  return answer;
}

console.log(solution(arr));
