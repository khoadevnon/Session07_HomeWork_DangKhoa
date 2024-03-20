/* Viết chương trình yêu cầu người dùng nhập vào cân nặng(kg) và chiều cao(m);
Sau đó hiển thị kết quả phân loại theo chỉ số BMI: bmi = weight / ( height ^ 2 )
 */
let weight = Number(prompt("Nhập cân nặng(kg)"));
let height = Number(prompt("Nhập chiều cao(m)"));
let bmi = weight / (height * height);
if (bmi < 18.5) {
  alert("Cân nặng thấp (gầy)");
}
if (bmi >= 18.5 && bmi <= 24.9) {
  alert("Bình thường");
}
if (bmi >= 25 && bmi <= 29.9) {
  alert("Thừa cân");
}
if (bmi >= 30 && bmi <= 34.9) {
  alert("Tiền béo phì");
}
if (bmi >= 35 && bmi <= 39.9) {
  alert("Béo phì độ I");
}
if (bmi >= 40) {
  alert("Béo phì độ III");
}
if (isNaN(weight) || isNaN(height)) {
  alert("Giá trị không hợp lệ");
}
console.log("Chỉ số BMI của bạn là " + bmi);
alert("Chỉ số BMI của bạn là " + bmi);
