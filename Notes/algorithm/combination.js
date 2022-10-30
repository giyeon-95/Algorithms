/*

input -> array, selectNumber (몇개의 묶음으로나눌건지)

ex)
input-
[ 5, 6, 7, 8, 9 ], 3 

output- 
[
  [ 5, 6, 7 ], [ 5, 6, 8 ],
  [ 5, 6, 9 ], [ 5, 7, 8 ],
  [ 5, 7, 9 ], [ 5, 8, 9 ],
  [ 6, 7, 8 ], [ 6, 7, 9 ],
  [ 6, 8, 9 ], [ 7, 8, 9 ]
]

*/

function getCombination(array, selectNumber) {
  const resultArray = []; //조합으로 나눈 새 배열

  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }

  array.forEach((fixed, index, originArray) => {
    const restArray = originArray.slice(index + 1); // fixed제외 나머지 후방요소들 배열

    console.log("rest Array  : ", restArray);

    const combinations = getCombination(restArray, selectNumber - 1); //restArray 조합 재귀

    console.log("combinations : ", combinations);

    const attachFixed = combinations.map((element) => [fixed, ...element]); // fixed 붙이기

    console.log("attachFixed : ", attachFixed);

    resultArray.push(...attachFixed); //result array에 구한 조합요소 추가

    console.log("result Array : ", resultArray);
  });

  return resultArray;
}
