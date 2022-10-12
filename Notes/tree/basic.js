class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    let initNode = new Node(data);
    this.root = initNode;
    this.size = 0;
  }

  length() {
    return this.size;
  }

  insert(data) {
    let newNode = new Node(data);
    let currentNode = this.root;

    while (currentNode) {
      if (data === currentNode.data) {
        return;
      }
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          this.size++;
          return;
        } else {
          currentNode = currentNode.left;
        }
      }

      if (data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          this.size++;
          return;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  DFS() {
    let result = [];
    let stack = [this.root]; //stack에 root를 담고 시작

    while (stack.length !== 0) {
      let currentNode = stack.pop(); //하나 꺼내기
      //꺼낸거 검사

      //오른쪽검사
      if (currentNode.right) {
        stack.push(currentNode.right);
      }

      //왼쪽검사
      if (currentNode.left) {
        stack.push(currentNode.left);
      }

      result.push(currentNode.data);
    }

    return result;
  }

  //BFS는 DFS 에서 큐, shift()만 바뀐 것.
  BFS() {
    let result = [];
    let queue = [this.root];

    while (queue.length !== 0) {
      let crrentNode = queue.shift(); // 처음 값 부터 시작

      if (crrentNode.left) {
        queue.push(crrentNode.left);
      }

      if (crrentNode.right) {
        queue.push(currnetNode.right);
      }

      result.push(crrentNode.data);
    }
    return result;
  }
}

const tree = new Tree(5);

tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(9);

console.log(tree.DFS());

console.log(tree.root.data);
console.log(tree.root.left.data);
console.log(tree.root.right.data);

// const tree = {
//   root: {
//     value: 5,
//     left: {
//       value: 3,
//       left: { value: 1, left: null, right: null },
//       right: { value: 1, left: null, right: null },
//     },
//     right: {
//       value: 4,
//       left: null,
//       right: null,
//     },
//   },
// };
