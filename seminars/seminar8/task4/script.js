//  Задание 4
/*
1. Создать в html список состоящий из 3-х произвольных элементов li
2. Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
3. Создать кнопку, которая будет удалять первый элемент из созданного списка
4. Создать кнопку, при клике на которую ей добавляется класс “click”
*/

const list = document.getElementById('myList');
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const addClassButton = document.getElementById('add-class');

addButton.addEventListener('click', () => {
	const newItemLi = document.createElement('li');
	newItemLi.innerText = 'New element list';
	list.appendChild(newItemLi);
});

removeButton.addEventListener('click', () => {
	const firstItem = list.querySelector('li:first-child'); // Обращаемся как бы к псевдо элементу 
	if (firstItem) {
		list.removeChild(firstItem);
	}
});

addClassButton.addEventListener('click', () => {
	addClassButton.classList.add('click');
});
console.log(addClassButton);