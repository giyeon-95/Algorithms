const string = "stRrting";

const lowerString = string.toLowerCase();

function mostFrequentCharacter(word) {
  let obj = {};
  let arr = [];
  let mostFrequentLetter = "";
  let mostFrequentCount = 0;

  for (let letter of word) {
    //처음들어온 문자라면 obj key 값 0으로 초기화
    if (obj[letter] === undefined) {
      obj[letter] = 0;
    }

    //처음들어온 문자가 아니면 1증가
    obj[letter]++;

    if (obj[letter] > mostFrequentCount) {
      mostFrequentLetter = letter;
      mostFrequentCount = obj[letter]; //해당 문자 count 갱신
    }
  }

  console.log("obj :", obj);
  console.log("mostFrequentCount : ", mostFrequentCount);

  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]; // 각각의 키
    const value = obj[key]; // 각각의 키에 해당하는 각각의 값

    if (value === mostFrequentCount) {
      arr.push(key);
    }
  }

  //정렬
  arr.sort();
  const answer = arr.join("");

  return answer;
}

console.log(mostFrequentCharacter(lowerString));
