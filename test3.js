const input = "Jackdaws love my big sphinx of quartz";
const input2 =
  "His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam.";

//완벽한 문자열을 만드는 데 필요한 문자들을 return;
const arrayRemove = (arr, value) => {
  return arr.filter((ele) => {
    return ele != value;
  });
};

function solution(sentence) {
  const lowerSentence = sentence.toLowerCase().replace(/ /g, "");
  var answer = "";
  let alphabets = [];

  //알파벳 리스트 생성
  for (let i = 97; i < 123; i++) {
    alphabets.push(String.fromCharCode(i));
  }

  //lowerSentence 검사
  for (let val of lowerSentence) {
    const index = alphabets.indexOf(val);

    if (index !== -1) {
      //val 이 alphabets리스트에 있다면 alphabets 에서 삭제.
      delete alphabets[index];
    } else continue;
  }

  console.log(alphabets.toString().replace(/\,/g, ""));

  if (alphabets.toString().replace(/\,/g, "").length === 0) {
    answer = "perfect";
  } else {
    answer = alphabets.join("");
  }

  return answer;
}

console.log(solution(input));
