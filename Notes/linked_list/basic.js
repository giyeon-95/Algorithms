// const list = {
//   head: {
//     value: 90,
//     next: {
//       value: 10,
//       next: {
//         value: 89,
//         next: {
//           value: 100,
//           next: null,
//         },
//       },
//     },
//   },
// };

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let initNode = new Node("init");
    this.head = initNode;
    this.tail = initNode;

    this.currentNode = undefined;
    this.dataSize = 0;
  }

  length() {
    return this.dataSize;
  }

  append(data) {
    let newNode = new Node(data);
    this.tail.next = newNode; //기존 tail을 새로운 노드를 가리키도록 한다.
    this.tail = newNode;
    this.dataSize++;
  }

  toString() {
    let currentNode = this.head;
    currentNode = currentNode.next;

    let array = [];
    for (let i = 0; i < this.dataSize; i++) {
      array.push(`${currentNode.data}`);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, data) {
    let currentNode = this.head;
    currentNode = currentNode.next;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    let newNode = new Node(data);

    newNode.next = currentNode.next;
    currentNode.next = newNode;

    this.dataSize++;
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.insert(2, 1000);

console.log(linkedList.length());
console.log(linkedList);

console.log(linkedList.toString());
