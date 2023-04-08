// Работа с HTMLCollections

const divElement = document.querySelector('.content');
console.log(divElement.childNodes.length); // 7  - NodeList массив
console.log(divElement.children.length); // 3 - HTMLCollection обьект 

// Для работы с массивом NodeList
Array.from(divElement.childNodes).forEach((childNode) => {
	console.log('childNode "%s" типа "%d"', childNode.nodeName, childNode.nodeType);
});

// Для работы с обьектом HTMLCollection оператор spred
[...divElement.children].forEach((child) => {
	console.log('childNode "%s" типа "%d"', child.nodeName, child.nodeType);
});

// divElement.children - это обьет и forEach(divElement.children) не возможен
// [...divElement.children] такая запись создаёт новый массив ( или псевдомассив) и с помощью ...spred позволяет пройти по элементам обьекта