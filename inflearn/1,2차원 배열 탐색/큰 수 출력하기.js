const input = [7, 3, 9, 5, 6, 12];

//me
function solution(array) {
  let answer = [];

  answer.push(array[0]);

  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] < array[i]) answer.push(array[i]);
  }

  return answer.join(" ");
}
console.log(solution(input));
