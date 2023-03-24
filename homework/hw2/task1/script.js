// Задание 1
/* 
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
 */

const num1 = Number(prompt('Inpunput first number :', 10));

alert((num1 <= 1) ? `Number ${num1} is equal or less than 1` : `Number ${num1} is more than 1`);

const num2 = Number(prompt('Inpunput second number :', 10));

alert((num1 <= 3) ? `Number ${num2} is equal or more than 3` : `Number ${num2} is less than 3`);
