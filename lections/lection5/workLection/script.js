// Методы для работы с массивами


const array = [1, 2, 3, 10, 15];
// увеличим каждый элемент массива в 2 раза

// map
/*
array.map(item => item * 2); // item -это элемент массива .
// 1 аргумент текущий элемент
// 2 аргумент это действие , каторое нужно произвести
const arrayUp = array.map(item => item * 2); // результат перебора по массиву запишем в новый массив
console.log(arrayUp); // [ 2, 4, 6, 20, 30 ]
 */
// filter
// выбрать из массива элементовы > 10
/*
const filterArr = array.filter(item => item >= 10) // 10 15
console.log(filterArr); // [ 10, 15 ];
 */
// some

// Используется для того чтобы знать есть ли такие элементы с таким значением или нет
/*
const someArr = array.some(item => item >= 10) // Как только при пересчёте элементов наткнётся на 10 выдаст true
console.log(someArr);// true
 */

// reduce

// Сложим все значения элементов массива

const sumArr = array.reduce((acc, element) => acc + element); // В аргументах пишется любая меременная , обозначающая что в неё будет скрадываться результат действия и указание на путь к тому элементу откуда брать значения (acc, element). А в обратной функции пишется действие с этими аргументами НА КАЖДОЙ ИТЕРАЦИИ ( проходу по массиву ).
console.log(sumArr); // 31