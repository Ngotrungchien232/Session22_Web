// thực hiện khai báo mảng với giá trị gốc, thực hiện các cách để có thể thêm mới phần tử vào trong mảng

// bước 1: khai báo một mảng rỗng
let arr = [];

// bước 2: thực hiện thêm các phần tử vào trong mảng
// push thêm một hoặc nhiều phần tử vào cuối mảng
arr.push(1);
arr.push(2);
arr.push(3);

// bước 3: thực hiện thêm các phần tử vào trong mảng bằng cách sử dụng hàm splice()
// splice () thêm một hoặc nhiều phần tử vào mảng tại vị trí đã chỉ định
arr.splice(2, 0, 4);

//cách thêm phần tử vào đầu mảng
//sử dụng hàm unshift()
arr.unshift(5);

// hiển thị ra mảng sau khi thêm
console.log(arr);
