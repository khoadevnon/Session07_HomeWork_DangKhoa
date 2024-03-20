/* Viết chương trình yêu cầu nhập vào một số và hiển thị ngày trong tuần tương ứng với số vừa nhập. 
Khi người dùng nhập 2 thì hiển thị monday, 3 thì hiển thị tuesday,... 8 thì hiển thị sunday, bất kỳ giá trị nào khác thì hiển thị không hợp lệ.
*/
let number = Number(prompt("Nhập vào một số bất kỳ"));
switch (number) {
  case 2:
    alert("Monday");
    break;
  case 3:
    alert("Tuesday");
    break;
  case 4:
    alert("Wednesday");
    break;
  case 5:
    alert("Thursday");
    break;
  case 6:
    alert("Friday");
    break;
  case 7:
    alert("Saturday");
    break;
  case 8:
    alert("Sunday");
    break;
  default:
    alert("Không hợp lệ");
    break;
}
