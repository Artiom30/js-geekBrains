// Задание 3 и 4
import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo); // Преобразовали объект JSON в массив ( распарсили )
console.log(data);

/* 
data.forEach(item => {
	const imgDataElement = document.createElement('img');
	imgDataElement.setAttribute('alt', 'user photo');
	imgDataElement.src = item.url;
	document.querySelector('.content').appendChild(imgDataElement);
});
 */
const contentEl = document.querySelector('.content');

// Деструктуризация в методе forEach

// В аргументах к методу forEach() , вместо element - элемент массива по каторому проходит метод,
// пишем ({ id, name, age, url }) - таким образом мы деструктурируем ( разбиваем на части ) элемент, это позволяет удобно
// обратиться к ключам обьекта ( элемента массива ) .

data.forEach(({ id, name, age, url }) => {
	const div = document.createElement('div');// Создали обётку для профиля на странице
	div.classList.add('card'); // Добавили обёртке профился класс

	const img = document.createElement('img'); // Создали тег для картинки
	img.classList.add('card-img-top'); // Добавили картике класс
	img.src = url; // Указали что пусть к картинке брать из текущего элемента массива

	const cardBody = document.createElement('div'); // Создали обёртку для контентной части описания профиля
	cardBody.classList.add('card-body'); // Добавили обёртке класс

	const title = document.createElement('h4'); // Создали заголовок (для имени) профиля
	title.classList.add('card-title'); // Добавили имени класс
	title.textContent = name; // Указали что имя нужно брать из текущего элемента массива

	const subtitile = document.createElement('h5'); // Создали подзаголовок меньшего размера ( для возраста )
	subtitile.classList.add('card-subtitile', 'mb-2', 'text-muted');// Создали несколько классов для удобства стилизации
	subtitile.textContent = age; // Указали что контент для подзаголовка нужно брать из текущего элемента массива

	const idParagtaph = document.createElement('p'); // Создали тег <p> для указания id пользователя
	idParagtaph.classList.add('card-content');// Добавили тегу <p> класс
	idParagtaph.textContent = `ID ${id}`;// Добавили текст тегу <p> с указанием на id из данных в текущем элементе массива

	cardBody.appendChild(title);
	cardBody.appendChild(subtitile);
	cardBody.appendChild(idParagtaph);
	// Добавили все теги с описанием дочерними элементами обёртке с описанием
	div.appendChild(img);
	div.appendChild(cardBody);
	// Сделили дочерними элементами теги картинки и обёртки с описанием общей обёртке профиля пользователя
	contentEl.appendChild(div);
	// Всё обёртку пользопателя сделали дочерним элементом блока контент ( на странице html)
});


