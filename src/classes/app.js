// class
// class MathHandle {
//   constructor(x, y) {
//       this.x = x
//       this.y = y
//   }
//   add() {
//       return this.x + this.y
//   }
// }

// const m = new MathHandle(1, 2)
// console.log(m.add())

// class中this指向问题
// class Logger {
//   printName(name = 'there') {
//     this.print(`Hello ${name}`);
//   }

//   print(text) {
//     console.log(text);
//   }
// }

// const logger = new Logger();
// const { printName } = logger;
// printName();


// this指向问题bind解决
// class Logger {
//   constructor() {
//     this.printName = this.printName.bind(this);
//   }
//   printName(name = 'there') {
//     this.print(`Hello ${name}`);
//   }

//   print(text) {
//     console.log(text);
//   }
// }

// const logger = new Logger();
// const { printName } = logger;
// printName();

// this指向问题箭头函数解决
// class Loclass Logger {
//   printName = (name = 'there') => {
//     this.print(`Hello ${name}`);
//   }

//   print(text) {
//     console.log(text);
//   }
// }

// const logger = new Logger();
// const { printName } = logger;
// printName();

// class的继承
// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     eat() {
//         alert(this.name + ' eat')
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name)
//         this.name = name
//     }
//     bark() {
//         alert(this.name + ' bark')
//     }
// }

// const dog = new Dog('哈士奇')
// dog.bark()
// dog.eat()