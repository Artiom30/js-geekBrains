// Задание 3
/* 
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
 */
const newArray = [];
for (let i = 0; i < 5; i++) {
	newArray[i] = Math.round(Math.random() * 10);
	if (newArray[i] == 10) {
		newArray[i] -= 1;
	}
}
console.log(newArray);