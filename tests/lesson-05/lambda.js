/* // Arrow function (Lambda)
const add = (a, b) => {
   return a + b;
};

// Cú pháp ngắn gọn nhất (implicit return)
const add = (a, b) => a + b;
console.log(add(2,3));
const add = () => console.log(‘add’) */

// bài tập 

// Khai báo hàm có tham số name. Trả về chuỗi Hello <name>

// chuồi : hàm
// name là tham số
const chuoi = (name) => {
    return `Hello ${name}`;

}
console.log(chuoi('myttn'));

// Khai báo hàm có tham số price, quantity, discount. Trả về giá trị, biết giá trị = price * quantity - discount

const sum = (price, quantity, discount) => {
    return price * quantity - discount;

}
console.log(sum(9, 3, 4))
// 

const sum1 = function (price, quantity, discount) {
    return price * quantity - discount;
}

const finalValue = sum1(100, 5, 20);
console.log(finalValue);
console.log(sum1(100, 5, 20))