
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JavascriptInput.txt";
// /* ex)
// 110 78 158
// */
// const input1 = fs.readFileSync(filePath).toString().trim().split(" ");
// console.log('input1: ', input1);
// /* ex)
// 110
// 78
// 158
// */
// const input2 = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log('input2: ', input2);
// /* ex)
// 3
// 110 78 158
// */
// const [n3, input3] = fs.readFileSync(filePath).toString().trim().split("\n");
// const input3Arr = input3.trim().split(" ")
// console.log('n3: ', n3);
// console.log('input3: ', input3);
// console.log('input3Arr: ', input3Arr);
/* ex)
3
110
78
158
*/
const [n4, input4] = fs.readFileSync(filePath).toString().trim().split("\n");
console.log('n4: ', n4);
console.log('input4: ', input4);