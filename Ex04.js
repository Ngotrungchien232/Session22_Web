// cho người dùng nhập vào một mảng các chữ số, in ra số lớn nhất có thể được tạo ra từ các số đó

// cho người dùng nhập vào dãy số bất kì
// bước 1: cho người dùng nhập vào một mảng '
let arr = [];

// bước 2: cho người dùng nhập vào một dãy số vào trong mảng
while (true) {
  let input = prompt("Nhập vào một số (hoặc 'stop' để dừng nhập");
  if (input === "stop") {
    break;
  }
  arr.push(Number(input));
}

// sử dụng thuật toán để sắp xếp lại mảng
arr.sort((a, b) => b - a);
// bước 3: in ra số lớn nhất có thể được tạo ra từ các số đó
console.log(arr.join("")); // in ra số lớn nhất có thể được tạo ra từ các số
