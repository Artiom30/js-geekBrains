// Пример записи и вызова функции
/*
function helloName(name) {
	console.log(name);
}
helloName(); //undefined
helloName('Valera'); // Valera
 */

// Функция со счётчиком
/*
let count = 5;
// При создании переменной компьютер резервирует
// под неё часть памяти, функция же не задействует память.
function counter() {
	return count++; // count = count + 1;
}
counter(); //6
counter(); // 7
console.log(count);
 */

// Счётчик лет у пользователя

// let age = Number(prompt('Сколько вам лет?'));
/*
function upAge() {
	return age + 5;
}

console.log(`Через 5 лет вам будет ${upAge(age)}`);
 */
// Пример короткой стрелочной ЛОКАЛЬНОЙ функии возвращающей результат одного действия.
/*
const lvlUpAge = () => age + 5;
console.log(`Через 5 лет вам будет ${lvlUpAge()}`);
 */

// Инструкция по применению функций

// Если функция ничего не возвращает а чтото делает
/*
function hello() {
	console.log('Hello function');
}
hello();
 */
// Если функция возвращает что-то
/*
const sum = (params1, params2) => {
	return params1 + params2;
}
console.log(sum(2, 5));
 */

// Функция подсчёта налогов (из общей суммы вычесть 13%)
// Отследить по шагам в Devtools
/*
const salory = (money) => {
	money = money * 0.87; // money - money * 0.13
	return money * 0.75; // Так и не понял зачем от зарплаты ещё 25% отнимать, так и работает чёртова бухгалтерия!!!
}

let userMoney = Number(prompt('Сколько ты зарабатываешь ?'));

//console.log(salory(userMoney)); / / Теперь в переменной userMoney лежит сумма со свободным средствами пользователя
let moneyMonth = salory(userMoney);// Отнимем налоги с помощью функции.

console.log(`Для расходов можно использовать ${salory(userMoney)}`);

console.log(`На еду желательно потратить не больше чем ${moneyMonth * 0.3}`);
 */

// Различия между обычной и стрелочной функцией (инициализация	)
/*
sayHello(); // Функции можно размещать даже раньше чем они прописаны!
const hello2 = () => {
	alert('Привет2');
}
hello2(); // Но стрелочная функция не будет запускаться раньше инициализации

function sayHello() {
	alert('Привет');
}
 */
// Функция в событии onclick
/*
function sayHello() {
	// return 5; // return останавливает работу функции
	alert('Привет');
	alert('Нажали на кнопку');
}
 */

// Игра в загадки через кнопку и функцию конструктор
/* 
let userAnswer = promot('Зимой и летом одним цветом ?');

if (userAnswer === 'елка') {
	console.log("Yes");
} else {
	console.log("No");
}

let userAnswer2 = promot('Сидит дед во 100 шуб одет.Кто его раздевает тот слёзы проливает');

if (userAnswer.toLowerCase() === 'лук') {
	console.log("Yes");
} else {
	console.log("No");
}
 */
// Функция - конструктор . Собирает повторяющеея действия
function askQuestion(answer, question) {
	const userAnswer = prompt(question);

	if (userAnswer.toLowerCase() === answer) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}
/* 
askQuestion('лук', 'Сидит дед во 100 шуб одет.Кто его раздевает тот слёзы проливает');
askQuestion('лелка', 'Зимой и летом одним цветом ?');
 */
// Функци для вызова функций при нажании на кнопку
function puzzle() {
	askQuestion('лук', 'Сидит дед во 100 шуб одет.Кто его раздевает тот слёзы проливает');
	askQuestion('лелка', 'Зимой и летом одним цветом ?');
}

