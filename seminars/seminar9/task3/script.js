//  Задание 3
/*
1. Создать поле ввода (пароль)
2. Кнопка отправить
3. Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
4. Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”
*/

const passwordField = document.getElementById('password-field');
const submitButton = document.getElementById('submitButton');
const message = document.getElementById('message');

submitButton.addEventListener('click', () => {
	if (passwordField.value === 'пароль') { // чтобы обратиться к значнеию введённому пользователем в поле ввода , используем свойство value
		passwordField.style.borderColor = 'green';
		passwordField.style.borderWidth = '3px';
		message.style.color = 'green';
		message.textContent = 'Пароль верный';
		passwordField.setCustomValidity('Пароль верный'); // .setCustomValidity() - метод налаживающий на выбранный элемент предупреждающее сообщение с текстом , прописанным в атрибутах
	} else {
		passwordField.style.borderColor = 'red';
		passwordField.style.borderWidth = '3px';
		message.style.color = 'red';
		message.textContent = 'Пароль не верный';
		passwordField.setCustomValidity('Пароль не верный');
	};
	passwordField.reportValidity(); // чтобы  метод .setCustomValidity() сработал , нужно прописать в области видимости reportValidity() для этого же элемента
});


