//  Задание 1
/*
1. В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
2. Добавить кнопку отправить
3. При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
4. Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями
*/

const checkbox = document.getElementById('agree');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
	if (!checkbox.checked) { // в условии если checkbox НЕ включен ( если checkbox не checked )
		const error = document.createElement('div'); // создаётся блок с сообщением
		error.textContent = 'Необходимо согласиться с условиями'; // текст сообщения
		checkbox.parentElement.appendChild(error); // в родительский блок для checkbox, добавляем дочерним элементом елемент с ошибкой
	}
});




