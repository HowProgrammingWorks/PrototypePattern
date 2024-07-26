'use strict';

class Point {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  move(x, y) {
    this.#x += x;
    this.#y += y;
  }

  clone() {
    return new Point(this.#x, this.#y);
  }

  toString() {
    return `(${this.#x}, ${this.#y})`;
  }
}

class Line {
  #start;
  #end;

  constructor(start, end) {
    this.#start = start;
    this.#end = end;
  }

  clone() {
    return new Line(this.#start, this.#end);
  }

  toString() {
    return `[${this.#start}, ${this.#end}]`;
  }
}

// Usage

const p1 = new Point(0, 0);
const p2 = new Point(10, 20);
const line = new Line(p1, p2);
console.log(line.toString());
const clone = line.clone();
console.log(clone.toString());
