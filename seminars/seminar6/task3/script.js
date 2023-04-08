//  Задание 3
/*
1.  Дан тег

					<div class="content"></div>

2.  Создайте новый элемент p
3.  Добавьте в него текст “Новый текстовый элемент”
4.  Добавьте созданный элемент внутри

					<div class="content"></div>

5.  Удалите добавленный узел
*/

// 1
const divContent = document.querySelector('.content');

// 2
const newP = document.createElement('p');
// 3

newP.textContent = 'Новый текстовый элемент';
// 4

divContent.appendChild(newP); // создаст новый дочерний элемент внутри divContent
// 5
divContent.remove(newP);

divContent.removeChild(newP); // С уточнением что это дочерний элемент )


