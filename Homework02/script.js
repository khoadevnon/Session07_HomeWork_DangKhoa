/* Viết chương trình yêu cầu người dùng nhập vào một số bất kỳ. 
Tiến hành kiểm tra số nhập vào và in ra theo 3 trường hợp: số chẵn, số lẻ và không hợp lệ.
 */
let number = prompt("Nhập vào một số bất kỳ");
if (isNaN(number)) {
  alert("Giá trị không hợp lệ");
} else {
  if (number % 2 === 0) {
    alert(number + " là số chẵn");
  } else {
    alert(number + " là số lẻ");
  }
}
