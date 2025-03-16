// ========== HỖ TRỢ NHẬP LIỆU ==========
function getValidNumberInput(message) {
    let input;
    while (true) {
        input = prompt(message);
        if (input === null) return null;
        input = Number(input);
        if (isNaN(input) || input < 0) {
            alert(" Vui lòng nhập số hợp lệ!");
        } else {
            return input;
        }
    }
}

function getValidArray() {
    let input;
    while (true) {
        input = prompt("Nhập mảng số, cách nhau bằng dấu phẩy:");
        if (input === null) return null;
        let array = input.split(",").map(num => Number(num.trim()));
        if (array.some(isNaN)) {
            alert("❌ Vui lòng nhập số hợp lệ!");
        } else {
            return array;
        }
    }
}

function showResult(message) {
    document.getElementById("result").innerText = message;
}

// ========== 1. HÀM (Function) ==========
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

function testFactorial() {
    let n = getValidNumberInput("Nhập số n:");
    if (n === null) return;
    showResult(` ${n}! = ${factorial(n)}`);
}

// Fibonacci với memoization
const fibCache = {};
function fibonacci(n) {
    if (n <= 1) return n;
    if (fibCache[n]) return fibCache[n];
    return fibCache[n] = fibonacci(n - 1) + fibonacci(n - 2);
}

function testFibonacci() {
    let n = getValidNumberInput("Nhập số n:");
    if (n === null) return;
    showResult(` Fibonacci(${n}) = ${fibonacci(n)}`);
}

// ========== 2. CHUỖI (String) ==========
function isPalindrome(str) {
    str = str.replace(/\s/g, "").toLowerCase(); 
    return str === str.split("").reverse().join("");
}

function testPalindrome() {
    let str = prompt("Nhập chuỗi:");
    if (str === null) return;
    showResult(`📝 Palindrome: ${isPalindrome(str) ? "Đúng" : " Sai"}`);
}

function mostFrequentChar(str) {
    let freq = {};
    str.replace(/\s/g, "").split("").forEach(char => freq[char] = (freq[char] || 0) + 1);
    return Object.entries(freq).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}

function testMostFrequentChar() {
    let str = prompt("Nhập chuỗi:");
    if (str === null) return;
    showResult(` Ký tự xuất hiện nhiều nhất: '${mostFrequentChar(str)}'`);
}

// ========== 3. ĐỐI TƯỢNG & LỚP ==========
class Person {
    constructor(name, age) { this.name = name; this.age = age; }
    getInfo() { return ` Tên: ${this.name}, Tuổi: ${this.age}`; }
}

function testPerson() {
    let name = prompt("Nhập tên:");
    if (name === null) return;
    let age = getValidNumberInput("Nhập tuổi:");
    if (age === null) return;
    let person = new Person(name, age);
    showResult(person.getInfo());
}

class Rectangle {
    constructor(w, h) { this.w = w; this.h = h; }
    area() { return this.w * this.h; }
    perimeter() { return 2 * (this.w + this.h); }
}

function testRectangle() {
    let w = getValidNumberInput("Nhập chiều rộng:");
    let h = getValidNumberInput("Nhập chiều dài:");
    if (w === null || h === null) return;
    let rect = new Rectangle(w, h);
    showResult(` Diện tích: ${rect.area()}, Chu vi: ${rect.perimeter()}`);
}

// ========== 4. VÒNG LẶP ==========
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
}

function testPrimeNumbers() {
    let n = getValidNumberInput("Nhập n:");
    if (n === null) return;
    showResult(` Số nguyên tố: ${Array.from({length: n}, (_, i) => i + 1).filter(isPrime).join(", ")}`);
}

function testSumMultiples() {
    let n = getValidNumberInput("Nhập n:");
    if (n === null) return;
    let sum = Array.from({length: n}, (_, i) => i + 1).filter(x => x % 3 === 0 || x % 5 === 0).reduce((a, b) => a + b, 0);
    showResult(` Tổng = ${sum}`);
}

// ========== 5. XỬ LÝ MẢNG ==========
function findSecondLargest(arr) {
    let [max, secondMax] = [-Infinity, -Infinity];
    arr.forEach(num => { if (num > max) [secondMax, max] = [max, num]; else if (num > secondMax && num < max) secondMax = num; });
    return secondMax;
}

function testSecondLargest() { showResult(` Số lớn thứ hai: ${findSecondLargest(getValidArray())}`); }

function testCountOccurrences() {
    let counts = getValidArray().reduce((map, num) => (map[num] = (map[num] || 0) + 1, map), {});
    showResult(Object.entries(counts).map(([num, count]) => `- ${num}: ${count} lần`).join("\n"));
}
