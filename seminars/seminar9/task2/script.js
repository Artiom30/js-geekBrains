//  Задание 2
/*
В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
Кнопка отправить
Если выбран чай, необходимо вывести сообщение “Чай закончился”
Если выбран кофе, необходимо вывести соообщение “кофе закончился”

*/


const teaButton = document.querySelector('input[name="drink"][value="tea"]');
console.log(teaButton);
const coffeeButton = document.querySelector('input[name="drink"][value="coffee"]');
console.log(coffeeButton);

const submitButton = document.getElementById('submit');
// Создадим одно событие для двух кнопок типа radio . С помощью оператора ветвления if 
submitButton.addEventListener('click', () => {
	if (teaButton.checked) { // У input типа radio так же есть свойство checked как и у checkbox
		alert('Чай отстствует');
	} else if (coffeeButton.checked) {
		alert('Кофе отстствует');
	};
});


