//길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
//가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.

//me
function solution(a, b, c) {
  let answer = "YES";
  let max = a > b ? a : b;
  if (max < c) max = c;

  //a,b,c 중 어떤 것이 제일 큰 수 인지 판별하기 애매하니 총합 sum을 이용
  let sum = a + b + c;

  if (sum - max <= max) answer = "NO";

  return answer;
}

console.log(solution(13, 33, 17));
