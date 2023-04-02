//  Задание 2
/*
1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
2. Узнайте длину следующего массива:
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
3. Пусть дан такой массив:
			const arr = [1, 2, 3];
			Добавьте ему в конец элементы 4 и 5.
4. Создайте произвольный массив из 5 элементов, Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.
 */

// 1
/*
// Моё решение
const array = [1, 2, 3];
console.log(array);
for (let i = 0; i < array.length; i++) {
	array[i]++;
}
console.log(array);
 */
// Решение через forEach
/*
// 3 аргумента в условии для модификации массива.
const array = [1, 2, 3];
array.forEach((element, index, array) => array[index]++); // Эту херню нельзя запихивать в переменную , вернёт undenind.
console.log(array); // [ 2, 3, 4 ]
// Если некоторые з аргументов не используются при модификации массива через forEach , их можно убрать
// array.forEach((element) => element++);
console.log(array); // [ 2, 3, 4 ]
 */

/*
// Решение с помощью метода map()
// Так же как и forEach метод map может брать 3 аргумента и callback действие, но при этом создаётся новый массив.
const array = [1, 2, 3];
const resultMap = array.map((el) => el + 1); // el + 1 - к значению элементу + 1
console.log(resultMap); // [2, 3, 4]
 */
/*
// Метод reduce() ( пример с факториальм числа )
// У метода reduce() перрвым аргументом является аккамулирующая переменная ( результат работы callback складывается туда)
const array = [1, 2, 3, 4, 5];
const resultReduce = array.reduce((F, el) => F * el);
console.log(resultReduce); // 120
 */

// 2
/*
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
console.log(arr.length); // 9
 */
// 3
/*
const arr = [1, 2, 3];
// arr.push(4,5);
arr.push(4);
arr.push(5);
console.log(arr); // [ 1, 2, 3, 4, 5 ]
 */

// 4
// Метод splice() для удаления элементов массива

const array = ['a', 'b', 'c', 'd', 'e'];
array.splice(1, 2);
console.log(array.length); // 3
console.log(array); // [ 'a', 'd', 'e' ]
