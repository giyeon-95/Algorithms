//소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

const input = "aaaavvvvbcccc";

//me
function solution(str) {
  let answer = "";
  let set = new Set();

  for (let val of str) {
    if (set.has(val)) continue;
    set.add(val);
    answer += val;
  }

  console.log(set);

  return answer;
}
console.log(solution(input));
