//Bài 1: Tạo object car và in ra năm sản xuất
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

console.log("Year of car: " + car.year);

/*  Bài 2:  Tạo một object person có thuộc tính :
- name, address (là một object lồng với các thuộc tính street, city, country). 
- In ra tên đường của người này. */
const person = {
    name: "Ngoc My",
    address: {
        street: "Yen Hoa",
        city: "Ha Noi",
        country: "Viet Nam"
    }
};

console.log("Street: " + person.address.street);

/* BÀI 3 : Truy cập điểm toán bằng ngoặc vuông */

const student = {
    name: "My",
    grades: {
        math: 9,
        english: 10
    }
};

console.log("Math grade: " + student["grades"]["math"]);
console.log("English grade: " + student["grades"]["english"]);

// BÀI 4 Thay đổi volume trong object settings
const settings = {
    volume: 50,
    brightness: 70,
};
// Thay đổi volume
settings.volume = 80;
console.log("New settings:" + settings.volume);

/*  BÀI 5: Thêm thuộc tính color vào object bike */
const bike = {
    brand: "Giant",
    price: 500
};
// Thêm thuộc tính mới
bike.color = "Red";
console.log("Bike:" + bike.color);

/* BÀI 6: Xóa thuộc tính age khỏi object employee */

const employee = {
    name: "John",
    age: 30
};

// Xóa thuộc tính age
delete employee.age;

console.log("Employee:" + employee.age);
/* 
7. Một trường học có các lớp học và học sinh như sau:
○ classA: An, Bình, Châu
○ classB: Đào, Hương, Giang
Hãy viết code để đáp ứng yêu cầu sau:
- Khai báo tên biến: school
- Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
tên các học sinh */

const school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"]
};

console.log("School:" + school.classA);
console.log("School:" + school.classB);