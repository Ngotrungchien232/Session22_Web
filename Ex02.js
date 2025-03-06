// bước 1: khai báo mảng với các giá trị ban đầu
let arr = [1, 2, 3, 4, 5, 6];

// bước 2: cho người dùng nhập vào một số bất kì
let num = +prompt("Nhập vào một số bất kì: ");

// bước 3: sử dụng vòng lặp for và câu lệnh if else để kiểm tra xem phần tử người dùng nhập vào tồn tại trong mảng hay không
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    console.log("Bingo");
    break;
  }
}
if (arr.indexOf(num) === -1) {
  console.log("Chúc bạn may mắn lần sau");
}
