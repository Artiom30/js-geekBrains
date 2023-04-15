//  Задание 1
/*
1. В html создать кнопку button
2. После загрузки страницы вывести в консоль текст “страница загрузилась”
3. Добавить событие onclick которое выводит в консоль текст “событие onclick”
4. Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener
*/

const btnEl = document.querySelector('#btn');

window.onload = function () {
	console.log('страница загрузилась');
}
// или
// window.addEventListener('load', (e) => {
// 	console.log('страница загрузилась');
// });

document.getElementById('btn').onclick = function () {
	console.log('событие onclick');
};

document.getElementById('btn').addEventListener('click', () => {
	console.log('Событие addEventListener');
});
