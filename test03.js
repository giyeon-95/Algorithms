const input = [
  "alex pizza pasta steak",
  "bob noodle sandwich pasta",
  "choi pizza sandwich pizza",
  "alex pizza pasta steak",
];

//가장 다양하게 주문하는 유저는 누구인지 찾기 (두 명 이상이라면 배열에 추가)
//같은 음식 여러번 주문 가능

function solution(orders) {
  var answer = [];
  const map = new Map();

  for (let val of orders) {
    const stringArr = val.split(" ");
    const name = stringArr[0];
    stringArr.shift();

    if (map.has(name)) {
      //중복주문한사람
      const alreadyOrdered = map.get(name);
      map.set(name, [...alreadyOrdered, ...stringArr]);
    } else {
      //처음주문한사람
      map.set(name, stringArr);
    }
  }

  //중복제거
  for (let key of map.keys()) {
    map.set(key, [...new Set(map.get(key))]);
  }

  let max = 0;

  //최대크기구하기
  for (let v of map.values()) {
    if (max < v.length) {
      max = v.length;
    } else continue;
  }

  //answer구하기
  for (let [k, v] of map) {
    if (v.length === max) {
      answer.push(k);
    }
  }

  return answer;
}
console.log(solution(input));
