/* [Bài tập] Sắp xếp theo thứ tự
1. Mục tiêu
Luyện tập sử dụng câu lệnh điều kiện.
2. Mô tả
Viết chương trình yêu cầu người dùng nhập vào 3 số a, b và c. Tiến hành in 3 số ra màn hình console theo thứ tự tăng dần
 */
let a = Number(prompt("Nhập số a"));
let b = Number(prompt("Nhập số b"));
let c = Number(prompt("Nhập số c"));
if (a > b) {
  let temp = a;
  a = b;
  b = temp;
}
if (a > c) {
  let temp = a;
  a = c;
  c = temp;
}
if (b > c) {
  let temp = b;
  b = c;
  c = temp;
}
console.log(a, b, c);
alert(a + " " + b + " " + c);
