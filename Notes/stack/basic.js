// stack 직접 구현

class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  pop(index) {
    if (index === this.arr.length - 1) {
      return this.arr.pop();
    }

    let result = this.arr.splice(index, 1);
    return result;
  }

  empty() {
    if (this.arr.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  bottom() {
    return this.arr[0];
  }
}

const s = new Stack();

s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);
s.pop(2);
console.log(s.top());
console.log(s.bottom());

console.log(s);
