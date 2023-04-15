//  Задание 2
/*
1. Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
2. Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
3. Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
4. Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
*/

document.getElementById('btn1').onclick = function () {
	console.log('Кнопка 1');
}
document.getElementById('btn2').onclick = function () {
	console.log('Кнопка 2');

}
document.getElementById('btn3').onclick = function () {
	console.log('Кнопка 3');
}
// Для того чтобы сосчитать количество событий , можно  создать перед функцией с событием счётчик в виде переменной, и использовать его потом в функции
let clickCount = 0;
document.getElementById('btn4').onclick = function () {
	clickCount++;
	console.log(`Нажата кнопка 4 ${clickCount} раз`);
}
document.getElementById('btn5').addEventListener('click', function () { // .this НЕ РАБОТАЕТ В СТРЕЛОЧНЫХ ФУНКЦИЯХ
	// чтобы эта функция заработала как стрелочная , document.getElementById('btn5') нужно помещать в отдельную переменную. Эта Функция - анонимная.

	this.innerText = 'Вы нажали на эту кнопку';
});
/* .innerText - свойство , для ИЗМЕНЕНИЯ текста внутри элемента HTML.
В данном случае внутри кнопки */