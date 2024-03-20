/* Viết chương trình yêu cầu người dùng nhập vào 3 số a, b và c. 
Tiến hành kiểm tra xem số nào là lớn nhất. 
Sau đó in max và in ra màn hình console theo cú pháp “Số lớn nhất là - …”.
 */
let a = Number(prompt("Nhập số a"));
let b = Number(prompt("Nhập số b"));
let c = Number(prompt("Nhập số c"));
let max = a;
if (max < b) {
  max = b;
}
if (max < c) {
  max = c;
}
console.log("Số lớn nhất là " + max);
alert("Số lớn nhất là " + max);
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("Giá trị không hợp lệ");
}
