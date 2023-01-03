//대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

const input = "BANANA";

//me
function solution(str) {
  let answer;
  let array = [];

  for (let val of str) {
    if (val === "A") array.push("#");
    else array.push(val);
  }

  answer = array.join("");

  return answer;
}

console.log(solution(input));

//lec
function solution2(str) {
  let answer = "";

  for (let x of str) {
    if (x === "A") answer += "#";
    else answer += x;
  }

  return answer;
}

console.log(solution2(input));

function solution3(str) {
  let answer = str; //string은 얕은복사가 아니다.
  answer = answer.replace(/A/g, "#"); //g는 모두 바꾸기.
  return answer;
}

console.log(solution3(input));
