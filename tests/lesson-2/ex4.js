/* Các thông số sức khỏe được tính như sau:
Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10
Như vậy, nếu bạn cao 1,7m, tức 170cm thì :
Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg
Cân nặng tối đa là: 70kg
Cân nặng tối thiểu là: 70 x 8 :10 = 56 kg
Phạm vi áp dụng: Công thức áp dụng cho chiều cao > 100 */
/* Tạo file ex4.js, thêm vào code đáp án cho đề bài sau: 
a. Khai báo chiều cao của bạn (cm) 
b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng.  */
const HieghtCm = 170;
// Điều kiện áp dụng
if (HieghtCm <= 100) {
    console.log("Điều kiện áp dụng không hợp lệ")


}

const oddHeight = HieghtCm % 100;
const idealWeight = (oddHeight * 9) / 10;
const maxWeight = oddHeight;
const minWeight = (oddHeight * 8) / 10;
//In ra cân nặng lý tưởng
console.log(`Cân nặng lý tưởng: ${idealWeight} kg`);
// cân nặng tối đa,
console.log(`Cân nặng tối đa: ${maxWeight} kg`);
//  cân nặng tối thiểu trên cùng một dòng.
console.log(`Cân nặng tối thiểu: ${minWeight} kg`);
console.log(oddHeight);
console.log(idealWeight);

