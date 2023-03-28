// Задание 4
/* 
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):

1. Сложение

2. Разность

3. Умножение

4. Деление

Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
 */


const sum = (a, b) => {
	return console.log(a + b);
}
const diff = (a, b) => {
	const maxNum = Math.max(a, b);
	const minNum = Math.min(a, b);
	return console.log(maxNum - minNum);
}
const mult = (a, b) => {
	return console.log(a * b);
}
const div = (a, b) => {
	return console.log(parseFloat(a / b));
}
function calculate(num1, num2, operation) {
	switch (operation) {
		case '+':
			sum(num1, num2);
			break;
		case '-':
			diff(num1, num2);
			break;
		case '*':
			mult(num1, num2);
			break;
		case '/':
			div(num1, num2);
			break;
		default:
			console.log('Oops');
			break;
	}
}
const a = +prompt('input number A');
const b = +prompt('input number B');
const userOperation = String(prompt('Choose one operation for your numbers: / * + - '));

calculate(a, b, userOperation);
alert('Result in console!');



