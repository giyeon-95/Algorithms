//소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

const input = "good";

//me
function solution(str) {
  let answer = "";

  const isEven = str.length % 2 === 0;
  const stringLength = str.length;

  if (isEven) {
    answer += str[stringLength / 2 - 1];
    answer += str[stringLength / 2];
  } else answer = str[Math.floor(stringLength / 2)];

  return answer;
}
console.log(solution(input));

//lec
function solution(str) {
  let answer = "";
  let mid = Math.floor(str.length / 2);

  if (str.length % 2 === 1) answer = str.substr(mid, 1);
  else answer = str.substr(mid - 1, 2);

  return answer;
}
console.log(solution(input));
