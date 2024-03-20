/* Viết chương trình cho phép người dùng nhập điểm các môn: toán, văn, anh. Tính điểm trung bình các môn học và hiển thị xếp loại theo điều kiện:
8.0  <= ĐTB <= 10: xếp loại GIỎI.
6.5 <= ĐTB <= 7.9: xếp loại KHÁ.
5.0 <= ĐTB <= 6.4: xếp loại TRUNG BÌNH.
ĐTB < 5.0: xếp loại YẾU.
 */
let math = Number(prompt("Nhập điểm môn toán"));
let literature = Number(prompt("Nhập điểm môn văn"));
let english = Number(prompt("Nhập điểm môn anh"));
let average = (math + literature + english) / 3;
if (average >= 8 && average <= 10) {
  alert("Xếp loại giỏi");
}
if (average >= 6.5 && average <= 7.9) {
  alert("Xếp loại khá");
}
if (average >= 5 && average <= 6.4) {
  alert("Xếp loại trung bình");
}
if (average < 5) {
  alert("Xếp loại yếu");
}
if (isNaN(math) || isNaN(literature) || isNaN(english)) {
  alert("Giá trị không hợp lệ");
}
