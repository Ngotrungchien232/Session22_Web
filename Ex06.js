// Khai báo mảng số nguyên gồm 10 phần tử có sẵn
let mangSoNguyen = [1, 2, 3, 4, 5, 2, 3, 1, 4, 2];

// Hiển thị mảng số nguyên
console.log("Mảng số nguyên:");
console.log(mangSoNguyen);

// Nhập vào một số nguyên bất kì
let soNguyenNhap = parseInt(prompt("Nhập vào một số nguyên bất kì: "));

// Đếm số lần xuất hiện của số nguyên đó trong mảng
let dem = 0;
for (let i = 0; i < mangSoNguyen.length; i++) {
  if (mangSoNguyen[i] === soNguyenNhap) {
    dem++;
  }
}

// Hiển thị kết quả
console.log(
  "Số lần xuất hiện của số nguyên " + soNguyenNhap + " trong mảng là: " + dem
);
