### Phạm vi của biến
**Phạm vi**
Phạm vi (scope) xác định nơi mà biến có thể truy cập\
JavaScript có ba loại phạm vi:\

**1. Block scope (khối): biến được khai báo trong cặp ngoặc nhọn**
-  var: không bị giới hạn bởi cặp ngoặc nhọn
-  let/const: bị giới hạn bởi cặp ngoặc nhọn. Ra ngoài bị undefined\
if (true) {\
var varVariable = "var không có block scope";\
let letVariable = "let có block scope";\
const constVariable = "const cũng có block scope";\
}

console.log(varVariable); // OK - var không bị giới hạn bởi block
console.log(letVariable); // Error: letVariable is not defined
console.log(constVariable); // Error: constVariable is not defined

**2. Function scope (hàm): biến được khai báo trong một hàm**
- Cả let/var/const ra ngoài hàm đều bị undefined\
- Cả let/var/const ra ngoài hàm đều bị undefined

function myFunction() {\
var functionScoped = "Chỉ có thể truy cập trong hàm này";\
let alsoFunctionScoped = "Tương tự";\

console.log(functionScoped); // OK\
}

console.log(functionScoped); // Error: functionScoped is not defined

**3. Toàn cục (global)**
const globalMytt = "Tôi tên là my";
function testFunction() {
    console.log(globalMytt);
}
testFunction();

***ví dụ***
function myFunction() {
    var functionScoped = "Chỉ có thể truy cập trong hàm này";
    let alsoFunctionScoped = "Tương tự";

    console.log(functionScoped); // OK
}
myFunction();

**Break và continue**

*** break dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức.***
****// Thoát khi tìm thấy giá trị****
for (let i = 0; i < 10; i++) {
if (i === 5) {
break; // Thoát vòng lặp khi i = 5
}
console.log(i);
}
// Output: 0, 1, 2, 3, 4

***// Ví dụ thực tế: Tìm phần tử đầu tiên***
const numbers = [1, 3, 8, 7, 9, 11];
let firstEven = null;

for (let num of numbers) {
if (num % 2 === 0) {
firstEven = num;
break; // Dừng ngay khi tìm thấy
}
}

**continue**
- continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại và
chuyển sang lần lặp tiếp theo
// Bỏ qua số chẵn
for (let i = 0; i < 10; i++) {
if (i % 2 === 0) {
continue; // Bỏ qua số chẵn
}
console.log(i);
}
// Output: 1, 3, 5, 7, 9

// Ví dụ thực tế: Lọc dữ liệu
const scores = [85, 92, 78, 95, 60, 88];
console.log("Điểm >= 80:");
for (let i = 0; i < scores.length; i++) {
const score = scores[i];
if (score < 80) {
continue; // Bỏ qua điểm < 80
}
console.log(score);
}
// Output: 85, 92, 95, 88

### Câu điều kiện nâng cao
- Câu điều kiện if...else: Thực thi code khác nhau cho trường hợp true và
false ***
- Cấu trúc 
if (điều_kiện) {
    // code chạy khi điều kiện ĐÚNG (true)
} else {
    // code chạy khi điều kiện SAI (false)
}
- Example
const scope = 75;
if (scope > 60){
    console.log("Bạn đã qua môn")
} else {
    consloe.log("Bạn cần học lại")
}
***Câu điều kiện if...else...if: Kiểm tra nhiều điều kiện theo thứ tự***
if (điều_kiện_1) {
    // Chạy khi điều kiện 1 đúng
} else if (điều_kiện_2) {
    // Chạy khi điều kiện 2 đúng
} else if (điều_kiện_3) {
    // Chạy khi điều kiện 3 đúng
} else {
    // Chạy khi tất cả điều kiện trên đều sai
}
***VÍ DỤ***
const scope = 75;
if (scope >= 70){
    console.log("Bạn đạt loại giởi")
} else if (scope >= 60){
    console.log("Loại khá")
} else {
    consloe.log("Bạn cần học lại")
}

## Utils function - String
**Tổng quan các loại thao tác:**
- Bỏ khoảng trắng
- Chuyển đổi chữ hoa → chữ thường và ngược lại
- Kiểm tra chuỗi có bao gồm chuỗi con không
- Tách chuỗi thành các phần
- Thay thế ký tự trong chuỗi
-  Dùng hàm trim trim(): bỏ khoảng trắng 2 đầu
let text = " Hello World ";

