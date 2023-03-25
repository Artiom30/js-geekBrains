// Кострукции для создания циклов

/*
if (condition) {
	object
}
while (condition) {

}

function(params) {

}
for (count = 0; count > length; count++) {

}
*/
/*
let count = 0;
while (count < 3) {
	console.log('Hello');
	count++;
}
 */
// for (let i = 0; i < 3; i++) {
// 	console.log('Hello for');
// }

// for (let j = 0; j <= 2; j++) {
// 	console.log(j);
// }

// Задача с распределением пароля с помощью счётчика и цикла do...while

/* let pass;
do {
	pass = Number(prompt('Введите пароль'));
} while (pass !== 234); */

// Для того чтобы ограничить количество попыток ввода пользователем пароля нужно добавить счётчик и условие ветвление с указанием границы попыток
// Очень важна последовательность записи условия ветвления и тела цикла do. Если поменять местами последовательность тщ программа будет просить пароль 3 раза даже если пользователь введёт верное значение.
/*
let pass;
let count = 0;
do {
	if (count >= 3) {
		alert('Пароль не верный');
	}
	pass = Number(prompt('Введите пароль'));
	count++;
} while (pass !== 234);
 */
// Самостоятельное решение задачи через цикл for
/* 
let pass;
for (let i = 0; i <= 2 && pass !== 234; i++) {
	pass = Number(prompt('Введите пароль'));
}
if (pass !== 234) {
	alert('Пароль не верный');
}
 */


