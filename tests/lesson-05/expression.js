
// Khai báo hàm có tham số name. Trả về chuỗi Hello <name>



// Function Declaration (khai báo hàm)
const chuoi = function (name) {
    return `helolo ${name}`;
}
console.log(chuoi('myttn'))

// VÍ DU 
// Khai báo hàm có tham số price, quantity, discount. Trả về giá trị, biết giá trị = price * quantity - discount
const sum = function (price, quantity, discount) {
    return price * quantity - discount;
}
const finalValue = calculateTotal(100, 5, 20);
console.log(finalValue);


// -------------ví du

function add(a, b) {
    return a + b;
}

// Function Expression (biểu thức hàm)
const add = function (a, b) {
    return a + b;
};

// So sánh cách gọi
console.log(add(2, 3)); // 5 - cả hai đều giống nhau
