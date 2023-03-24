// Задание 3
/* 
В переменной day лежит какое-то число из интервала от 1 до 31. 
Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
 */
let day = +prompt("Enter today's date");

switch (true) {
	case day >= 1 && day < 10:
		alert('Now the first decade of the month');
		break;
	case day >= 10 && day < 20:
		alert('Now the second decade of the month');
		break;
	case day >= 20 && day <= 31:
		alert('Now the third decade of the month');
		break;

	default:
		alert('You entered something incorrectly.')
		break;
}