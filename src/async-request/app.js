// Promise - 基本语法与实现
// const promise = new Promise(function (resolve, reject) {
//   const img = document.createElement("img");
//   img.onload = function () {
//     resolve(img);
//   };
//   img.onerror = function () {
//     reject("图片加载失败");
//   };  img.src="https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top-e3b63a0b1b.png";
// });
// promise
//   .then(
//     function (img) {
//       console.log("width:" + img.width);
//       return img;
//     },
//     function () {
//       console.log("error 1");
//     }
//   )
//   .then(function (img) {
//     console.log("height:" + img.height);
//   });

// Promise - 异常捕获
// function loadImg(src) {
//   const promise = new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.onload = function () {
//       resolve(img);
//     };
//     img.onerror = function () {
//       reject("图片加载失败");
//     };
//     img.src = src;
//   });
//   return promise;
// }

// const src =
//   "https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top-e3b63a0b1b.png";
// const result = loadImg(src);
// result
//   .then(
//     function (img) {
//       console.log(1, img.width);
//       // return img
//     },
//     function () {
//       console.log("error 1");
//     }
//   )
//   .then(function (img) {
//     console.log(2, img.height);
//   });

// const src =
//   "https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top-e3b63a0b1b.png";
// const result = loadImg(src);
// result
//   .then(function (img) {
//     console.log(1, img.width);
//     return img;
//   })
//   .then(function (img) {
//     console.log(2, img.height);
//   })
//   .catch(function (ex) {
//     // 统一捕获异常
//     console.log(ex);
//   });

// Promise - 多个链式串联
// function loadImg(src) {
//   const promise = new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.onload = function () {
//       resolve(img);
//     };
//     img.onerror = function () {
//       reject("图片加载失败");
//     };
//     img.src = src;
//   });
//   return promise;
// }
// const src1 =
//   "https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top-e3b63a0b1b.png";
// const result1 = loadImg(src1);
// const src2 =
//   "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
// const result2 = loadImg(src2);
// result1
//   .then(function (img1) {
//     console.log("第一个图片加载完成", img1.width);
//     return result2;
//   })
//   .then(function (img2) {
//     console.log("第二个图片加载完成", img2.width);
//   })
//   .catch(function (ex) {
//     console.log(ex);
//   });

// Promise - Promise.all 和 Promise.race
// function loadImg(src) {
//   const promise = new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.onload = function () {
//       resolve(img);
//     };
//     img.onerror = function () {
//       reject("图片加载失败");
//     };
//     img.src = src;
//   });
//   return promise;
// }

// const src1 =  "https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top-e3b63a0b1b.png";
// const result1 = loadImg(src1);
// const src2 =  "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
// const result2 = loadImg(src2);

// Promise.all([result1, result2]).then(function (datas) {
//   console.log("all", datas[0].width);
//   console.log("all", datas[1].width);
// });
// Promise.race([result1, result2]).then(function (data) {
//   console.log("race", data.width);
// });

// async函数 - 基本语法与实现
// function loadImg(src) {
//   const promise = new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.onload = function () {
//       resolve(img);
//     };
//     img.onerror = function () {
//       reject("图片加载失败");
//     };
//     img.src = src;
//   });
//   return promise;
// }

// const src1 =
//   "https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top-e3b63a0b1b.png";
// const src2 =
//   "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";

// const load = async function () {
//   try {
//     console.log("sync inside");
//     // const pre = Date.now()
//     const result1 = await loadImg(src1);
//     console.log(result1);
//     const result2 = await loadImg(src2);
//     console.log(result2);
//     // console.log(Date.now() - pre)
//   } catch (err) {
//     console.log(err);
//   }
// };
// load();
// console.log("sync");

// 并发加载
// const load = async function () {
//   try {
//     const pre = Date.now();
//     const res = await Promise.all([loadImg(src1), loadImg(src2)]);
//     console.log(res);
//     console.log(Date.now() - pre);
//   } catch (err) {
//     console.log(err);
//   }
// };

// load();

// 循环中的问题
// const src1 =
//   "https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top-e3b63a0b1b.png";
// const src2 =
//   "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
// const arr = [src1, src2];
// let results = [];
// arr.forEach(async (src) => {
//   const result = await loadImg(src);
//   results.push(result);
// });
// console.log(results);

// let results = [];
// async function call() {
//   for (src of arr) {
//     const result = await loadImg(src);
//     results.push(result);
//   }
//   console.log(results);
// }
// call();

// const promises = arr.map((src) => loadImg(src));
// Promise.all(promises).then((res) => console.log(res));

// Ajax与XHR - 基本语法与实现
// const xhr = new XMLHttpRequest();
// //异步接受响应
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4) {
//     if (xhr.status == 200) {
//       //实际操作
//       console.log("responseText: " + xhr.responseText);
//     }
//   }
// };
// //发送请求
// xhr.open("get", "http://localhost:1234", true);
// xhr.send();

// Fetch Api - 基本语法与实现
// fetch('http://localhost:1234', {
//   method: "GET",
//   headers: {
//     "accept": "text/html"
//   },
//   credentials: "same-origin"
// }).then(response => {
//   console.log(response.status)
//   console.log(response.statusText)
//   console.log(response.headers)
//   console.log(response.url)
//   return response.text()
// }).then(text => console.log(text))
//   .catch(err => console.log(err))
