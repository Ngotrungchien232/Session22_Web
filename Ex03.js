// cho người dùng nhập vào một mảng , sau đó tiến hành đảo ngược mảng người dùng vừa nhập vào

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

// bước 3: đảo ngược mảng người dùng vừa nhập vào
let arrReverse = arr.reverse();

// bước 4: in ra mảng đã đảo ngược
console.log(arrReverse);
