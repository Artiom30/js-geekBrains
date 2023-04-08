//  Задание 5
/*
1.  Дан тег

				<div class="content"></div>ъ

2.  Создайте с помощью javascript новый элемент button
3.  Добавьте текст для кнопки “Отправить”
4.  При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
*/


const contentEl = document.querySelector('.content');
const btn = document.createElement('button');
btn.textContent = 'Отправить';
contentEl.appendChild(btn);

btn.addEventListener('click', () => {
	btn.textContent = 'Текст отправлен'; // Поменяет тект внутри кнопки
	setTimeout(() => { // setTimeout - функция отложенного действия.
		btn.textContent = 'Отправить';
	}, 2000);
});

// btn.onclick = function () {
// 	btn.textContent = 'Текст отправлен';
// }