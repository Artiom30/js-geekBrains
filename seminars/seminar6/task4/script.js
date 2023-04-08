//  Задание 4
/*
1.  Создать элемент button, добавить в блок

				<div class="content"></div>

2.  При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
*/

const contentEl = document.querySelector('.content'); // Словили элемент div из HTML

const btn = document.createElement('button'); // Создали кнопку

btn.textContent = 'Нажми на кнопку!'; // Дабавили то что будет написано в кнопке

contentEl.appendChild(btn); // Добавили кнопку в элемент div на страницу HTML дочерним элементом

let clickCount = 0; // Переменная со счётчиком кликов
btn.addEventListener('click', () => { // .addEventListener() - это функция прослушивателя событий, берёт в себя 2 аргумента 1й в 'названия события' 2й функциональное выражение (то что должно произойти после события) 
	clickCount++;
	console.log(`Жмякнул ${clickCount} раз`);
});

// Кнопка сброса
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Сброс жмяков';
contentEl.appendChild(resetBtn);
// resetButton.setAttribute('id', 'resetButton'); - это чтобы добавить атрибутов кнопке

resetBtn.addEventListener('click', () => {
	clickCount = 0;
	console.log('ВСЕ ЖМЯКИ = 0 !');
});