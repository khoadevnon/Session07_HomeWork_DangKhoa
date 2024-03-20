/*
Phân biệt câu lệnh if/else và switch/case bằng comment trong code và đưa ra ví dụ cụ thể với cả 2 loại câu lệnh điều kiện.
 */
// if/else
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
// switch/case
let x = Number(prompt("Nhập số x"));
let y = Number(prompt("Nhập số y"));
let z = Number(prompt("Nhập số z"));
switch (true) {
  case x > y && x > z:
    console.log(x);
    break;
  case y > x && y > z:
    console.log(y);
    break;
  case z > x && z > y:
    console.log(z);
    break;
  default:
    console.log("Không có số lớn nhất");
}
alert("Số lớn nhất là " + Math.max(x, y, z));
// Câu lệnh if/else thường được sử dụng khi có nhiều điều kiện cần kiểm tra, còn switch/case thường được sử dụng khi có nhiều trường hợp cần xử lý.
// Cả hai đều có thể thực hiện được cùng một công việc, nhưng mỗi loại có những ưu điểm riêng.
// Câu lệnh if/else có thể kiểm tra mọi điều kiện, còn switch/case chỉ kiểm tra giá trị của biến.

// Để kiểm tra điều kiện nào tốt hơn, cần xem xét từng trường hợp cụ thể.
// Nếu có nhiều điều kiện cần kiểm tra, câu lệnh if/else có thể phù hợp hơn.
// Nếu có nhiều trường hợp cần xử lý, switch/case có thể phù hợp hơn.
// Nếu có ít điều kiện cần kiểm tra, cả hai loại đều có thể sử dụng được.
// Nếu có ít trường hợp cần xử lý, cả hai loại đều có thể sử dụng được.

// Nếu không chắc chắn nên sử dụng loại nào, có thể sử dụng câu lệnh if/else, vì nó có thể kiểm tra mọi điều kiện.
