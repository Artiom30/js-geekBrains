// Задание 2
/* 
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
 */
function showUserMoney() {
	console.log(`The salary after taxes is equal to ${taxDeduction}`);
}
const taxDeduction = (money) => {
	return money * 0.87;
}

showUserMoney(taxDeduction(1000));
