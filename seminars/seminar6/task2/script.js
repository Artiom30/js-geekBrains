//  Задание 2
/*
1. Дан тег <a class="link" href="#">link text html</a>
	 Вам необходимо поменять текст внутри ссылки на “link text js”
	 Заменить href, на значение https://developer.mozilla.org/ru/
2. Дан тег <img class="photo" src="" alt="">
	 Вам необходимо с помощью js поменять значение src на любое изображение из интернета
*/
// 1
const link = document.querySelector('.link');

link.textContent = 'link text js';

link.setAttribute('href', 'https://developer.mozilla.org/ru/');
// в тег <img class="photo" src="" alt=""> добавится атрибут href="https://developer.mozilla.org/ru/"
// Функция setAttribute('название атрибута', 'контент атрибута') - cоздаёт атрибут внутри элемента html

//2
const img = document.querySelector('.photo');
// img.setAttribute('src', 'https://oinfo.ru/img/gallery/prikols/Sv400047-tn2.jpg');
img.src = 'https://oinfo.ru/img/gallery/prikols/Sv400047-tn2.jpg';

// Так же можно задать атрибут специальным свойством для элементов element.атрибут = 'контент атрибута'

