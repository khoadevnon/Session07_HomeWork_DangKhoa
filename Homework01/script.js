/* Sử dụng cấu trúc if…else, viết chương trình yêu cầu người dùng nhập vào cầu trả lời cho câu hỏi “Bạn sinh năm bao nhiêu”. 
Nếu câu trả lời nhập vào là một số thì hiển thị số tuổi của người dùng, nếu không thì hiển thị giá trị không hợp lệ.
 */
let year = prompt("Bạn sinh năm bao nhiêu?");
if (isNaN(year)) {
  alert("Giá trị không hợp lệ");
} else {
  let age = 2024 - year;
  alert("Số tuổi của bạn là: " + age);
}
