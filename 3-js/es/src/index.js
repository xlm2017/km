let a = 1;

[1, 2, 3].map(n => n + 1);

class Book {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name || '默认'
  }
}