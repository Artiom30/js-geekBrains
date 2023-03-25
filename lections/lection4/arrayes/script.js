// Массив всегда создаётся через const.
/*
const array = [];
array.push(1);
// Так добавляется элемент массива
console.log(array);
 */

// Обращение к элементам массива
/*
const array = [1, 2, 'hello'];
console.log(array); // показать весь массив
console.log(array[0]); // Обращение к элементу массива
console.log(array.length); // length - измеряет количество элементов в массиве
console.log(array[array.length - 1]); // обращение к последнему элементу массива
 */

// Пример записи данных в массив с клавиатуры пользователем
/*
// Длинная версия
const user = [];
const userName = prompt('Ваше Имя?');
const userAge = prompt('Ваш возраст?');
user.push(userName);
user.push(userAge);
console.log(user);
// Короткая версия
const user = [];
user.push(prompt('Ваше Имя?'));
user.push(Number(prompt('Ваш возраст?')));
console.log(user);
 */

// Метод pop - вытягивет последный элемент из массива
// Пример:
/*
const numbers = [12, 3, 19, 15];
console.log(numbers);

alert(`Зарпомни цифры ${numbers}`);

console.log(numbers.pop());
console.log(numbers);
 */
// Метод split - разбивающий строку на массив:
/*
const word = 'example';
console.log(word.split('')); // ('') -> в каком виде будут представлено содержимое элементов массива
const arrayWord = word.split(''); // Положить массив в переменную
const upLastWord = arrayWord.pop(); // e
// toLocaleUpperCase() функция JS сделает строчную переменную в Верхнем регистре из нижнего
arrayWord.push(upLastWord.toLocaleUpperCase()); // добавит элемент в массив
console.log(arrayWord.join(''));; // .join() -> метод для соединения массива в одно целое
 */

//Размиинка. Добависть элемент a = 4 ; в конец массива
/* 
const a = 4;
const array = [1, 2, 3];
console.log(array);
array.push(a);
console.log(array);
 */

// Примеры комбинирования циклов и массивов
/* 
const array = [5, 1, 2, 8, 3, 9, 17, 140];
for (let i = 0; i < array.length; i++) {
	const element = array[i]; // создаёт переменные с содержимым ячеек массива , в области видемости цикла for
	if (element >= 5) {
		console.log(element);
	} else {
		continue; // продолжает работу ?? или зачем это?
	}
}
 */
// Пример перебора вариантов атвета для загадки

const userAnswers = ['елка', 'ёлка', 'ель'];
const userAnswer = prompt('Зимой и летом одним цветом');

for (let i = 0; i < userAnswers.length; i++) {
	const element = userAnswers[i];
	if (element === userAnswer) {
		console.log('good!');
		break;
	} else {
		continue;
	}
}
