
// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
window.addEventListener('DOMContentLoaded', function (e) {
	// const target = e.target;
	// console.log(target);
	console.log('все теги прогрузились');
});

// 2 Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener('load', (e) => {
	console.log('страница загрузилась');
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
/* 
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование.
 */
const body = document.querySelector('body');


body.addEventListener('click', function (e) {
	const target = e.target;
	if (target === document.querySelector('[class="super_element"]')) {
		console.log('Класс "super_element" присутствует в элементе "div"'); // там p а не div !!! Я тут голову сломал пока к div обращался !
		console.log(target.tagName.toLowerCase());
	} else {
		console.log(`В этом элементе нет класса "super_element" это тег - ${target.tagName.toLowerCase()}`);
	}
	console.log(`Сообщения для того чтобы понять что я использую делегирование событий.
	${e.currentTarget}`);
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textareaEl = body.querySelector('textarea');
textareaEl.addEventListener('mouseover', function (e) {
	console.log('Вы навели на textarea.');
});

// 5.  Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const listEl = body.querySelector('ul');
const clickButton = (e) => {
	if (e.target.tagName === 'BUTTON') {
		console.log(e.target.innerText);
	};
};

listEl.addEventListener('click', clickButton);

// 6.  Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Ответ: addEventListener для элементов списка наложен на ul , и js выполнит сначала то что записано именно для ul , а это callback в аргументах к addEventListener. ( надеюсь я правильно всё понял , по шагам в отладчике по крайней мере так...).

// 7.  С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const itemElements = body.querySelectorAll('li');
console.log(itemElements);
itemElements.forEach((element, index) => {
	if (index % 2 === 1) {
		element.setAttribute('style', 'background:red;');
	}
});


