// Задание 1
/*
			<div class="block">

			</div>

1.  Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили

					Цвет текста синий
					Рамка сплошная черная
					Цвет фона #f8f8f8
					Внутренний отступ 16px

2.  Добавить данному блоку класс item_1 (использовать setAttribute)
 */
/*
const blockEl = document.querySelector('.block');
const itemDiv = document.createElement('div');
itemDiv.classList.add('item');// classList - свойство  .add - метод для добавления
blockEl.appendChild(itemDiv);
itemDiv.textContent = 'Text Text Text '; // textContent  - тоже свойство обьекта

itemDiv.style.color = 'blue';
itemDiv.style.border = '1px solid black';
itemDiv.style.backgroundColor = '#f8f8f8';
itemDiv.style.padding = '16px';
// .style - это так же свойство обьекта с тегом , со своими ключами ( color , padding итд) и их значениями.

// itemDiv.setAttribute('class', 'block item_1'); // setAttribute() переписывает название атрибутов , даже если они уже записаны в самом HTML

itemDiv.classList.add('item_1');
 */

// Задание 2
/*
Дан код

			<div class="elem">
				<img src="photo.png" alt="photo">
				<div class="content">
					<h2 class="heading">Lorem, ipsum dolor.</h2>
					<p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
				</div>
			</div>

Необходимо с помощью querySelector найти параграф с классом text
1. Вывести в консоль соседний элемент h2
2. Вывести в консоль родительский элемент content
3. Вывести в консоль картинку
4. Вывести в консоль родительский элемент elem
 */
/*
// 1
const textEl = document.querySelector('.text');
const headingEl = textEl.previousElementSibling; // создаём новую переменную и с помощью reviousElementSibling обращаемся к предыдущему элементу на обном уровне вложенности
console.log(headingEl);
// 2

const contentEl = textEl.parentElement;
// const contentEl = textEl.parentNode;
console.log(contentEl);
//3
const imgEl = document.querySelector('img');
console.log(imgEl);
//4
const elemEl = contentEl.parentElement;
console.log(elemEl);
 */

// Задание 3
/*
			<div class="item">
				<div class="elem">
					<div class="info">
						<h2 class="subtitle">Lorem, ipsum dolor.</h2>
					</div>
				</div>
			</div>

С помощью querySelector найти элемент h2 и вывести в консоль всех его родителей
 */
/*
const h2El = document.querySelector('h2.subtitle');
let parentEl = h2El.parentElement; // аккамулирующая переменная с родителями
while (parentEl) {
	console.log(parentEl);
	parentEl = parentEl.parentElement;
}
// если свойство .parentElement в переменную parentEl запишет что-то == true , а изначально это родительский элемент заданного вложенного в несколько тегов тега h2, цикл while будет всводить в консоль каждый родительский элемент аккомулирующей переменной с родителем предыдущего. До тех пор пока не упрётся в тег <html>
 */
// Задание 4
/*
			<form action="#">
				<input type="text">
				<button class="btn">Отправить</button>
			</form>

1. Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
2. Цвет у рамки сделать красным
 */

const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('.btn');

// addEventListener должен быть на форме , на кнопку вешать нельзя , так как будет  модифицироваться сама кнопка
form.addEventListener('submit', () => { // событие - ввод данных submit
	if (input.value.trim() === "") {  // если поле ввода равняется пустой строке то ...
		const errorMessage = document.createElement('h2'); // создаётся h2
		errorMessage.textContent = 'вы не заполнили поле ввода'; // в h2 будет сообщение
		input.style.border = '1px solid red'; // и рамка поля ввоба поменяется на красный цвет
		form.insertBefore(errorMessage, input);
		// insertBefore() - метод , добовляющий что-то после чего-то. В аргументах ( что добавлять , после чего)
	}
});
