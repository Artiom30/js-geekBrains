//  Задание 5
/*
1.  Пользователь с клавиатуры вводит число, Необходимо создать условный оператор который

					Выводит в консоль “Число больше 5”
					Выводит в консоль “Число меньше 5”
					Выводит в консоль “Число равно 5”

2.  Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.

3.  Пользовать с клавиатуры вводит 2 числа

					Необходимо найти какое из двух чисел минимальное

4.  Пользователь с клавиатуры вводит число, Проверьте, что данная переменная больше нуля и меньше 15.
*/

// 1
/*
function ansver(number) {
	if (userNumber > 5) {
		alert(`Number ${userNumber} is more than 5`);
	} else if (userNumber < 5) {
		alert(`Number ${userNumber} is less than 5`);
	} else {
		alert(`Number ${userNumber} is equale 5`);
	}
}

const userNumber = +prompt('input your Number');
ansver(userNumber);
 */

// 2
/*
const test1 = 4;
const test2 = 5;

const equalityTest = (num1, num2) => { (num1 === num2) ? console.log('equale') : console.log('no equale'); }

equalityTest(test1, test2);
 */

// 3
/*
const firstNum = +prompt('input your first number');
const secondNum = +prompt('input your second number');

const minNumber = (num1, num2) => {
	alert(`${Math.min(num1, num2)} is less or equile!`);
}
minNumber(firstNum, secondNum);
 */

// 4 
/* 
const userNumber = +prompt('input your number');

const valueRange = (num = 0) => {
	(num >= 0 && num <= 15)
		? alert('Your number is more or equals than 0 and less or equals than 15')
		: alert('Your number is not more or equals than 0 and not less or equals than 15')
}
valueRange(userNumber);
 */