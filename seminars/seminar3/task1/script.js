//  Задание 1
/*
1. Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)
2. Создайте функцию которая возводит переданное число в квадрат
3. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
*/



// 1
/*
let name = String(prompt('Input your name'));
let lastName = String(prompt('Input your lastname'));
let userAge = Number(prompt('Input your age'));
 */
/*
// Моё решение
function greetings(name, lastName, age) {
	console.log(`Hello ${name} ${lastName} with age ${age}`);
}
greetings(name, lastName, userAge);
 */
/*
// Решение с семинара
function greetings(name, lastName, age) {
	return `Hello ${name} ${lastName} , with age ${age}`;
}

alert(greetings(name, lastName, userAge));

console.log(greetings('Иван', 'Петров', 20));
 */
// 2
/*
function squareNum(num) {
	return num * num;
}
console.log(squareNum(4));
 */
// 3
/* 
function checkNumber(num) {
	if (num > 0) {
		return ('---');
	} else if (num < 0) {
		return ('---');
	}
}

// checkNumber(-4);

const a = checkNumber(-4);
console.log(a);
 */