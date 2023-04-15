//  Задание 3
/*
1. Создать кнопку, которая добавляеn заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
2. Создать вторую кнопку, которая будет удалять созданный заголовок h1
3. Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
*/

// 1
document.getElementById('btnAdd').addEventListener('click', () => { // Ловим первую кнопку со страницы по id, и налаживем на неё обработчик событий
	const h1El = document.createElement('h1');// Создаём заголовок h1
	h1El.textContent = 'New heading'; // Добавляем в него текст ( можно и через свойство .innerText)
	const button = document.getElementById('btnAdd'); // В рамкаж функции ловим кнопку из html
	button.parentElement.insertBefore(h1El, button.nextElementSibling);
	// Добавить родителю кнопки , заголовок h1 следующим по вложенности после этой же кнопки ( у меня щас мозг сломается)
});
// 2
document.getElementById('btnRemove').addEventListener('click', () => {
	const h1El = document.querySelector('h1'); // находим элемент с заголовком
	if (h1El) { // если он был создан в переменной будет значение true
		h1El.parentElement.removeChild(h1El);
	};
});
// 3
// 'mouseover' - тип события, отслеживающий наведения курсорм мыши на элемент
// 'mouseout' - тип события, отслеживающий уберание курсора мыши от элемента
const hoverBtn = document.getElementById('btnHover');
hoverBtn.addEventListener('mouseover', () => {
	console.log('Mouse hover on button');
});
hoverBtn.addEventListener('mouseout', () => {
	console.log('Mouse hover not on button');
});



