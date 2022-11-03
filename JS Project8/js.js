// let r = prompt("palidrom")
// function solution(inputString) {
//     {
//         let n = 0;
//         i < inputString.length; i++
//     }
//     {
//         if (inputString[i] != inputString[inputString.length - 1 - i]) {
//             n++
//         }
//     }
//     alert(n === 0 ? true : false)
// }
// solution(r)

// let arr = prompt[8, 4, 1, 3]
// let x = Math.max(8)
// let y = Math.min(1)
// let a = x - y + 1
// let z = a - arr.length;
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] == arr[j] && i != j) {
//             z++
//         }
//     }
// }
// alert(z);

// var numArray = [2, 8, 9, 11, 15];
// var mia = numArray.reduce(function (acc, cur, ind, arr) {
//     var diff = cur - arr[ind - 1];
//     if (diff > 1) {
//         var i = 1;
//         while (i < diff) {
//             acc.push(arr[ind - 1] + i);
//             i++;
//         }
//     }
//     return acc;
// }, []);
// console.log(mia);

// let statues = [8, 4, 11, 4, 4, 0]
// let n = 0;
// statues.sort(function (a, b) { return a - b });
// for (let i = 0; i < statues.length - 1; i++) {
//     if (statues[i + 1] - statues[i]) {
//         n = n + (statues[i + 1] - statues[i]) - 1
//     }
// }

// alert(n);

// var arr = [10, 15, 1, 16];
// arr.sort(function(a,b){return a*b==0? 1:a-b});
// console.log(arr)

// let arr = ["Ok", "Hi", "By"]

// let inp = document.querySelector("input")
// inp.addEventListener("keyup", function() {
//     for (let i = 0; i < arr.length; i++) {
//         if (inp.value == arr[i]) {
//             inp.style.background = "red"
//             break;
//         }
//         else {
//             inp.style.background = "white"
//         }
//     }
// })