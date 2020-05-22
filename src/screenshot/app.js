// // a.js
// var a = (function(b){
//   return { a: b + 1 }
// })(num);

// // b.js
// var b = 0;

// // index.js
// ;(function(a, b){
//   a(b)
// })(a, b)

// // a.js
// module.exports =
//   function() {
//   return {
//     a: b+1,
//   }
// }

// // b.js
// exports.b = 0;

// // index.js
// var a = require('./a');
// var b = require('./b');
// console.log(a(b))

// // a.js
// define('a', ['b'],
//   function(b){
//   return {
//       a: b + 1
//   }
// });

// // b.js
// define('b', 0);

// // index.js
// define('index', ['a', 'b'],
//   function(a, b){
//   return function(){
//     console.log(a(b))
//   }
// });

// // a.js
// define(
//   function(require,exports,module){
//   exports.a = function() {
//     return { a: b + 1 }
//   }
// });

// // b.js
// define(
//   function(require,exports,module){
//   exports.b = 0
// });

// // index.js
// seajs.use(['./a.js','./b.js'],
//   function(a,b){
//   console.log(a(b));
// })

// // a.js
// export default
//   function(b) {
//     return {
//       a: b + 1
//     }
//   }

// // b.js
// export const b = 0

// // index.js
// import a from './a'
// import { b } from './b'
// console.log(a(b));

// // 构造函数
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype.toString =
//   function () {
//     return `(${this.x}, ${this.y})`;
//   };

// const p = new Point(1, 2);

// // 类
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   toString() {
//     return `(${this.x}, ${this.y})`;
//   }
// }

// export const zero = 0;
// export function multiply(x, y) {
//   return x * y;
// };
// export default 0;

// var firstName = 'Michael';
// var lastName = 'Jackson';
// var year = 1958;
// export { firstName, lastName, year };
// export { firstName as f, lastName as l, year as y };

// import { firstName, lastName, year } from './p'
// import { multiply } from './math'
// import { zero } from './a'
// import {
//   f as firstName,
//   l as lastName,
//   y as year } from './profile'
// import 'lodash';
// import zero from '.zero'

// export function area(radius) {
//   return Math.PI * radius * radius;
// }
// export function circumference(radius) {
//   return 2 * Math.PI * radius;
// }

// import * as circle from './circle';
// console.log('圆面积：' + circle.area(4));
// console.log('圆周长：' + circle.circumference(14));

// circle.foo = 'hello';
// circle.area = function () {};

// const a = 1;
// export default a;

// export default const a = 1;

// export default 42;

// export 42;

// function add(x, y) {
//   return x * y;
// }
// export { add as default };
// // 等同于 export default add;
// import { default as foo } from 'modules';
// // 等同于 import foo from 'modules';

// // 1
// export { foo, bar } from 'my_module';
// // 2
// export { foo as myFoo } from 'my_module';
// // 3
// export * from 'my_module';
// // 4
// export { es6 as default } from './someModule';

// // 1
// import { foo, bar } from 'my_module';
// export { foo, bar };
// // 2
// import { foo } from 'my_module';
// export { foo as myFoo } from 'my_module';
// // 3
// import * as foo from 'my_module'
// export default foo
// // 4
// import { es6 } from './someModule';
// export default es6;

// // constants/db.js
// export const db = {
//   url: 'http://my.couchdbserver.local:5984',
//   admin_username: 'admin',
//   admin_password: 'admin password'
// };

// // constants/user.js
// export const users =
//   ['root', 'admin', 'staff', 'ceo', 'chief', 'moderator'];

// // constants/index.js
// export {db} from './db';
// export {users} from './users';

// // index.js
// import {db, users} from './constants/index';

// class Point {
// }

// // 等同于
// class Point {
//   constructor() {}
// }

// class Foo {
//   constructor() {
//     return Object.create(null);
//   }
// }

// Foo()
// // TypeError: Class constructor Foo cannot be invoked without 'new'

// class Foo {
//   static classMethod() {
//     return 'hello';
//   }
// }
// Foo.classMethod() // 'hello'

// var foo = new Foo();
// foo.classMethod()
// // TypeError: foo.classMethod is not a function

// class Foo {
//   static bar() {
//     this.baz();
//   }
//   static baz() {
//     console.log('hello');
//   }
//   baz() {
//     console.log('world');
//   }
// }
// Foo.bar() // hello

// class Foo {
// }

// Foo.prop = 1;
// Foo.prop // 1

// class Foo {
//   static prop = 1;
// }
// Foo.prop // 1

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

// class Logger {
//   constructor() {
//     this.printName = this.printName.bind(this);
//   }
//   // ...
// }

// class Logger {
//   printName= (name = 'there')  => {
//     this.print(`Hello ${name}`);
//   }

//   // ...
// }

// class ColorPoint extends Point {
//   constructor(x, y, color) {
//     super(x, y);
//     this.color = color;
//   }

//   toString() {
//     return `${this.color} ${super.toString()}`;
//   }
// }

// Object.getPrototypeOf(ColorPoint) === Point
// // true

// class A {}

// class B extends A {
//   constructor() {
//     super();
//   }
// }

// class Parent {
//   static myMethod(msg) {
//     console.log('static', msg);
//   }

//   myMethod(msg) {
//     console.log('instance', msg);
//   }
// }

// class Child extends Parent {
//   static myMethod(msg) {
//     super.myMethod(msg);
//   }

//   myMethod(msg) {
//     super.myMethod(msg);
//   }
// }

// Child.myMethod(1); // static 1

// var child = new Child();
// child.myMethod(2); // instance 2

// fetch(url, {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json"
//   },
//   credentials: "same-origin"
// }).then(response => {
//   response.status     //=> number 100–599
//   response.statusText //=> String
//   response.headers    //=> Headers
//   response.url        //=> String
//   return response.text()
// }).catch(error => {
//   error.message //=> String
// })
