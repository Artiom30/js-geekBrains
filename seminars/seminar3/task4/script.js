//  Задание 4
/*
1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

2. Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)
*/

// 1
/*
// Конструкция switch строго сравнивает значение заданное в условии switcha с аргументами каждого case, и при совпадении с условием завершает работу всего switch.
function getDay(day) {
	switch (day) { // (day) - условие switch
			case 1: // 1 - аргумент для сравнения с условием
			return 'Понедельник';
			break;
		case 2:
			return 'Вторник';
			break;
		case 3:
			return 'Среда';
			break;
		case 4:
			return 'Четверг';
			break;
		case 5:
			return 'Пятница';
			break;
		case 6:
			return 'Суббота';
			break;
		case 7:
			return 'Воскресенье';
			break;
		default:
			return 'Error';
			break;
	}
}
console.log(getDay(1));
 */
// 2

// Date - функция-конструктор JS
// new Date() - объект
/* 
function greateengs(name) {
	const now = new Date(); // Создаём строку со значениями текущего состояния даты
	// К примеру : 'Sun Mar 26 2023 08:57:33 GMT+0300 (Москва, стандартное время)' . Значения берутся с компьютера
	const hour = now.getHours(); // Метод getHours() обьекта Date даст значения текущего времени.Записываем значнеия в переменную и проверяем условием if
	if (hour >= 6 && hour < 12) {
		return `Доброе утро ${name}`;
	} else if (hour >= 12 && hour < 18) {
		return `Добрый день ${name}`;
	} else if (hour >= 18 && hour < 22) {
		return `Добрый вечер ${name}`;
	} else {
		return `Доброй ночи ${name}`;
	}
}
console.log(greateengs('Artiom'));
 */
