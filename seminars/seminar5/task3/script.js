//  Задание 3
/* 
const obj = {
		key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
		key2: {
		key1: 4,
		key2: 5,
		key3: 6,
},
		key3: {
		key1: 7,
		key2: 8,
		key3: 9,
},
}
Найдите сумму элементов приведенного объекта
 */

const obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}

// Решение с помощью вложенных друг в друга for in
/* 
let sum = 0; // аккомулирующая переменная
for (let key in obj) {
	for (let innerKey in obj[key]) { // innerKey - внутренний ключ для вложенных обьектов
		sum += obj[key][innerKey];
	}
}
console.log(sum);
 */


// Колбасное решение

// Object.values() функция-конструктор превращает обьект в массив по значениям свойств обьекта
const values = Object.values(obj); // Превращаем внутренние элементы в массив
console.log(obj);

/* {
	key1: { key1: 1, key2: 2, key3: 3 },
	key2: { key1: 4, key2: 5, key3: 6 },
	key3: { key1: 7, key2: 8, key3: 9 }
} */

// Делаем из каждого элемента полученного массива так же массив с помощью map в функциональном выражении

// map проходит по внешнему массиву ( каждый элемент массива -это обьект ),
// и с помощью Object.values() превращаем каждый обьект в массив
// const resValues = values.map((el) => Object.values(el));
// console.log(resValues);
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]


// Обьеденим значения массивов с помощью array1.concat(array2)

// Обьединение массивов через оператор concat
/*
const generalArray = values.concat(resValues);
console.log(generalArray);
 */

// Оператор spred        ( ...) и concat в одном деёствии
/*
const resValues = [].concat(...values.map((el) => Object.values(el)));
console.log(resValues);
 */
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]

// Через метод reduce соcчитаем сумму
/*
const resValues = [].concat(...values.map((el) => Object.values(el))).reduce((acc, val) => acc + val, 0);
console.log(resValues); //45
 */

// Решение с помощью reduce , вместо map ( Два reduce в одну строку)
/* 
const resValues = values.reduce((acc, el) => acc.concat(Object.values(el)), []).reduce((acc, val) => acc + val, 0);
/* 
Первый reduce проходит по массиву ( основному , сделаного из изначального обьекта) , и при каждой итерации , превращает каждый внутренний обьект в массив , присоединяет его к аккомулятору через concat. В роли аакомулятора [] обнулённый массив.
по итогу в аккомуляторе остаётся массив значенй :
					[
						1, 2, 3, 4, 5,
						6, 7, 8, 9
					]
Второй reduce из полученного массива аккомулирует все элементы .
console.log(resValues); //45
*/

