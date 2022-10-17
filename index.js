const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

//전역변수 선언
let DFS_visited = [];
let BFS_visited = [];
let graph = [];
let DFS_result = [];
let BFS_result = [];

// DFS, BFS (시작노드 index를 인자로 받음)
function dfs(v) {
  //init 노드 방문처리
  DFS_visited[v] = true;

  //init 노드 추가
  DFS_result.push(v);

  //graph index는 설정한대로 1부터시작하고 index는 실제 data가 있는 graph.length -1 까지만 반복
  for (let i = 1; i < graph.length; i++) {
    // if(graph[v][i] === 1  &&)
  }
}

function bfs() {}

const inputConnects = input.slice(1).map((v) => v.split(" ").map(Number));

console.log("//입력받은 연결상태", "\n", inputConnects);

//그래프 생성 & 초기화 (index 다루기 편하게 index 0(row,col)은 버림)
graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

/*
[
    [ 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0 ,0],
    [ 0, 0, 0, 0 ,0],
]
*/

//그래프에 input 위치 1대입
for (let val of inputConnects) {
  let = [x, y] = val;

  graph[x][y] = 1;
  graph[y][x] = 1;
}
/*
[
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 1, 1, 1 ],
  [ 0, 1, 0, 0, 1 ],
  [ 0, 1, 0, 0, 1 ],
  [ 0, 1, 1, 1, 0 ]
]
*/

console.log("//대입 후 graph", "\n", graph);

//visited 배열 초기화(graph 배열과 같이 index 0은 버림)
DFS_visited = new Array(N + 1).fill(false);
BFS_visited = new Array(N + 1).fill(false);

console.log("//visited 배열 초기화", "\n", DFS_visited);

// DFS(v);
// BFS(v);
