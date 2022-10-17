//배열 초기화 (크기지정)

//1차원배열 초기화 (fill함수, new O )
const arr = new Array(5).fill(false);

// [ false, false, false, false, false ]

//2차원배열 초기화 (from 함수, new X)
const arr2 = Array.from(Array(5), () => Array(5).fill(0));

/*
[
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ]
]
*/
