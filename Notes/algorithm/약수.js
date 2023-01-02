const getDivisors_1 = (num) => {
  const divisors = [];

  //약수는 자신을 제외하고 n/2보다 클 수 없기 때문에 절반값까지만 체크 한다.
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) divisors.push(i);
  }
  return [...divisors, num];
};

const getDivisors_2 = (num) => {
  const divisors = [];

  for (let i = 1; i <= Math.sqrt(num); i++) {
    //num을 i로 나누고 나머지가 0이라면 배열에 추가.
    if (num % i === 0) {
      divisors.push(i);

      //몫도 배열에 추가하는데, 만약에 num을 i로 나눈 값이 i와 같다면 제외한다.
      if (num / i != i) divisors.push(num / i);
    }
  }
  return divisors;
};

console.log(getDivisors_2(100));

/* 
getDivisors_2 설명.

num이 100이라고 가정한다. 
Math.sqrt(100) = 10 이다.

해당 약수를 가지고 입력받은 값을 나누게 될 경우 나오는 결과 값 역시 약수다.

100의 10이하의 약수들을 구하면 [1,2,4,5,10]이다. 

100 / 1 = 100
100 / 2 = 50
100 / 4 = 25
100 / 5 = 20
100 / 10 = 10

100을 10이하의 약수들로 나눈 결과 값 또한 100의 약수다.
즉 100의 약수는 [1,2,4,5,10,20,25,50,100]이 된다. 
*/
