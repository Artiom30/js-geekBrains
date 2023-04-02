//  Задание 1
/*
1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”
2. Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя и возраст через дефис.
3. Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
4. Удалите свойство surname
 */

// 1
/*
const week = {
	1: 'Понедельник',
	2: 'Вторник',
	3: 'Среда',
	4: 'Четверг',
	5: 'Пятница',
	6: 'Суббота',
	7: 'Воскресенье'
}
console.log(week[2]);
 */
// 2
/*
// Моё решение
const user = {
	name: 'Artiom',
	surname: 'Mezeynikov',
	age: 30
}
// console.log(`${user.name} ${user.surname}-${age}`);
*/

// Функция-конструктор.
/*
Это функция которая будет создавать обьект из полученных в неё аргументов,
по шаблону прописанному в теле.
Название пишется с большой буквы
this - пишется только в теле  Функции - конструктора, и говорит о том что именно в этом обьекте будет совершено дествие прописанное далее.
При создании нового обьекта используется функция new
Новый обьект помещается в переменную
 */
/*
function User(name, surname, patronymic) {
	this.name = name; // создать в этом обьекте ключ name и присвоить ему значение из полученных аргументов
	this.surname = surname;
	this.patronymic = patronymic;
}

const name = 'Artiom';
const surname = 'Mezeynikov';
const person = new User(name, surname);
console.log(person); // User { name: 'Artiom', surname: 'Mezeynikov' }
 */
// 3
/* 
person.patronymic = String(prompt('Input your Patronymic:'));
console.log(person);

// 4

delete person.surname;
console.log(person);
 */
