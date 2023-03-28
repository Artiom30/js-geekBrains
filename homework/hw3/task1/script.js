// Задание 1
/* 
Создайте функцию которая возводит переданное число в куб,
 необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
 */

function sumOfDegreeNums(functionNum1, functionNum2) {
	return functionNum1 + functionNum2;
}
const degreeNum = (num, degree) => {
	return Math.pow(num, degree);
}
const a = 2;
const b = 3;
const degree = 3;
console.log(sumOfDegreeNums(degreeNum(a, degree), degreeNum(b, degree)));