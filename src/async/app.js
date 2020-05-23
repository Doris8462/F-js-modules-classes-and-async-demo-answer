// 同步与异步 不能jsbin
// console.log(100)
// alert('hello world')
// console.log(200)

// console.log(100)
// setTimeout(function () {
//   alert('hello world')
// }, 0)
// console.log(200)

// 理解同步与异步
// const doSync = (sth, time) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`${sth}用了${time}毫秒`);
//       resolve();
//     }, time);
//   });

// const doAsync = (sth, time, cb) => {
//   setTimeout(() => {
//     console.log(`${sth}用了${time}毫秒`);
//     cb && cb();
//   }, time);
// };

// const doElse = (sth) => console.log(sth);

// const B = { doSync, doAsync };
// const A = { doSync, doAsync, doElse };

// ;(async () => {
//   console.log("case 1: 小A来到卫生间，发现小B在刷牙");
//   console.log("小A开始等待");
//   await B.doSync("小B刷牙", 2000);
//   console.log("小A等待结束，开始洗澡");
//   await A.doSync("小A洗澡", 2000);
//   A.doElse("小A去忙别的了");

//   console.log("case 2: 小A来到卫生间，发现小B在刷牙");
//   B.doAsync("小B刷牙", 1000, () => {
//     console.log("卫生间通知小A来洗澡");
//     A.doAsync("小A洗澡", 2000);
//   });
//   A.doElse("小A去忙别的了");
// })();
