//  Khai báo các biến với các kiểu dữ liệu khác nhau
let myNumber = 20; // Number
let myString = "Hello, JavaScript!"; // String
let myBoolean = true; // Boolean
let myArray = [1, 2, 3, 4, 5]; // Array
let myObject = { name: "Alice", age: 25 }; // Object

console.log("Number:", myNumber);
console.log("String:", myString);
console.log("Boolean:", myBoolean);
console.log("Array:", myArray);
console.log("Object:", myObject);

// Toán tử số học: tổng, hiệu, tích, thương
function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num2 !== 0 ? (num1 / num2).toFixed(2) : "Không thể chia cho 0";

    document.getElementById("result").innerText = 
        `Tổng: ${sum} | Hiệu: ${difference} | Tích: ${product} | Thương: ${quotient}`;
}

//  Hàm nhận vào hai số và trả về tổng của chúng
function addTwoNumbers(a, b) {
    return a + b;
}

//  Kiểm tra số chẵn
function checkEven() {
    let num1 = Number(document.getElementById("num1").value);
    let result = (num1 % 2 === 0) ? `${num1} là số chẵn ✅` : `${num1} không phải số chẵn ❌`;
    document.getElementById("result").innerText = result;
}

//  Kiểm tra số có lớn hơn 10 hay không (if-else)
function checkGreaterThanTen() {
    let num1 = Number(document.getElementById("num1").value);
    if (num1 > 10) {
        document.getElementById("result").innerText = `${num1} lớn hơn 10 ✅`;
    } else {
        document.getElementById("result").innerText = `${num1} không lớn hơn 10 ❌`;
    }
}

//  Hiển thị ngày trong tuần bằng switch-case
function getDayOfWeek() {
    let dayNumber = Number(prompt("Nhập số từ 1 đến 7 để lấy ngày trong tuần:"));
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Chủ Nhật";
            break;
        case 2:
            dayName = "Thứ Hai";
            break;
        case 3:
            dayName = "Thứ Ba";
            break;
        case 4:
            dayName = "Thứ Tư";
            break;
        case 5:
            dayName = "Thứ Năm";
            break;
        case 6:
            dayName = "Thứ Sáu";
            break;
        case 7:
            dayName = "Thứ Bảy";
            break;
        default:
            dayName = "Số không hợp lệ! Vui lòng nhập từ 1 đến 7.";
    }

    document.getElementById("result").innerText = `Ngày tương ứng: ${dayName}`;
}
