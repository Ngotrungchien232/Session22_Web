// Khai báo mảng số nguyên gồm 10 phần tử có sẵn
let mangSoNguyen = [5, 2, 8, 1, 9, 4, 7, 3, 6, 10];

// Hiển thị mảng số nguyên trước khi sắp xếp
console.log("Mảng số nguyên trước khi sắp xếp:");
console.log(mangSoNguyen);

// Sắp xếp các phần tử trong mảng theo thứ tự tăng dần
mangSoNguyen.sort((a, b) => a - b);

// Hiển thị mảng số nguyên sau khi sắp xếp
console.log("Mảng số nguyên sau khi sắp xếp:");
console.log(mangSoNguyen);
