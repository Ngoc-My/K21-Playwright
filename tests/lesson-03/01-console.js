// let myName ="My";
// console.log(`Toi là ${myName}`);
// console.log('toi la' + myName);

const myInfo = {
    name: "Phong",
    favoriteNumber: 25,
    address: "Ha Noi",
    isLoveClass:{
        name :"k21",
        level: '1'
    }

}
// console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo.isLoveClass.name);
console.log(myInfo["name"]);
console.log(myInfo["isLoveClass"]["name"]);
// array
const arr =[3,7,9,21,54];
console.log(arr[3]);
console.log(arr.length);
// Ham
// const dai = 5;
// const rong = 10;
// const dienTich = dai * dai;
// console.log(`DIEN TICH (${dai})`)
function tinhDienTich(dai, rong) {
    const dienTich = dai * rong;
    // console.log(`Dien tich hinh chu nhat (${dai}x${rong}) = ${dienTich}`);
    return dienTich;
}

console.log(tinhDienTich(5, 10));
console.log(tinhDienTich(20, 5));
//  a%2 ===0 => chẳn
//  a%2 !=== 0 => lẻ
function kiemTraChanLe(number) {
    if (number%2 === 0) {
        return "chan";
    }

    if (number%2 !== 0) {
        return "le";
    }
}

console.log(kiemTraChanLe(10));
console.log(kiemTraChanLe(11));
console.log(kiemTraChanLe(12));

// 
function xinChaoBaLan() {
    console.log("Xin chao");
    console.log("Xin chao");
    console.log("Xin chao");
}

xinChaoBaLan();
xinChaoBaLan();
// 
arr1 = [24, 11, 26, 39];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}