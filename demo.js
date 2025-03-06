// thử khai báo ra một cái mảng trong js
let student = ["ngô trung chiến", "lê thùy trang"];
console.log(student);

// let randomArr = [1, "ngô trung chiến", true, false, []];
// console.log(randomArr);

// //muốn lấy một phần tử ra ngoaì
// student[0];
// console.log("mời em lên bảng" + student[0]);

// // lấy ra bằng vòng lặp for
// for (let i = 0; i < student.length; i++) {
//   console.log(student[i]);
// }

// //duyệt ngược từ cuối mảng
// for (let i = student.length - 1; i >= 0; i--) {
//   console.log(student[i]);
// }

for (let student of students) {
  console.log(student);
}
