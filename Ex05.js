// Khai báo mảng số nguyên gồm 5 phần tử ngẫu nhiên
let mangSoNguyen = [23, 11, 46, 85, 32];

// Hiển thị mảng số nguyên
console.log("Mảng số nguyên:");
console.log(mangSoNguyen);

// Tính tổng các số lẻ
let tongSoLe = 0;
for (let i = 0; i < mangSoNguyen.length; i++) {
  if (mangSoNguyen[i] % 2 !== 0) {
    tongSoLe += mangSoNguyen[i];
  }
}

// Hiển thị tổng các số lẻ
console.log("Tổng các số lẻ:");
console.log(tongSoLe);

// Tính tổng các số chẵn
let tongSoChan = 0;
for (let i = 0; i < mangSoNguyen.length; i++) {
  if (mangSoNguyen[i] % 2 === 0) {
    tongSoChan += mangSoNguyen[i];
  }
}

// Hiển thị tổng các số chẵn
console.log("Tổng các số chẵn:");
console.log(tongSoChan);
