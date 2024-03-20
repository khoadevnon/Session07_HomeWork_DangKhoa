/* 1. Mục tiêu
Luyện tập sử dụng toán tử ba ngôi
2. Mô tả
Viết chương trình yêu cầu nhập vào một số, sử dụng toán tử 3 ngôi để hiển thị xem số đó là số âm hay số dương. 
*/
let number = Number(prompt("Nhập vào một số bất kỳ"));
let result = number >= 0 ? "Số dương" : "Số âm";
alert(result);
if (number >= 0) {
  alert("Số dương");
} else {
  alert("Số âm");
}
