// Задание 4
/* 
Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
(Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

### Пример 1:
		Пользователь ввел число 163. Программа должна вывести:
		"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"
### Пример 2:
		Пользователь ввел число 74. Программа должна вывести:
		"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"
### Пример 3:
		Пользователь ввел число 9537. Программа должна вывести:
		"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: пользователь всегда вводит корректное положительное целое число.
 */

//### Пример 1:
/* 
let threeDigitNumber = +prompt('Input the Three digit number');

function smashNumber() {
	if (isNaN(threeDigitNumber)) {
		alert('This is NoT a Number!!!');
	} else if (threeDigitNumber > 99 && threeDigitNumber < 1000) {
		alert(`The number of hundreds of your number is : ${parseInt(threeDigitNumber / 100)}`);
		alert(`The number of tens in your number is : ${parseInt(threeDigitNumber / 10 % 10)}`);
		alert(`The number of ones in your number is : ${parseInt(threeDigitNumber % 10)}`);
	} else {
		alert('This is NoT Three digit number!!!');

	}

}
smashNumber();
 */

// ### Пример 2:

// Решение примера 1 прекрастно справляется с этой задачей
/* 
let userNumber = +prompt('Input the positive integer number');

function smashNumber() {
	if (isNaN(userNumber)) {
		alert('This is NoT a Number!!!');
	} else if (userNumber > 0 && userNumber < 1000) {
		alert(`The number of hundreds of your number is : ${parseInt(userNumber / 100)}`);
		alert(`The number of tens in your number is : ${parseInt(userNumber / 10 % 10)}`);
		alert(`The number of ones in your number is : ${parseInt(userNumber % 10)}`);
	} else {
		alert('This number is more than one thousand =(');

	}

}
smashNumber();
 */

// ### Пример 3:

let userNumber = +prompt('Input the positive integer number');

function smashNumber() {
	if (isNaN(userNumber)) {
		alert('This is NoT a Number!!!');
	} else if (userNumber > 0 && userNumber < 10000) {
		alert(`The number of hundreds of your number is : ${parseInt(userNumber / 100 % 10)}`);
		alert(`The number of tens in your number is : ${parseInt(userNumber / 10 % 10)}`);
		alert(`The number of ones in your number is : ${parseInt(userNumber % 10)}`);
	} else {
		alert('This number is more than ten thousand =(');

	}

}
smashNumber();

