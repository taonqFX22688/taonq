const arra = [1, 2, 3, 4];

const a = arra.map((x) => x + 1);

// console.log(a);
console.log(arra);
console.log(arra.map((x) => x + 1));

const b = arra.push(5);
console.log(arra);
console.log(b);
console.log(arra.unshift("dsas"));
console.log(arra);
// const test = localStorage.getItem("araay");

// console.log(typeof test);
// console.log(JSON.parse(test));

// const test2 = JSON.parse(localStorage.getItem("araay")) || [];

let button = document.getElementById("button");
let exam = document.getElementById("exam");

// function show() {
//   let newEle = document.createElement("span");
//   exam.append(newEle);
//   newEle.textContent = " Hello ";
// }
// button.onclick = () => {
//   let newEle = document.createElement("span");
//   exam.append(newEle);
//   newEle.textContent = " Hello ";
// };
