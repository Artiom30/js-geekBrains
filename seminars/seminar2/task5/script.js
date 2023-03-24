// Задание 5
/*
1.Пользователь с клавиатуры вводит число, Необходимо создать условный оператор который

		a.Выводит в консоль “Число больше 5”
		b.Выводит в консоль “Число меньше 5”
		c.Выводит в консоль “Число равно 5”

2.Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.

3.Пользовать с клавиатуры вводит 2 числа
		a.Необходимо найти какое из двух чисел минимальное

4.Пользователь с клавиатуры вводит число, Проверьте, что данная переменная больше нуля и меньше 15.
 */


// 1
/*
let num = +prompt('Input your number please')
if (num > 5) {
	console.log(`${num} больше 5`);
} else if (num < 5) {
	console.log(`${num} меньше 5`);
} else if (num === 5) {
	console.log(`${num} равно 5`);
}
else {
	console.log(`Это не число`);
}
 */

// 2
/* 
const test1 = 2,
	test2 = 3;
if (test1 === test2) {
	console.log('Равны');
} else {
	console.log('Не равны');
};
// Либо просто
// console.log(test1 === test2);// false

 */
// 3
let num1 = +prompt('Input your first number please')
let num2 = +prompt('Input your second number please')

// Для сравнения числовых начений есть обьект Js Math с функцией min или max
// console.log(Math.min(num1, num2)); // Покажет меньшее число

// Решение через if else
/*
if (num1 > num2) {
	alert(`Number ${num1} > ${num2}`);
} else if (num1 < num2) {
	alert(`Number ${num1} < ${num2}`);
} else if (num1 === num2) {
	alert(`Both numbers are equal `);
} else {
	alert('Это не числa');
}
 */
// Решение через switch
// Уловие в switch славнивается строго.
/*
switch (true) {
	case num1 > num2:
		alert(`Number ${num1} > ${num2}`);
		break;
	case num1 < num2:
		alert(`Number ${num1} < ${num2}`);
		break;
	default:
		alert(`Both numbers are equal`);
		break;
}
 */

// 4
// Запись решения через тернарный оператор сравнения
let num = +prompt('Input your number please')
alert((num1 > 15) // if
	? `Number ${num1} > 15` //do
	: (num1 < num2) //else if
		? `Number ${num1} < 15` //do
		: `Your number is equeled 15`); // else do
