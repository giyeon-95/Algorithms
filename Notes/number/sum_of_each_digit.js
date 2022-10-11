//각 자리수의 합 - input : number type

function getSumOfEachDigit(number) {
  let sum = 0;

  do {
    sum += number % 10;
    number = Math.floor(number / 10); //Math.floor : 소수점 이하 버림
  } while (number > 0);

  return sum;
}

console.log(getSumOfEachDigit(111));
