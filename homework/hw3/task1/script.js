// Задание 1
/* 
Создайте функцию которая возводит переданное число в куб,
 необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
 */

function sumOfDegreeNums(num1, num2, degree) {
	return degreeNum(num1, degree) + degreeNum(num2, degree);
}
const degreeNum = (num, degree) => {
	return Math.pow(num, degree);
}
const a = 2;
const b = 3;
const degree = 3;
console.log(sumOfDegreeNums(a, b, degree));