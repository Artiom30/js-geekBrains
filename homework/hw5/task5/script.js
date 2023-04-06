// Задание 5
/* 
Дано 2 массива

			const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
			const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
 */
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// const objectKeyWeekEng = Object.assign({}, en);
// console.log(objectKeyWeekEng);

// const objectWeek = {};

function objetKeys(array) {
	const object = {};
	for (let i = 0; i < array.length; i++) {
		object[array[i]] = array[i];
	}
	return object;
}
const objectWeek = objetKeys(en);
console.log(objectWeek);