"use stricts";

// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không

// const a = prompt("Enter a");
// const b = prompt("Enter b");

// if (a % b === 0) alert("a is devisible by b");
// else alert("a is not devisible by b");

//-------------------------------------------------------------------------------------------------------

// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.

// const age = Number(prompt("Enter age"));
// if (age < 16) alert("You are not old enough to go to highschool");
// else alert("You are old enough to go to highschool");

//-------------------------------------------------------------------------------------------------------

// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0

// const number = Number(prompt("Enter a number"));
// if (number > 0) alert("The number is above zero");
// else alert("The number is below zero");

//-------------------------------------------------------------------------------------------------------

// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó

// const a = Number(prompt("Enter a"));
// const b = Number(prompt("Enter b"));
// const c = Number(prompt("Enter c"));

// alert("Max number: " + Math.max(a, b, c));

//-------------------------------------------------------------------------------------------------------

// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ

// const progressTest = Number(prompt("Input PT mark"));
// const midTermTest = Number(prompt("Input MTT mark"));
// const finalTest = Number(prompt("Input FT mark"));

// const overall = (progressTest + midTermTest * 2 + finalTest * 3) / 6;

// if (overall >= 9) alert("Excellent");
// else if (overall < 9 && overall >= 8) alert("Very good");
// else if (overall < 8 && overall >= 7) alert("Good");
// else if (overall < 7 && overall >= 6.5) alert("Average good");
// else if (overall < 6.5 && overall >= 5) alert("Average");
// else alert("Weak");

//-------------------------------------------------------------------------------------------------------

// Bài 6: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để a,b,c là cạnh của một tam giác là:
// a, b, c > 0
// a + b > c
// b + c > a
// a + c > b

// const a = Number(prompt("Enter a"));
// const b = Number(prompt("Enter b"));
// const c = Number(prompt("Enter c"));

// const isTriangle =
//   a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b;

// if (isTriangle) alert("a, b, c can form a triangle");
// else alert("a, b, c cannot form a triangle");

//-------------------------------------------------------------------------------------------------------

// Bài 7: Kiểm tra xem một số nhập vào có phải là tuổi của một người không. Một số nguyên là tuổi của một người khi nhỏ 120 và lớn hơn 0.

// const age = Number(prompt("Enter age"));
// if (age < 120 && age > 0) alert(`${age} is human age`);
// else alert(`${age} is not human age`);

//-------------------------------------------------------------------------------------------------------

// Bài 8: Tính diện tích hình vuông khi biết cạnh a.

// const a = Number(prompt("Enter a"));
// alert("Area of the square: " + a * a);

//-------------------------------------------------------------------------------------------------------

// Bài 9: Tính diện tích hình chữ nhật khi biết 02 cạnh a, b.

// const a = Number(prompt("Enter a"));
// const b = Number(prompt("Enter b"));
// alert("Area of the rectangle: " + a * b);

//-------------------------------------------------------------------------------------------------------

// Bài 10: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.

// const a = Number(prompt("Enter a"));
// const b = Number(prompt("Enter b"));
// alert("Area of the right triangle: " + 0.5 * a * b);

//-------------------------------------------------------------------------------------------------------

// Bài 11: Giải phương trình bậc 1.

// const a = Number(prompt("Enter a"));
// const b = Number(prompt("Enter b"));

// if (a === 0) {
//   if (b === 0) {
//     alert("Phương trình có vô số nghiệm");
//   } else {
//     alert("Phương trình vô nghiệm");
//   }
// } else {
//   alert("Nghiệm của phương trình là: x = " + -b / a);
// }

//-------------------------------------------------------------------------------------------------------

// Bài 12: Giải phương trình bậc 2.

// const a = Number(prompt("Enter a"));
// const b = Number(prompt("Enter b"));
// const c = Number(prompt("Enter c"));

// const delta = b * b - 4 * a * c;

// if (delta < 0) {
//   alert("Phương trình vô nghiệm");
// } else if (delta === 0) {
//   alert("Phương trình có nghiệm kép: x = " + -b / (2 * a));
// } else {
//   alert(
//     "Phương trình có hai nghiệm phân biệt: x1 = " +
//       (-b + Math.sqrt(delta)) / (2 * a) +
//       ", x2 = " +
//       (-b - Math.sqrt(delta)) / (2 * a)
//   );
// }

//-------------------------------------------------------------------------------------------------------

// Bài 13: Chuyển từ độ C sang độ F.

// const celciusTemp = Number(prompt("Enter celcius temparature"));
// alert("Fahrenheit: " + ((celciusTemp * 9) / 5 + 32) + " F degrees");

//-------------------------------------------------------------------------------------------------------

// Bài 14: Chuyển từ mét sang feet

// const meter = Number(prompt("Enter meter"));
// alert("Feet: " + meter * 3.28084 + " ft");

//-------------------------------------------------------------------------------------------------------

// Bài 15: Kiểu tra kiểu dữ lieu của 2 biến

// const checkDataType = function (data1, data2) {
//   alert("Data type 1: " + typeof data1 + ", Data type 2: " + typeof data2);
// };

// checkDataType(true, "String");

//-------------------------------------------------------------------------------------------------------
