// catch the element :
let btns = document.querySelectorAll(".btn");
const display = document.getElementById("display");
const calculate = document.getElementById("equal");
const clear = document.querySelector(".Ac");

// add event on number buttons ann operators :
btns.forEach((ele) => {
  ele.addEventListener("click", () => {
    display.value += ele.innerText;
  });
});

console.log("btn", btns);

// add event on equal button  to ealuate the expression :
calculate.addEventListener("click", () => {
  display.value = eval(display.value);
});

// add event on clear button to clear the display :
clear.addEventListener("click", () => {
  display.value = "";
});

// //catch the elements :
// let display = document.querySelector("#display");
// let button = document.querySelectorAll("#button > .but");
// let equal = document.getElementById("equal");
// let ope = document.querySelectorAll(".operator");
// let ac = document.querySelector(".Ac");
// let btn = document.querySelectorAll(".but");

// //add event to operators button
// let bag3 = "";
// for (let i = 0; i < ope.length; i++) {
//   ope[i].addEventListener("click", function () {
//     bag3 = ope[i].innerText;
//     is = false;
//     //console.log(bag3)
//   });
// }

// //add event on number buttons
// let bag1 = "";
// let bag2 = "";
// let is = true;
// button.forEach((e) => {
//   e.addEventListener("click", function () {
//     if (is == true) {
//       bag1 += e.innerText;
//       //console.log(e.innerText)
//       display.value = bag1;
//     }
//     if (is == false) {
//       bag2 += e.innerText;
//       //console.log(e.innerText)
//       display.value = bag2;
//     }
//   });
// });

// //add event on All Clear button
// ac.addEventListener("click", function () {
//   display.value = "";
//   bag1 = "";
//   bag2 = "";
//   bag3 = "";
// });

// //add event on equal button
// let ans = 0;
// equal.addEventListener("click", function () {
//   switch (bag3) {
//     case "+":
//       ans = Number(bag1) + Number(bag2);
//       break;
//     case "-":
//       ans = Number(bag1) - Number(bag2);
//       break;
//     case "x":
//       ans = Number(bag1) * Number(bag2);
//       break;
//     case "/":
//       ans = Number(bag1) / Number(bag2);
//       break;
//   }
//   display.value = ans;
//   bag1 = "";
//   bag2 = "";
//   bag3 = "";
//   is = true;
// });