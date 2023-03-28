// Задание 3
/* 
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
 */
function showMaxNumber(getNumbers) {
	console.log(`The maximum number is ${Math.max(getNumbers)}`);
}

const getNumbers = () => {
	const numA = +prompt('Input number A :');
	const numB = +prompt('Input number B :');
	const numC = +prompt('Input number C :');
	return numA, numB, numC;
}
showMaxNumber(getNumbers());