// trim() - bỏ khoảng trắng 2 đầu
console.log(text.trim());
// "Hello World"

// trimStart() - bỏ khoảng trắng bên trái
console.log(text.trimStart());
// "Hello World "

// trimEnd() - bỏ khoảng trắng bên phải
console.log(text.trimEnd());
// " Hello World"
- Chuyển đổi HOA →THƯỜNG
let str = "JavaScript";

str.toUpperCase(); // "JAVASCRIPT";
str.toLowerCase(); // "javascript";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
- Kiểm tra chuỗi có bao gồm chuỗi con không - Dùng hàm includes
let text = "Hello World";
// Kiểm tra chuỗi có chứa chuỗi con không
console.log(text.includes("World"));
// true
console.log(text.includes("JavaScript"));
// false

// Phân biệt hoa thường
console.log(text.includes("world"));
// false

console.log(text.includes("Hello"));
// true
- Cắt chuỗi - Dùng hàm split
let text = "Hello World JavaScript";
// Cắt chuỗi theo khoảng trắng
console.log(text.split(" "));
// ["Hello", "World", "JavaScript"]

// ------
let email = "user@gmail.com";

email.split("@");
// ["user", "gmail.com"]

let date = "2024-01-25";
date.split("-");
// ["2024", "01", "25"]

- Thay thế chuỗi con - bằng chuỗi con khác - Dùng hàm replace
let text = "Hello World";

// Thay thế chuỗi con
console.log(text.replace("World","JavaScript"))
;
// "Hello JavaScript"

***Thêm các String utils***
https://developer.mozilla.
org/en-US/docs/Web/Jav
aScript/Reference/Global_
Objects/String

## Utils function - Array
**Tổng quan các loại thao tác với mảng**
● Thêm phần tử vào mảng (push, unshift, splice)
● Xóa phần tử khỏi mảng (pop, shift, splice)
● Tìm kiếm (find, filter)
● Biến đổi mảng (map)
● Sắp xếp mảng (sort)
- Thêm phần tử vào mảng
let arr = [1, 2, 3];
// Thêm vào cuối - push()
arr.push(4);
console.log(arr);
// [1, 2, 3, 4]
// Thêm vào đầu - unshift()
arr.unshift(0);
console.log(arr);
// [0, 1, 2, 3, 4]
// Thêm vào giữa - splice(vị trí, 0, phần tử)
arr.splice(2, 0, 1.5);
console.log(arr);
// [0, 1, 1.5, 2, 3, 4]

- Xóa phần tử khỏi mảng
let arr = [1, 2, 3, 4, 5];
// Xóa phần tử cuối - pop()
arr.pop();
console.log(arr);
// [1, 2, 3, 4]
// Xóa phần tử đầu - shift()
arr.shift();
console.log(arr);
// [2, 3, 4]
// Xóa phần tử ở vị trí bất kỳ - splice(vị trí,
số lượng)
arr.splice(1, 1);
// Xóa 1 phần tử tại vị trí index 1
console.log(arr);

- Tìm kiếm phần tử
const numbers = [5, 12, 8, 130, 44];
// find() - Trả về phần tử đầu tiên > 10
let first = numbers.find(num => num > 10);
console.log(first);
// 12
// filter() - Trả về tất cả phần tử > 10
let all = numbers.filter(num => num > 10);
console.log(all);
// [12, 130, 44]

- Biến đổi mảng
let numbers = [1, 2, 3, 4, 5];

// Nhân mỗi phần tử với 2
let doubled = numbers.map(num => num * 2);
console.log(doubled);
// [2, 4, 6, 8, 10]

- Sắp xếp mảng
let numbers = [40, 100, 1, 5, 25, 10];

// Sắp xếp tăng dần
numbers.sort((a, b) => a - b);
console.log(numbers);
// [1, 5, 10, 25, 40, 100]

// Sắp xếp giảm dần
numbers.sort((a, b) => b - a);
console.log(numbers);
// [100, 40, 25, 10, 5, 1]
Thêm các Array utils
function:
https://developer.mozilla.
org/en-US/docs/Web/Jav
aScript/Reference/Global_
Objects/Array